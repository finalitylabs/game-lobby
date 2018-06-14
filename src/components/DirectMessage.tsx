import * as React from 'react';

import '../App.css';

class DirectMessage extends React.Component {
    public render() {
        return (
            <div className='chatroom'>
                <div className="chat-header">
                    <h1>Direct Message / Bob</h1>
                    <div className="chat-back">Back</div>
                </div>
                <div className="chat-main">
                    <div className="chat-box">
                        <div className='chat-messages'>
                            <ul>
                                <li><strong>Alice: </strong>Hey</li>
                                <li><strong>Bob: </strong>Where are we?</li>
                                <li><strong>Alice: </strong>Down the rabbit hole...</li>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default DirectMessage;
