import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import {RootStore} from "./models/Store";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const store = new RootStore();

  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
