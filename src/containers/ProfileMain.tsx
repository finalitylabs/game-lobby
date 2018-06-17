import * as React from 'react';
import Profile from '../components/Profile';

import { observer, inject } from 'mobx-react';
import {RootStore} from '../models/Store'

import { RouterView } from "mobx-state-router";

//const children = { Profile };
const viewMap:any = {
    Profile: <Profile />
};

viewMap.home = viewMap.Profile

@observer
class ProfileMain extends React.Component<any, any> {
    public render() {
        const { router } = this.props.store as RootStore;
        //const key = this.props.store.app.subpage || "Profile";

        // {() => this.props.store.app.setPage('','')}
        //if (!children[key]) throw new Error("component does not exist as directed by state:" + key);

        //const child: React.StatelessComponent<{ store: typeof RootStore }> = children[key];
        return (
            <div>
                <RouterView routerStore={router} viewMap={viewMap} />
            </div>
        );
    }
}

export default inject('store')(ProfileMain);
