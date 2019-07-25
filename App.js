

// import React, { Component } from "react";
// import { View , Text} from "react-native";
// import {Actions} from 'react-native-router-flux';
// import getRouter from "./app/router";



// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//     };
//   }
//   componentDidMount() {
//     // Actions.LoginPage();
//   }

//   render() {
//     return <View >{getRouter()}<Text>111</Text></View>;
//   }
// }

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
