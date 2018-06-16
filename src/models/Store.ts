import { flow, types } from "mobx-state-tree";
import { default as l2, Agreement, Channel } from "../services/Layer2Service";
import { RouterState, RouterStore } from "mobx-state-router";
import { routes } from "./routes";

const notFound = new RouterState("notFound");

//let l2: Layer2Service | null = null;
//let localstore: LocalForage | null = null;

const Transation = types.model({
  from_id: types.string,
  from_type: types.string,
  amount: types.number,
  to_id: types.string,
  to_type: types.string
});

// TODO: move into state?
let prevPage: string = "";
let prevSubpage: string = "";

// test eth netid "0x7ea92dBce5387f8fF480Fe5D557aBd4C7B09054f"
// pages: ProfileMain, ChatMain, GameMain
const Store = types
  .model({
    balance: types.number,
    transactions: types.array(Transation),
    connected: false,
    page: "ChatMain",
    page_stateA: "",
    page_stateB: "",
    subpage: "",
    netkey: "0x3afa9e75471ef7d29d58fec49e48d17ba617bba8",
    prvkey: "0x24ac65de524e0ac045ba6a4267d263fc2a8384dcd79dcd26163a295057f0fa87"
  })
  .views(self => {
    return {};
  })
  .actions(self => {
    return {
      updateKeys(netkey: string, prvkey: string): void {
        self.netkey = netkey;
        self.prvkey = prvkey;
        l2.connect(self.prvkey);
      },
      setPage(page: string, subpage?: string, stateA?: string, stateB?: string): void {
        console.log("changing page to " + page + ":" + subpage);
        if (prevPage) console.log("page from ", prevPage, ":", prevSubpage);
        prevPage = self.page;
        prevSubpage = self.subpage;
        self.page = page;
        self.subpage = subpage || "";
        self.page_stateA = stateA || "";
        self.page_stateB = stateB || "";
      },
      createChannel(chan: Channel) {
        return l2.createChannel(chan);
      },

      // The typeof operator belo is the important one: this is how you interact with types introduced
      // by mobx-state-tree
      /*
      _transact: flow(function* transact(todo: typeof Transation.Type) {
        // aysnc test using FLOW and a generator for an operation
        const r = yield fetch("https://api.github.com");
        const b = yield r.json();
        self.balance = (b.current_user_url + "").charCodeAt(0);
      }),
      */

      createAgreement: flow(function* createAgreement(agreementParams: Agreement) {
        return yield l2.createAgreement(agreementParams);
      })
    };
  });

class RootStore {
  public router = new RouterStore(this, routes, notFound);
  public routerStore = this.router; // PATCH
  public app = Store.create({ balance: 0, transactions: [] });

  constructor(prvKey?: string) {
    const params: any = { balance: 0, transactions: [] };
    if (!!prvKey) params.prvkey = prvKey;
    this.app = Store.create(params);
  }
}

export { RootStore, Transation };
