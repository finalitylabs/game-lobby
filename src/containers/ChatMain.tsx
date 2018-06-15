import * as React from 'react';
import ChatLobby from '../components/ChatLobby';
import ChatRoom from '../components/ChatRoom';
import UserProfile from '../components/UserProfile';


import { observer } from 'mobx-react';
import Store from '../models/Store';

const children = {ChatLobby,
                  ChatRoom,
                  UserProfile
                  };

@observer
class ChatMain extends React.Component<any, any> {
    

    public render() {
    const key = this.props.store.subpage;

        // {() => this.props.store.setPage('','')}
    if (!children[key]) throw new Error("component does not exist as directed by state:" + key);
    const child: React.StatelessComponent<{ store: typeof Store.Store.Type }> = children[key];
    return (
        <div>
            {
                React.createElement(child, { store: this.props.store })
            }
                
            </div>
        );
    }
}

export default ChatMain;

