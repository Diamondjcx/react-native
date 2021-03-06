

import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import {Actions} from 'react-native-router-flux';
import styles from "../../style"
import I18n from '../../style/i18n'
import * as Constant from '../../style/constant'
import CommonRowItem from '../../components/common/CommonRowItem'
import TestRecoreList from './Components/TestRecoreList'
import { testRecordData } from '../../common.api';


export default class DataManagePage extends Component {
  constructor() {
    super();
    this.state = {
      testRecordData: null,
    };
  }

  componentDidMount = () => {
    this.getTestRecordData();
  }

  // 获取测算记录
  getTestRecordData = async () => {
    let params = {

    };
    const rs = await testRecordData();
    if (rs && rs.data) {
      this.setState({
        testRecordData: rs.data
      });
    }
  }

  // 删除一行测算记录
  deleteRow = (item) => {
    console.log(item.id);
  }
  render() {
    const { testRecordData } = this.state;
    return(
      <View style={_styles.datamanageContainer}>
         <StatusBar hidden={false} backgroundColor={'transparent'} translucent barStyle={'light-content'}/>
         <CommonRowItem
         showIconNext={true}
         topLine={false}
         bottomLine={false}
         itemIcon={"person"}
         textStyle={[styles.centered, styles.normalText, {
             textAlignVertical: 'center',
             marginHorizontal: Constant.normalMarginEdge
         }]}
         iconSize={20}
         viewStyle={[{
             borderRadius: 4, marginTop: Constant.normalMarginEdge,
             paddingLeft: Constant.normalMarginEdge
         }, styles.shadowCard]}
         itemText={'联系人/群组'}
         onClickFun={() => {
             Actions.ContactPage();
         }}/>
         <CommonRowItem
         showIconNext={true}
         topLine={false}
         bottomLine={false}
         itemIcon={"person"}
         textStyle={[styles.centered, styles.normalText, {
             textAlignVertical: 'center',
             marginHorizontal: Constant.normalMarginEdge
         }]}
         iconSize={20}
         viewStyle={[{
             borderRadius: 4, marginTop: Constant.normalMarginEdge,
             paddingLeft: Constant.normalMarginEdge
         }, styles.shadowCard]}
         itemText={'订单查询'}
         onClickFun={() => {
             Actions.AddContactPerson();
         }}/>
         <CommonRowItem
         showIconNext={true}
         topLine={false}
         bottomLine={false}
         itemIcon={"person"}
         textStyle={[styles.centered, styles.normalText, {
             textAlignVertical: 'center',
             marginHorizontal: Constant.normalMarginEdge
         }]}
         iconSize={20}
         viewStyle={[{
             borderRadius: 4, marginTop: Constant.normalMarginEdge,
             paddingLeft: Constant.normalMarginEdge
         }, styles.shadowCard]}
         itemText={'取名暂存'}
         onClickFun={() => {
             Actions.PersonInfoPage();
         }}/>
         <View style={_styles.testContainer}>
            <Text style={_styles.testTitle}>
                测算记录
            </Text>
            <View style={_styles.testItemContainer}>
                <TestRecoreList 
                  testRecordData= {testRecordData}
                  deleteRow= {this.deleteRow}
                />
            </View>
         </View>
      </View>
    )
  }
}

const _styles = StyleSheet.create({
  datamanageContainer: {

  },
  testContainer: {
    marginTop: Constant.normalMarginEdge,
    padding: Constant.normalMarginEdge
  },
  testTitle: {
    backgroundColor: '#CCC',
    height: 50,
    lineHeight: 50,
  }

});