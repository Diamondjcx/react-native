

import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import {Actions} from 'react-native-router-flux';
import styles from "../../../style/index"
import * as Constant from '../../../style/constant'
import CommonRowItem from '../../../components/common/CommonRowItem'
import { contactList } from '../../../common.api';
import ContactList from '../Components/ContactList';


export default class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      contactData: null,
    };
  }

  componentDidMount = () => {
    this.getContactList();
  }

  // 获取测算记录
  getContactList = async () => {
    let params = {

    };
    const rs = await contactList();
    if (rs && rs.data) {
      this.setState({
        contactData: rs.data
      });
    }
  }

  // 删除一行测算记录
  deleteRow = (item) => {
    console.log(item.id);
  }
  render() {
    const { contactData } = this.state;
    console.log(contactData);
    return(
      <View style={_styles.contactPageContainer}>
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
         itemText={'群组管理'}
         onClickFun={() => {
             Actions.PersonInfoPage();
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
         itemText={'新建联系人'}
         onClickFun={() => {
             Actions.AddContactPage();
         }}/>
         
         <View style={_styles.testContainer}>
            <View style={_styles.testItemContainer}>
                {
                    contactData && contactData.length && <ContactList 
                    listStyle={{flex: 1, backgroundColor: Constant.white, marginTop: Constant.normalMarginEdge * 2}}
                    selectIndex={{'filerType': 0, 'filterSort': 0, "filterLanguage": 0}}
                    selectMap={contactData}
                    onSelect={(selection, data) => {
                        switch (selection) {
                            case "filerType":
                                Actions.pop({refresh: {selectTypeData: data}});
                                DeviceEventEmitter.emit("SearchPage", {selectTypeData: data})
                                break;
                            case "filterLanguage":
                                Actions.pop({refresh: {selectLanguageData: data}});
                                DeviceEventEmitter.emit("SearchPage", {selectLanguageData: data})
                                break;
                            case "filterSort":
                                Actions.pop({refresh: {selectSortData: data}});
                                DeviceEventEmitter.emit("SearchPage", {selectSortData: data})
                                break;
                        }

                    }}
                />
                }
            </View>
         </View>
      </View>
    )
  }
}

const _styles = StyleSheet.create({
  contactPageContainer: {

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