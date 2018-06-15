import * as React from 'react';
import Profile from '../components/Profile';

import { observer } from 'mobx-react';
import Store from '../models/Store'

const children = { Profile };

@observer
class ProfileMain extends React.Component<any, any> {
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

export default ProfileMain;
