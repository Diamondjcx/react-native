

import React, { Component } from 'react';
import { Provider } from "react-redux";
import { View , Text} from "react-native";
import store from "./app/store/";
import getRouter from './app/router';
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      store: store,
    };
  }
  render() {
    return (
      <Provider store={this.state.store}> 
      {getRouter()}
     </Provider>
    );
  }
}
