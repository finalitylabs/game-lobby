import { default as Layer2lib, BrowserStorageProxy, Agreement } from "js-layer2lib";
import * as localforage from "localforage";
// import { isAwaitExpression } from 'babel-types';

export interface AgreementDetails {
  agreement: Agreement;
  tx: any;
  states: any;
}

let l2: Layer2lib | null = null;
const debugAgreementId = "testid2";

export interface Channel {
  ID: string;
  agreementID: string;
  type: string;
  balanceA: string;
  balanceB: string;
  partyA: string;
  partyB: string;
  dbSalt?: string;
}

export type Agreement = Agreement;
class Layer2Service {
  public connected: boolean = false;
  public localStore: LocalForage;
  private dbSalt: string = "Alice";
  constructor() {
    this.connected = false;
  }
  public connect(privateKey: string, dbSalt?: string): void {
    if (l2 !== null) {
      // return; // already connected
      // TODO close previous layer2 connection
    }
    this.dbSalt = dbSalt || this.dbSalt;

    const localstore = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name: "channel-explorer",
      version: 1.0,
      size: 4980736,
      storeName: "Wallet",
      description: "Stores data for layer2lib"
    });
    const options = {
      db: new BrowserStorageProxy(localstore),
      privateKey
    };
    this.localStore = localstore;
    l2 = new Layer2lib("http://127.0.0.1:8545", options);
    l2!.initGSC({});
    this.connected = true;
  }

  public web3() {
    return l2!.web3;
  }

  public async getAgreements(): Promise<{ [id: string]: Agreement[] }> {
    const data = await l2!.gsc.getAllAgreements();
    return data || [];
  }

  public async getAllChannels(agreementID?: string): Promise<Channel[]> {
    let allChannels: any = await l2!.gsc.getAllChannels();
    allChannels = allChannels || {};
    if (!agreementID) return Object.values(allChannels);
    const v: Channel[] = Object.values(allChannels);
    return v.filter(chan => chan.agreementID === agreementID);
  }

  public async getChannel(channelID: string): Promise<Channel> {
    const c: Channel = await l2!.gsc.getChannel(channelID);
    return c;
  }

  // requires full name with salt
  public async getTransactions(channelID: string) {
    return l2!.gsc.getTransactions(this.dbSalt + channelID);
  }

  public async createChannel(channelParams: Channel): Promise<Channel> {
    /*
    let channelAlice = {
      dbSalt: 'Alice', // for testing multiple layer2 instances on same db
      ID: 'respek',
      agreementID: 'spankHub1337',
      type: 'ether',
      balanceA: web3.toWei(0.03, 'ether'), 
      balanceB: web3.toWei(0.05, 'ether')
    }
    */
    //await lAlice.openGSCChannel(channelAlice)

    // const id = agreementParams.ID;
    // TODO do not hardcode Wei
    // replace using salt from indexeddb
    channelParams.type = channelParams.type.toLowerCase();
    channelParams.dbSalt = this.dbSalt;
    const a = parseFloat(channelParams.balanceA);
    const b = parseFloat(channelParams.balanceB);
    channelParams.balanceA = l2!.web3.toWei(a, "ether");
    channelParams.balanceB = l2!.web3.toWei(b, "ether");
    console.log("createChannel options", JSON.stringify(channelParams));
    // balanceA

    // TODO: use openGSCChannel with types
    await l2!.gsc.openChannel({ ...channelParams });
    const chan = await this.getChannel(channelParams.ID);
    console.log("channel saved and fetched", chan);
    return chan;
  }

  public async getBalance(mainnetAccount?: string): Promise<number> {
    // TODO remove, for testing
    mainnetAccount = mainnetAccount || "0x7ea92dBce5387f8fF480Fe5D557aBd4C7B09054f";
    // aysnc test using FLOW and a generator for an operation
    const bal: string = await l2!.getMainnetBalance(mainnetAccount);
    return Number.parseFloat(bal);
  }

  public async getAgreement(agreementId?: string): Promise<Agreement> {
    const id = agreementId || debugAgreementId;
    const entryID = id + this.dbSalt;
    console.log("agreementId", entryID);
    const agreement: Agreement = await l2!.getGSCAgreement(entryID);
    console.log("agreement", agreement);
    return agreement;
  }

  public async getAgreementDetails(agreementId?: string): Promise<AgreementDetails> {
    const id = agreementId || debugAgreementId;
    const entryID = id + this.dbSalt;

    const agreement = await await l2!.getGSCAgreement(entryID);
    //console.log(Bob_agreement)
    const tx = await l2!.gsc.getTransactions(entryID);
    //console.log(Bob_tx)
    const states = await l2!.gsc.getStates(entryID);
    //console.log(BobAgreementState)
    return { agreement, tx, states };
  }

  public async createAgreement(agreementParams: any): Promise<Agreement> {
    // const id = agreementParams.ID;
    agreementParams.dbSalt = this.dbSalt;
    // TODO do not hardcode Wei
    // replace using salt from indexeddb
    const a = parseFloat(agreementParams.balanceA);
    const b = parseFloat(agreementParams.balanceB);
    agreementParams.balanceA = l2!.web3.toWei(a, "ether");
    agreementParams.balanceB = l2!.web3.toWei(b, "ether");
    console.log("createAgreement options", JSON.stringify(agreementParams));
    // balanceA

    await l2!.createGSCAgreement({ ...agreementParams }); // copy object

    // const entryID = agreementParams.ID + agreementParams.dbSalt;
    const agreement = await this.getAgreement(agreementParams.ID);
    console.log("agreement saved and fetched", agreement);

    // now test closing contract
    /*
    const updateState = {
      isClose: 1
    };

    const r = yield l2!.gsc.initiateUpdateChannelState(entryID, updateState, false);
    console.log('r', r);
    */
    return agreement;
  }

  public initateCloseAgreement(agreementParams: any): void {
    return;
  }
}

const instance = new Layer2Service();
export default instance;
