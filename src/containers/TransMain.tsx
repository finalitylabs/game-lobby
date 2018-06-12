import * as React from 'react';
import Eth from '../components/Eth';
import CreateTrans from '../components/CreateTrans';

import { observer } from 'mobx-react';
import Store from '../models/Store';

const children = {Eth,
    CreateTrans};

@observer
class TransMain extends React.Component<any, any> {
    

    public render() {
    const key = this.props.store.subpage;

        // {() => this.props.store.setPage('','')}
    if (!children[key]) throw new Error("component does not exist as directed by state:" + key);
    const child: React.StatelessComponent<{ store: typeof Store.Store.Type }> = children[key];
    return (
        <div>
            {
                React.createElement(child, { store: this.props.store })
            }
                
            </div>
        );
    }
}

export default TransMain;

