import * as React from 'react';
import Explorer from '../components/Explorer';
import AgreementDetail from '../components/AgreementDetail';
import CreateAgreement from '../components/CreateAgreement';
import Channel from '../components/Channel';
// import PendingAgreement from '../components/PendingAgreement';
import RevokeAgreement from '../components/RevokeAgreement';
import ChannelDetail from '../components/ChannelDetail';

import { observer } from 'mobx-react';
import Store from '../models/Store'

const children = {Explorer, 
                  CreateAgreement, 
                  RevokeAgreement, 
                  AgreementDetail, 
                  Channel, 
                  ChannelDetail};

@observer
class ExplorerMain extends React.Component<any, any> {
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
                

                {/* <Explorer />
                <CreateAgreement />
                <PendingAgreement />
                <RevokeAgreement />
                <AgreementDetail />
                <Channel />
                <ChannelDetail /> */}
            </div>
        );
    }
}

export default ExplorerMain;
