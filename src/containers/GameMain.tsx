import * as React from 'react';
import GameLobby from '../components/GameLobby';
import Game from '../components/Game';

import { observer, inject } from 'mobx-react';

import { RootStore} from '../models/Store';

const children = {GameLobby,
                  Game,
                  };

@observer
class GameMain extends React.Component<any, any> {
    

    public render() {
    const key = this.props.store.app.subpage || "GameLobby";

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

export default inject('store')(GameMain);

