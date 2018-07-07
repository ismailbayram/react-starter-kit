import React from "react";
import { Provider } from "react-redux";

import AppStore from "../store/AppStore";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={AppStore}>
        <div>
          App
        </div>
      </Provider>
    );
  }
}