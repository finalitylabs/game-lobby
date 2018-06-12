import * as React from "react";
import "./App.css";

import Store from "./models/Store";

import { Provider, observer } from "mobx-react";

import Main from "./components/Main";
// import SettleModal from "./components/SettleModal";

@observer
class App extends React.Component<{ store: typeof Store.Store.Type }> {
  /*public getBalance(e: React.SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.store.getBalance();
  }*/

  public render() {
    return (
      <Provider store={this.props.store}>
        <div id="app-wrapper">
          {/* <SettleModal /> */}
          <div className='nav-container'>
                <ul>
                    <li><h2 onClick={() => this.props.store.setPage('ExplorerMain', 'Explorer')}>Explorer</h2></li>
                    <li><h2 onClick={() => this.props.store.setPage('ChannelMain', 'CreateChannel')}>ETH</h2></li>
                    <li><h2 onClick={() => this.props.store.setPage('Tokens', '')}>Tokens</h2></li>
                    <li><h2 onClick={() => this.props.store.setPage('Objects', '')}>Objects</h2></li>
                </ul>
            </div>
          
          <div className="main-wrapper">
            <Main store={this.props.store} />
          </div>
        </div>
      </Provider>
    );
  }
}

/*
import logo from './logo.svg';
import Main from './components/Main';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      </div>
      
    );
  }
}
*/
export default App;

{
  /* <div>Balance {this.props.store.balance}</div>
<form>
  <button type="submit" onClick={this.getBalance.bind(this)}>
    Get Balance
  </button>
</form>
<br />
<form>
  <input
    ref={r => {
      if (r) this.todoInput = r;
    }}
    type="text"
    placeholder="Add entry"
  />
  <button type="submit" onClick={this.addTodo.bind(this)}>
    Add todo
  </button>
</form>

<ul>
  {this.props.store.todos.map((item, i) => {
    return (
      <li key={i}>
        {item.text} &nbsp; &nbsp;
        <button onClick={e => this.removeTodo(e, item)}>Remove</button>
      </li>
    );
  })}
</ul> */
}
