import * as React from 'react';

import '../App.css';

import { observer } from 'mobx-react';

@observer
class Channel extends React.Component<any, any> {
    public render() {
        return (
            <div className='channel-container'>
                <div className='header'>
                    <select>
                        <option value='selected' disabled={true}>Existing Agreements</option>
                        <option>Agreement 1</option>
                        <option>Agreement 2</option>
                        <option>Agreement 3</option>
                    </select>
                </div>
                <div className='agreements'>
                    <h2>Channels</h2>
                    <button>+ New</button>
                </div>
                <div className='channel-data-table'>
                    <table>
                        <thead>
                            <tr>
                                
                                <th onClick={() => this.props.store.setPage('Explorer','ChannelDetail')}>Channel</th>
                                <th>TXHash</th>
                                <th>Age</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x.....</td>
                                <td>X d X hrs</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>XX ETH</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>Channel 2</td>
                                <td>0x.....</td>
                                <td>X d X hrs</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>XX ETH</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>Channel 3</td>
                                <td>0x.....</td>
                                <td>X d X hrs</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>XX ETH</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                
            </div>
        );
    }
}

export default Channel;
