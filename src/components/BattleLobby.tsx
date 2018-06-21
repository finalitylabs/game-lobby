import * as React from 'react';
import { RouterLink } from 'mobx-state-router';
import '../App.css';

class BattleLobby extends React.Component {
    public render() {
        return (
            <div className='chatroom'> 
                <div className="chat-header">
                    <h1>Battle Lobby</h1>
                    <h2>Opponent: Bob</h2>
                    <h3>Wager: 3 ETH</h3>
                </div>
                    <RouterLink routeName='GameLobby'><div className="chat-back">Back</div></RouterLink>
                <div className="chat-main">
                    <div className="chat-box">
                        <div className='chat-messages'>
                            <ul>
                                <li><strong>Alice: </strong>You ready to lose?</li>
                                <li><strong>Bob: </strong>I've never played this game</li>
                                <li><strong>Alice: </strong>Just click ready...</li>
                            </ul>
                            <input type="text"placeholder='Say something...'/>
                            <div className="chat-send">Send</div>
                        </div>
                    </div>
                    <div className="chat-users">
                        <h2>Users</h2>
                        <hr />
                        <ul>
                            <li>Alice (You)</li>
                            <li>Bob</li>
                            
                        </ul>
                        <RouterLink routeName="GameJoin" params={{id:"1"}}>
                            <div className="battle-ready-button">READY</div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default BattleLobby;
