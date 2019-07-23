

import React, { Component } from "react";
import { View, Text } from "react-native";



export default class DynamicPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return <View >
        <Text>
            我是动态页
        </Text>
    </View>;
  }
}
