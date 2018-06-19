import * as React from "react";
import GameLobby from "../components/GameLobby";
import Game from "../components/Game";

import { observer, inject } from "mobx-react";
import { RouterView } from "mobx-state-router";
import { RootStore } from "../models/Store";
import BattleLobby from "../components/BattleLobby";
import SpectateGameLobby from "../components/SpectateGameLobby";
import SpectateGameWindow from "../components/SpectateGameWindow";

const viewMap: any = {
  GameLobby: <GameLobby />,
  GameJoin: <Game />,
  BattleLobby: <BattleLobby />,
  SpectateGameLobby: <SpectateGameLobby />,
  SpectateGameWindow: <SpectateGameWindow />,
};

@observer
class GameMain extends React.Component<any, any> {
  public render() {
    const { router } = this.props.store as RootStore;
    return (
      <div>
        <RouterView routerStore={router} viewMap={viewMap} />
      </div>
    );
  }
}

export default inject("store")(GameMain);
