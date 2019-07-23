

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

import Router from './app/router';

export default class App extends Component<{}> {
  render() {
    return (
      <Router/>
    );
  }
}
