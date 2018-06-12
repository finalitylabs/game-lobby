import * as React from 'react';

class PendingAgreement extends React.Component {
    
    public render() {
        return (
            <div className="pending-agreement">
                <h1>Explorer / Agreement Pending</h1>
                <form className='pending-agreement-form'>
                    <label>Counter Party Address:
                        <p>0x...</p>
                    </label>
                    <label>
                        Initial Type:
                        <p>ETH</p>
                    </label>
                    <label>Counter Party State:
                        <p>(XX)</p>
                    </label>
                    <label>Your State:
                        <p>(XX)</p>
                    </label>
                    <div className='decline-agree'>
                        <button type="submit">Decline</button>
                        <button type="submit">Agree</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default PendingAgreement;
