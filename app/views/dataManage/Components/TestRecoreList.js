import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
import * as Constant from "../../../style/constant";
import styles from "../../../style/index"

export default class TestRecoreList extends Component {

  renderTestRowItem = (item, index) => {
    return (
        <View style={_styles.testItemBox}>
            <Text>
                {item.name}
            </Text>
            <TouchableOpacity
                style={[styles.centered, {marginTop: 2, marginHorizontal: Constant.normalMarginEdge}]}
                onPress={(item) => {
                    this.props.deleteRow(item)
                }}>
                <Icon name={'close'} size={28} color={Constant.subLightTextColor}/>
            </TouchableOpacity>
            
        </View>
    )
  }  
  render() {
    const { testRecordData } = this.props;
    return (
      <View >
        <FlatList
          data={testRecordData}
          renderItem={
            ({item, index}) => this.renderTestRowItem(item, index)
          }
          keyExtractor={(item, index) => index.toString()}
          removeClippedSubviews={false}
        />
      </View>
    );
  }
}

const _styles = StyleSheet.create({
 testItemRowContainer: {
   flex: 1,
   paddingTop: 22
  },
  testItemBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 44,
  },
})