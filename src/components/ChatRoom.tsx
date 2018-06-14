import * as React from 'react';

import '../App.css';

class ChatRoom extends React.Component {
    public render() {
        return (
            <div className='chatroom'>
                <div className="chat-header">
                    <h1>Chat Room / Mr. Poopy Butthole</h1>
                    <div className="chat-back">Back</div>
                </div>
                <div className="chat-main">
                    <div className="chat-box">
                        <div className='chat-messages'>
                            <ul>
                                <li><strong>Alice: </strong>Hey</li>
                                <li><strong>Bob: </strong>Where are we?</li>
                                <li><strong>Nathan: </strong>8=====D</li>
                            </ul>
                            <input type="text"placeholder='Say something...'/>
                            <div className="chat-send">Send</div>
                        </div>
                    </div>
                    <div className="chat-users">
                        <h2>Users</h2>
                        <hr />
                        <ul>
                            <li>Alice</li>
                            <li>Bob</li>
                            <li>Nathan</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;
