import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { default as l2 } from "./services/Layer2Service";
import { default as GS } from "./services/GunService";
import { HistoryAdapter } from 'mobx-state-router';
import { history } from './utils/history';

// import registerServiceWorker from './registerServiceWorker';

import {RootStore} from "./models/Store";

const store = new RootStore();
const historyAdapter = new HistoryAdapter(store.router, history);
historyAdapter.observeRouterStateChanges();

async function start():Promise<void> {
    // Observe history changes
    await GS.connect();
    await l2.connect(store.app.prvkey, 'Alice')
    
    // For testing connection only
    //const bal = await l2.getAgreementDetails() // l2.getBalance();
    //console.log('test balance reads', bal)
    // console.log('agreements', await l2.getAgreements());


    ReactDOM.render(
        
        <App store={store}/>
        , document.getElementById("root") as HTMLElement);
    // registerServiceWorker();
    return;
}
start().then(()=>console.log('started'));
