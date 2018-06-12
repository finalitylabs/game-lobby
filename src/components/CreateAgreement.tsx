import * as React from "react";
import { observer, inject } from "mobx-react";
import Store from "../models/Store";
@inject("store")
@observer
class CreateAgreement extends React.Component<{ store: typeof Store.Store.Type }, any> {
  constructor(props:any) {
    super(props);
    this.state = {balanceA:"0.0002", balanceB: "0.0002"};
  }
  public render() {
    // console.log("props", this.props);
    const onChange = this.onChange.bind(this);
    const valA = this.state.balanceA;
    const valB = this.state.balanceB;
    return (
      <div className="create-agreement">
        <h1>Explorer / Create Agreement</h1>
        <form className="agreement-form" onSubmit={e => this.handleSubmit(e)}>
          <label>
            Counter Party Address:
            <input type="text" placeholder="(0x...)" name="partyB" onChange={onChange} />
          </label>
          <label>
            Initial Type:
            <select onChange={onChange} name="type">
              <option value='selected' disabled={true}>
                Choose One
              </option>
              <option value="Ether">Ether</option>
              <option value="Token">Token</option>
              <option value="Object">Object</option>
            </select>
          </label>
          <label>
            Counter Party State:
            <input type="text" placeholder="(0.0002)" name="balanceB" onChange={onChange} value={valB} />
          </label>
          <label>
            Your State:
            <input type="text" placeholder="(0.0002)" name="balanceA" onChange={onChange} value={valA} />
          </label>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
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
    console.log("this.setState", ( {...this.state, [name]: value} ));
  }
  private async handleSubmit(event: any) {
    event.preventDefault();
    alert('Submission Pending...');
    const s = this.state as any;
    const id = "testid2";

    if(!s.balanceA) s.balanceA = "0.0001";
    if(!s.balanceB) s.balanceB = "0.0001";
    if(!s.partyB) {
      alert('need value for partyB');
      return;
    }
    if(!s.type) s.type = "Ether";

    //"0x3afa9e75471ef7d29d58fec49e48d17ba617bba8"
    const options = {
      ID: id,
      partyA: this.props.store.netkey,
      partyB: s.partyB,
      balanceA: s.balanceA,
      balanceB: s.balanceB,
      types: [s.type]
    };
    if(parseFloat(options.balanceA) === 0) {
      alert('value can not be 0 for balance A')
      return;
    }
    if(parseFloat(options.balanceB) === 0) {
      alert('value can not be 0 for balance B')
      return;
    }
    if(parseFloat(options.balanceA) >= 0.001) {
      alert('value too large for balance A')
      return;
    }
    if(parseFloat(options.balanceB) >= 0.001) {
      alert('value too large for balance B')
      return;
    }
    // console.log('createAgreement options', options);
    await this.props.store.createAgreement(options);
    //const getagreement = await this.props.store
    //const Store = this.props.store;

    alert("agreement was submitted");
  }
}

export default CreateAgreement;
