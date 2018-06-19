import * as React from 'react';

import '../App.css'
import { RouterLink } from 'mobx-state-router';

class SpectateGameLobby extends React.Component<any, any> {
  public render() {
    return (
      <div className='spectate-game-lobby'>
        <h1>Active Games</h1>
        <table>
          <tbody>
          <tr>
            <th>Game</th>
            <th>Duration</th>
            <th>Bounty</th>
          </tr>
          <tr>
            <td>Hero Fighter</td>
            <td>XX time</td>
            <td>XX ETH</td>
            <RouterLink routeName="SpectateGameWindow" params={{id:"1"}}>
              <div className='chat-join-button'>Watch</div>
            </RouterLink>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SpectateGameLobby;