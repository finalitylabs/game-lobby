import * as React from 'react';

class UserProfile extends React.Component<any, any> {
    public stateName(obj:any):string {
        if(obj.closed === true) return "Closed";
        if(obj.inDispute) return "In Dispute";
        return "Open Pending";
    }
    public render() {
        return (
            <div className='explorer'>
                <h2>Profile</h2>
                <p><strong>Username:</strong> Bob</p>
                <p><strong>Wallet Address:</strong> 0x...</p>
                
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

export default UserProfile;
