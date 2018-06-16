import * as React from 'react';
import ChatLobby from '../components/ChatLobby';
import ChatRoom from '../components/ChatRoom';
import UserProfile from '../components/UserProfile';

import { observer, inject } from 'mobx-react';
import { RootStore } from '../models/Store';

const children = {ChatLobby,
                  ChatRoom,
                  UserProfile
                  };

@observer
class ChatMain extends React.Component<any, any> {
    

    public render() {
    const key = this.props.store.app.subpage || "ChatLobby";

        // {() => this.props.store.app.setPage('','')}
    if (!children[key]) throw new Error("component does not exist as directed by state:" + key);
    const child: React.StatelessComponent<{ store: RootStore }> = children[key];
    return (
        <div>
            {
                React.createElement(child, { store: this.props.store })
            }
                
            </div>
        );
    }
}

export default inject('store')(ChatMain);

