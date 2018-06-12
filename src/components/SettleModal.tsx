import * as React from 'react';

import '../App.css';

class SettleModal extends React.Component {
    public render() {
        return (
            <div className='settle-modal'>
                <div className='modal-bg' />
                <div className='modal'>
                    <h1>SETTLING IS PERMANENT</h1>
                    <h3>Do not agree lightly</h3>
                    <div className='modal-buttons'>
                        <h2>Settle</h2>
                        <h2>Do Not Settle</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettleModal;
