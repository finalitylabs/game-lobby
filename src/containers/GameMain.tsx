import * as React from 'react';
import GameLobby from '../components/GameLobby';
import Game from '../components/Game';

import { observer } from 'mobx-react';
import Store from '../models/Store';

const children = {GameLobby,
                  Game,
                  };

@observer
class GameMain extends React.Component<any, any> {
    

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

export default GameMain;

