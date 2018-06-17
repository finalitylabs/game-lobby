import * as React from "react";

import ProfileMain from "../containers/ProfileMain";
import ChatMain from '../containers/ChatMain';
import GameMain from '../containers/GameMain';
import PageNotFound from '../components/PageNotFound';


import { inject, observer } from 'mobx-react';

import {RootStore} from "../models/Store";
import { RouterView, RouterLink } from 'mobx-state-router';
import BattleLobby from "./BattleLobby";
// import * as SRouter from 'mst-react-router';


// const { RouterModel, syncHistoryWithStore } = SRouter

const viewMap = {
  home: <ProfileMain />,
  Profile: <ProfileMain />,

  ChatLobby: <ChatMain />,
  ChatRoom: <ChatMain />,
  ChatUserProfile: <ChatMain />,

  GameLobby: <GameMain />,
  GameJoin: <GameMain />,

  notFound: <PageNotFound />
};

/*const children = { ProfileMain,
                   ChatMain,
                   GameMain };
*/
@observer
class Main extends React.Component<{ store: RootStore }> {

  public render() {
      const { store: { router } } = this.props;
      //{React.createElement(child, { store: this.props.store })}
    // const key = this.props.store.app.page;

    // {() => this.props.store.app.setPage('','')}
    // if (!children[key]) throw new Error("component does not exist as directed by state:" + key);

    // const child: React.StatelessComponent<{ store: RootStore }> = children[key];

    return (
      <div className="main-wrapper">
        <div className='tabs'>
          <RouterLink routeName="Profile"><div className='tab'><h3>Profile</h3></div></RouterLink>
          <RouterLink routeName="ChatLobby"><div className='tab'><h3>Enter Chat</h3></div></RouterLink>
          <RouterLink routeName="GameLobby"><div className='tab'><h3>Play Game</h3></div></RouterLink>
        </div>
        <div className='main-inner'><RouterView routerStore={router} viewMap={viewMap} /></div>
      </div>
    );
  }
}



// export default Main;
export default inject('store')(Main);
