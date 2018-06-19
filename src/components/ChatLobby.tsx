import * as React from 'react';
import { observer, inject } from "mobx-react";
import { RouterLink } from 'mobx-state-router';
@observer
class ChatLobby extends React.Component<any, any> {
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
                    <tbody>
                    
                    <tr>
                        <th>Name</th>
                        <th>Number of Users</th>
                    </tr>
                    
                    <tr>
                        <td>Wubba wubba dub dub</td>
                        <td>23</td>
                        <RouterLink routeName="ChatRoom" params={{id:"1"}}>
                            <div className='chat-join-button'>Join</div>
                        </RouterLink>
                    </tr>
                    <tr>
                        <td>Mr. Poopy Butthole</td>
                        <td>30</td>
                        <RouterLink routeName="ChatRoom" params={{id:"1"}}>
                            <div className='chat-join-button'>Join</div>
                        </RouterLink>
                    </tr>
                    <tr>
                        <td>schwifty</td>
                        <td>14</td>
                        <RouterLink routeName="ChatRoom" params={{id:"1"}}>
                            <div className='chat-join-button'>Join</div>
                        </RouterLink>
                    </tr>
                    </tbody>
                </table>
                

            </div>
        );
    }
}

export default inject('rootStore')(ChatLobby);
