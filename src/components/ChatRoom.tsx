import * as React from 'react';

import '../App.css';
import { observer, inject } from "mobx-react";
import { RouterLink } from 'mobx-state-router';
@observer
class ChatRoom extends React.Component<any, any> {
    public render() {
        const { rootStore: { routerStore } } = this.props;
        const { routerState: { params } } = routerStore;
        console.log( params.id );

        return (
            <div className='chatroom'>
                <div className="chat-header">
                    <h1>Chat Room / Mr. Poopy Butthole</h1>
                    
                    <RouterLink routeName="ChatLobby"><div className="chat-back">Back</div></RouterLink>
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
                        <p>Click User to view details</p>
                        <hr />
                        <ul>
                            <li><RouterLink routeName="ChatUserProfile" params={{id:"1"}}>Alice</RouterLink></li>
                            <li><RouterLink routeName="ChatUserProfile" params={{id:"1"}}>Bob</RouterLink></li>
                            <li><RouterLink routeName="ChatUserProfile" params={{id:"1"}}>Nathan</RouterLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('rootStore')(ChatRoom);
