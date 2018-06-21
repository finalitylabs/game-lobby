import * as React from 'react';

import '../App.css';



export default class SpectateGameWindow extends React.Component<any, any> {
  public render() {
    return (
      <div className='spectate-game-window'>
        <h1>Spectating a Game!!</h1>
        <div className='spectate-inner'>
          <div className='game-gif'/>
          <div className="chat-main">
                <div className="chat-box">
                  <div className='spectate-chat-messages'>
                    <ul>
                      <li><strong>Alice: </strong>Hey</li>
                      <li><strong>Bob: </strong>Where are we?</li>
                      <li><strong>Nathan: </strong>8=====D</li>
                    </ul>
                  <input type="text"placeholder='Say something...'/>
                <div className="chat-send">Send</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
