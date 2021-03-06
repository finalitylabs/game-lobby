import * as React from 'react';

import '../App.css';
import { observer, inject } from "mobx-react";
import { RouterLink } from 'mobx-state-router';
//TODO back button
@observer
class UserProfile extends React.Component<any, any> {
    public stateName(obj:any):string {
        if(obj.closed === true) return "Closed";
        if(obj.inDispute) return "In Dispute";
        return "Open Pending";
    }
    public render() {
        const { rootStore: { routerStore } } = this.props;
        const { routerState: { params } } = routerStore;
        console.log( params.id );

        return (
            <div className='explorer'>
                <h2>Bob's Profile</h2>
                <RouterLink routeName="ChatRoom" params={{id:"1"}}><div className="profile-back">Back</div></RouterLink>
                <p><strong>Username:</strong> Bob</p>
                <p><strong>Wallet Address:</strong> 0x...</p>
             
                    <form className="tipping">
                        <input type="number" step="0.01"/>
                        <div className="send-eth">Send ETH</div>
                    </form>
         

                
                <h2>Game Stats</h2>
                <table>
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
                </table>

                 
            </div>
        );
    }
}

export default inject('rootStore')(UserProfile);
