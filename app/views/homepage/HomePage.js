

import React, { Component } from "react";

import {Actions} from "react-native-router-flux";

import {TouchableOpacity, Image, FlatList, StyleSheet, Text, View } from "react-native";
import * as constant from "../../style/constant"
import commonStyles, {screenHeight, screenWidth} from "../../style"
var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // this.fetchData();
  }

  renderLoadingView() {
    return (
      <View style={styles.homePageContainer}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.homePageContainer}>
        <View style={styles.carouselBox}> 
          <Text>
            走马灯广告
          </Text>
        </View>
        <View style={styles.userInfoBox}>
           <View style={[styles.titleBox,{

           }]}>
              <TouchableOpacity 
              onPress={() => {
                Actions.reset("LoginPage");
              }}>
              <View
                  style={[, {
                  }]}>
                  <Text >登录</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => {
                  Actions.reset('RegisterPage');
              }}>
              <View
                  style={[{
                    marginLeft: 10,
                  }]}>
                  <Text style={[]}>注册</Text>
              </View>
              </TouchableOpacity>
           </View>
           <View style={styles.noDataBox}>
                <Text>
                  无数据插画
                </Text>
           </View>
        </View>
        <View style={styles.dataBox}>
            <View style={styles.titleBox}>
                  <Text>
                    数据管理
                  </Text>
            </View>
            <View style={styles.noDataBox}>
                  <Text>
                    无数据插画
                  </Text>
            </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  homePageContainer: {
    padding: constant.normalMarginEdge, 
  },
  carouselBox: {
    height: 120,
    backgroundColor: "pink",
  },
  userInfoBox: {
    height: 300,
  },
  titleBox: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  dataBox: {

  }
});
