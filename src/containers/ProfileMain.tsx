import * as React from 'react';
import Profile from '../components/Profile';

import { observer, inject } from 'mobx-react';
import {RootStore} from '../models/Store'

const children = { Profile };

@observer
class ProfileMain extends React.Component<any, any> {
    public render() {
        const key = this.props.store.app.subpage || "Profile";

        // {() => this.props.store.app.setPage('','')}
        if (!children[key]) throw new Error("component does not exist as directed by state:" + key);

        const child: React.StatelessComponent<{ store: typeof RootStore }> = children[key];
        return (
            <div>
                {
                    React.createElement(child, { store: this.props.store })
                }
            
            </div>
        );
    }
}

export default inject('store')(ProfileMain);
