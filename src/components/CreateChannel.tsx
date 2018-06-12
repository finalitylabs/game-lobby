import * as React from "react";
import Store from "../models/Store";
import "../App.css";

class CreateChannel extends React.Component<{ store: typeof Store.Store.Type }, any> {
  constructor(props: any) {
    super(props);
    this.state = { balanceA: "0.0002", balanceB: "0.0002" };
  }
  public render() {
    const onChange = this.onChange.bind(this);
    const valA = this.state.balanceA;
    const valB = this.state.balanceB;
    return (
      <div className="channel-comp">
        <div className="channel-send">
          <h1>Create Channel</h1>
          
            <label>
              Initial Type:
              <select onChange={onChange} name="type">
                <option value="selected" disabled={true}>
                  Choose One
                </option>
                <option value="Ether">Ether</option>
                <option value="Token">Token</option>
                <option value="Object">Object</option>
              </select>
            </label>
            
          <div className="channel-address-1">
            <label>
              Counter Party Address:
              <input type="text" placeholder="(0x...)" name="partyB" onChange={onChange} />
            </label>
          </div>
            <div className='channel-bal'>
            <label>Your Balance:</label>
            <input type="text" placeholder="(0.0002)" name="balanceA" onChange={onChange} value={valA}  />
          </div>
          <div className='channel-address-2'>
            <label>
              Counter Party Balance:
              <input type="text" placeholder="(0.0002)" name="balanceB" onChange={onChange} value={valB} />
            </label>
          </div>
          <div className="channel-send-button" onClick={this.handleSubmit.bind(this)}>
            Send
          </div>
        </div>
      </div>
    );
  }

  private onChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log("this.setState", { ...this.state, [name]: value });
  }
  private async handleSubmit(event: any) {
    event.preventDefault();
    alert("Submission Pending...");
    const s = this.state as any;
    const id = "testid3";

    if (!s.balanceA) s.balanceA = "0.0001";
    if (!s.balanceB) s.balanceB = "0.0001";
    if (!s.partyB) {
      alert("need value for partyB");
      return;
    }
    if (!s.type) s.type = "Ether";

    //"0x3afa9e75471ef7d29d58fec49e48d17ba617bba8"
    const options = {
      ID: id,
      agreementID: "" + this.props.store.page_stateA, // .agreementID,
      partyA: this.props.store.netkey,
      partyB: "" + s.partyB,
      balanceA: "" + s.balanceA,
      balanceB: "" + s.balanceB,
      type: "" + s.type
    };
    if (parseFloat(options.balanceA) === 0) {
      alert("value can not be 0 for balance A");
      return;
    }
    if (parseFloat(options.balanceB) === 0) {
      alert("value can not be 0 for balance B");
      return;
    }
    if (parseFloat(options.balanceA) >= 0.001) {
      alert("value too large for balance A");
      return;
    }
    if (parseFloat(options.balanceB) >= 0.001) {
      alert("value too large for balance B");
      return;
    }
    // console.log('createAgreement options', options);
    await this.props.store.createChannel(options);
    //const getagreement = await this.props.store
    //const Store = this.props.store;

    alert("agreement was submitted");
  }
}

export default CreateChannel;
