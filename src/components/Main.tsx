import * as React from "react";



import Store from "../models/Store";
// import * as SRouter from 'mst-react-router';


// const { RouterModel, syncHistoryWithStore } = SRouter
import { observer } from "mobx-react";
import ExplorerMain from "../containers/ExplorerMain";





const children = { ExplorerMain };

@observer
class Main extends React.Component<{ store: typeof Store.Store.Type }> {

  public render() {
    const key = this.props.store.page;

    // {() => this.props.store.setPage('','')}
    if (!children[key]) throw new Error("component does not exist as directed by state:" + key);

    const child: React.StatelessComponent<{ store: typeof Store.Store.Type }> = children[key];

    return (
      <div className="main-wrapper">
        <div className='tabs'>
          <div className='tab'><h3>Profile</h3></div>
          <div className='tab'><h3>Enter Chat</h3></div>
          <div className='tab'><h3>Play Game</h3></div>
        </div>
        <div className='main-inner'>{React.createElement(child, { store: this.props.store })}</div>
      </div>
    );
  }
}

export default Main;
