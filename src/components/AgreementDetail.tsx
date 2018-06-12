import * as React from 'react';

import '../App.css';

import { default as l2, Channel } from "../services/Layer2Service";
import Store from "../models/Store";

function stateName(obj:any):string {
    if(obj.closed === true) return "Closed";
    if(obj.inDispute) return "In Dispute";
    if(obj.__active) return "active";
    return "Open Pending";
}

interface Props {
    store: typeof Store.Store.Type
}
class AgreementDetail extends React.Component<Props, {agreement:any, channels:Channel[]}> {
    constructor(props:any) {
        super(props)
        this.state = {agreement:null, channels:[] };
    }
    public render() {
        console.log('this.state.agreement', this.state.agreement);
        if(!this.state.agreement) return (<div className='explorer'/>);
        console.log('agreement', this.state.agreement)

        const a:any = this.state.agreement;
        const cstate:string = stateName(a);
        const agreementID = a.ID;

        
        const channels = this.state.channels.map((ch, index) => (
            <tr key={ch.ID}>
            {console.log("====", ch, ch.ID)}
                <td 
                    style={{ cursor: 'pointer'}}
                    onClick={() => this.props.store.setPage('ExplorerMain','ChannelDetail', agreementID, ch.ID)}><a href="#">{ch.ID}</a></td>
                <td>{ch.partyB}</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>{ch.balanceA}</td>
                <td>N/A</td>
                <td>(!)</td>
            </tr>)
        );
        

        // const channels = a.channels;

        return (
            <div className='explorer'>
                <h1><span
                        style={{cursor: 'pointer'}}
                        onClick={() => this.props.store.setPage('ExplorerMain', 'Explorer')}>Explorer</span> / Agreement {agreementID}</h1>
                <div className='exp-title-new'>
                    <h2>Agreement 1 Information</h2>
                    <button className='blue' onClick={()=>this.props.store.setPage('ChannelMain', 'CreateChannel', this.props.store.page_stateA)}>+ Channel</button>
                    <button className='blue' onClick={()=>this.props.store.setPage('ChannelMain', 'CreateChannel', this.props.store.page_stateA)}>+ <br /> Virtual Channel</button>
                    <button className='red'>Settle</button>
                </div>
                <div>
                <form className='agreement-detail-form'>
                    <label>TXHash
                        <p>{a.address}</p>
                    </label>
                    <label>
                        Status
                        <p>{cstate}</p>
                    </label>
                    <label>
                        Age
                        <p>X d X hrs</p>
                    </label>
                    <label>Counter Party
                        <p>{a.partyB}</p>
                    </label>
                    <label>State
                        <p>({ l2.web3().fromWei(a.balanceB, 'ether') }) {a.types[0]}</p>
                    </label>
                    <label>
                        Nonce & Position
                        <p>0 | XX</p>
                    </label>
                </form>
                </div>
                <div className='exp-data-table'>
                    <table>
                        <thead>
                            <tr>
                                
                                <th>Channels</th>
                                <th>Counter Party</th>
                                <th>TXHash</th>
                                <th>Age</th>
                                <th>State</th>
                                <th>Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {channels}
                            {/* <tr>
                                <td 
                                    style={{cursor: 'pointer'}}
                                    onClick={() => this.props.store.setPage('ExplorerMain', 'ChannelDetail')}>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Open Pending</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Active</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Disputed</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>To Be Disputed</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Closed</td>
                                
                            </tr> */}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
    public async componentDidMount() {
        const agreements = await l2.getAgreements();
        const agreementId = this.props.store.page_stateA; //Object.keys(agreements)[0];
        console.log('agreementId', agreementId, agreements[agreementId])


        const channels:Channel[] = await l2.getAllChannels(agreementId);
        this.setState({agreement: agreements[agreementId], channels});
    }
}

export default AgreementDetail;
