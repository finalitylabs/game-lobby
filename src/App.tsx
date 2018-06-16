import * as React from "react";
import "./App.css";

import {RootStore} from "./models/Store";

import { Provider, observer } from "mobx-react";

import Main from "./components/Main";
// import SendModal from "./components/SendModal";
// import Login from './components/Login';

@observer
class App extends React.Component<{ store: RootStore }> {
  /*public getBalance(e: React.SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.store.app.getBalance();
  }*/

  public render() {
    return (
      <Provider store={this.props.store} rootStore={this.props.store}>
        <div id="app-wrapper">
          {/* <Login /> */}
          {/* <SendModal /> */}
          <div className='nav-container'>
            <select className="profile-select">
              <option>Rinkeby Test Network</option>
              <option>Localhost:XXXX</option>
            </select>
            <div className='top-profile'>
              <h3>Alice</h3>
              <div className="pic-box"/>
            </div>
          </div>
          
          <div className="main-wrapper">
            <Main store={this.props.store}/>
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
  /* <div>Balance {this.props.store.app.balance}</div>
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
  {this.props.store.app.todos.map((item, i) => {
    return (
      <li key={i}>
        {item.text} &nbsp; &nbsp;
        <button onClick={e => this.removeTodo(e, item)}>Remove</button>
      </li>
    );
  })}
</ul> */
}
