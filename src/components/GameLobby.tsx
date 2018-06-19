import * as React from 'react';
import { RouterLink } from 'mobx-state-router';
import '../App.css';

class GameLobby extends React.Component {
  public render() {
    return (
        <div className='lobby'>
                <h1>Game Lobby</h1>
                <div className='chat-name'>
                    <div className='chat-input'>
                    <h3>Hero Class:</h3>
                    <select name="hero-select" id="hero-select">
                        <option value="warrior">Warrior</option>
                        <option value="shaman">Shaman</option>
                        <option value="rogue">Rogue</option>
                    </select>
                    <h3>Wager amount</h3>
                    <input type="text" placeholder='XX ETH'/>
                    </div>
                    <div className='create-chat-button'>Create a Game</div>
                    
                </div>
                <table>
                    <tr>
                        <th>Opponent</th>
                        <th>Hero Class</th>
                        <th>Wager Amount</th>
                    </tr>
                    <tr>
                        <td>Bob</td>
                        <td>Warrior</td>
                        <td>3 ETH</td>
                        <RouterLink routeName="BattleLobby" params={{id:"1"}}><div className='chat-join-button'>Join</div></RouterLink>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>Warrior</td>
                        <td>0 ETH</td>
                        <div className='chat-join-button'>Join</div>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>Shaman</td>
                        <td>1 ETH</td>
                        <div className='chat-join-button'>Join</div>
                    </tr>
                </table>
                

            </div>
    );
  }
}

export default GameLobby;
