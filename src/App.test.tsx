import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import Store from "./models/Store";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const store = Store.Store.create({ balance: 0, transactions: [] });

  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
