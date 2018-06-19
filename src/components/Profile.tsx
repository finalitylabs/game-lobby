import * as React from 'react';

// import { default as l2 } from "../services/Layer2Service";

class Profile extends React.Component<any, any> {
    public stateName(obj:any):string {
        if(obj.closed === true) return "Closed";
        if(obj.inDispute) return "In Dispute";
        return "Open Pending";
    }
    public render() {
        // const header = this.getHeader();

        // if(!this.state || !this.state.agreements) return (<div className='explorer'/>);
        // if(this.state.agreementIds.length === 0) return (<div className='explorer'>
        //     {header}
        //     <div className='exp-data-table'><h2>no agreements</h2></div>
        // </div>);

        // const ids:[string]= this.state.agreementIds as [string];
        // const ms:any = this.state.agreements;
        // console.log(ms[ids[0]]);

        // console.log('agreements', this.state.agreementIds)
        // const agreementList = ids.map((id, index) => (
        //     <tr key={id}>
        //         <td 
        //             style={{ cursor: 'pointer'}}
        //             onClick={() => this.props.store.app.setPage('AgreementDetail', '', id)}><a href="#">{id}</a></td>
        //         <td>{ms[id].partyB}</td>
        //         <td>{ms[id].address}</td>
        //         <td>X days X hrs</td>
        //         <td>X {ms[id].types[0]}</td>
        //         <td>{this.stateName(ms[id])}</td>
        //         <td>(!)</td>
        //     </tr>)
        // );

        

        return (
            <div className='explorer'>
                <h2>Profile</h2>
                <p><strong>Username:</strong> Alice</p>
                <p><strong>Wallet Address:</strong> 0x...</p>
                <p><strong>Account Balance:</strong> XX ETH</p>
                <h2>Game Stats</h2>
                <table>
                    <tbody>
                    <tr>
                        <th>Hero Class</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Win %</th>
                    </tr>
                        <tr>
                            <td>Warrior</td>
                            <td>25</td>
                            <td>10</td>
                            <td>71%</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Transactions</h2>
                <table>
                    <tr>
                        <th>Tx Hash</th>
                        <th>Age</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Memo</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>0x...</td>
                        <td>X days X hours</td>
                        <td>Alice</td>
                        <td>Bob</td>
                        <td>Game Won</td>
                        <td>XX ETH</td>
                        <td>Settle</td>
                    </tr>
                    <tr>
                        <td>0x...</td>
                        <td>X days X hours</td>
                        <td>Bon</td>
                        <td>Alice</td>
                        <td>Game Lost</td>
                        <td>XX ETH</td>
                        <td>Closed</td>
                    </tr>
                </table> 
            </div>
        );
    }
    // public async componentDidMount() {
    //     const agreements = await l2.getAgreements();
    //     const agreementIds = Object.keys(agreements);
    //     this.setState({agreements, agreementIds});
    // }
    // private getHeader() {
    //     return [(<h1>Explorer</h1>),
    //         (<div className='exp-title-new'>
    //             <h2>Agreements</h2>
    //             <div onClick={() => this.props.store.app.setPage('ExplorerMain', 'CreateAgreement')}>+ New</div>
    //         </div>)];
    // }
}

export default Profile;
