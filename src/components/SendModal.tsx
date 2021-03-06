import * as React from 'react';

import '../App.css';

class SendModal extends React.Component {
    public render() {
        return (
            <div className='send-modal'>
                <div className='cancel'><h1>×</h1></div>
                <div className='send-inner'>
                    <h3>Send to Bob</h3>
                    <div>
                        <h4>Amount to send</h4>
                        <input type="text" placeholder='XX ETH'/>
                    </div>
                    <div className='send-button'>Send</div>
                </div>
            </div>
        );
    }
}

export default SendModal;
