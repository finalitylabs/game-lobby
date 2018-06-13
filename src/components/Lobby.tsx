import * as React from 'react';

class Lobby extends React.Component {
    public render() {
        return (
            <div className='lobby'>
                <h1>Chat Room Lobby</h1>
                <div className='chat-name'>
                    <div className='chat-input'>
                    <h3>Chat room name:</h3>
                    <input type="text" />   
                    </div>
                    <div className='create-chat-button'>Create a Room</div>
                    
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Number of Users</th>
                    </tr>
                    <tr>
                        <td>Wubba wubba dub dub</td>
                        <td>23</td>
                        <div className='chat-join-button'>Join</div>
                    </tr>
                    <tr>
                        <td>Mr. Poopy Butthole</td>
                        <td>30</td>
                        <div className='chat-join-button'>Join</div>
                    </tr>
                    <tr>
                        <td>schwifty</td>
                        <td>14</td>
                        <div className='chat-join-button'>Join</div>
                    </tr>
                </table>
                

            </div>
        );
    }
}

export default Lobby;
