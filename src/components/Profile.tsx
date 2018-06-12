import * as React from "react";
import "../App.css";
import Store from "../models/Store";
import { default as l2 } from "../services/Layer2Service";

import { observer } from 'mobx-react';

@observer
class Profile extends React.Component<{ store: typeof Store.Store.Type }, any> {
  public render() {
    if(!this.state) return (<div className="profile-container"/>)
    return (
      <div className="profile-container">
        <div className='keys'>
          <form className='address-form'>
            <input type='text' placeholder='Your address'/>
            <input type='text' placeholder='Private Key' />
            <button type='submit'>Submit</button>
          </form>
        </div>
        <select className="profile-select">
          <option value='selected' disabled={true}>
            Select Network
          </option>
          <option>Rinkeby Test Network</option>
          <option>Localhost:XXXX</option>
        </select>
        <div className="pic-box" />
        <div className="account">
          <h3>Account</h3>
          <p>{this.props.store.netkey}</p>
          <a href="https://etherscan.io/" rel="noopener noreferrer" target="_blank">
            <div>View on Etherscan</div>
          </a>
        </div>
        <div className="state thick">
          <h3>State</h3>
        </div>
        <div className="title-value thick">
          <h3>ETH</h3>
          <p>{this.state.balance || 0}</p>
        </div>

        <div className="dotted">
          <h3>Tokens</h3>
        </div>

        <div className="title-value dotted">
          <p className="indent">Spank</p>
          <p>XX</p>
        </div>

        <div className="title-value thick">
          <p className="indent">FNT</p>
          <p>XX</p>
        </div>

        <div className="dotted">
          <h3>Objects</h3>
        </div>
        <div className="title-value dotted">
          <p className="indent">Heroes</p>
          <p>XX</p>
        </div>
      </div>
    );
  }
      public async componentDidMount() {
        const balance = await l2.getBalance(this.props.store.netkey);
        this.setState({balance});
    }
}

export default Profile;
