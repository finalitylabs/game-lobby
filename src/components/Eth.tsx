import * as React from 'react';

import '../App.css';




class Eth extends React.Component<any, any> {
    
    public render() {
        return (
            <div className='eth-comp'>
                <h2>Agreements</h2>
                <select>
                    <option value='selected' disabled={true}>Agreement</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <h2>Channels</h2>
                <div className='eth-select-button'>
                <select>
                    <option value='selected' disabled={true}>Channel</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                
                    <button onClick={()=>this.props.store.setPage('EthMain', 'EthCreateChannel')}>+</button>
                </div>
                <div className='eth-send'>
                    <div className='eth-send-state'>
                        <h3>State</h3>
                        <p>XX ETH</p>
                    </div>
                    <div className='eth-amount'>
                    <label><h3>Amount:</h3>
                    </label>
                    <input type='text' />

                    </div>
                    <button className='eth-send-button'>Send</button>
                </div>
            </div>
        );
    }
}

export default Eth;
