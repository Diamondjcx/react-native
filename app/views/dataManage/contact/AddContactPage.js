

import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar,TouchableHighlight  } from "react-native";
import {Actions} from 'react-native-router-flux';
import t from 'tcomb-form-native';
import styles from "../../../style"
import I18n from '../../../style/i18n'
import * as Constant from '../../../style/constant'
import { testRecordData } from '../../../common.api';


const Form = t.form.Form;
var Gender = t.enums({
    M: 'Male',
    F: 'Female'
  });
const Person = t.struct({
    '姓氏': t.String,              // a required string
    '名字': t.maybe(t.String),  // an optional string
    '性别': Gender ,               // a required number
    'birthDate': t.Date ,       // 
    '生肖': t.String,              // a required string
    '群组': t.String,              // a required string
    '备注': t.String,              // a required string
  });
  var options = {
    fields: {
      'birthDate': {
        mode: 'date' // display the Date field as a DatePickerAndroid
      }
    }
  };
export default class AddContactPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  onPress = () => {
    const value = this.refs.addContactform.getValue();
    console.log(value);
  }
  // 删除一行测算记录
  deleteRow = (item) => {
    console.log(item.id);
  }
  render() {
    const { testRecordData } = this.state;
    return(
      <View style={_styles.addContactContainer}>
        <StatusBar hidden={false} backgroundColor={'transparent'} translucent barStyle={'light-content'}/>
        <Form
        ref="addContactform"
        type={Person}
        options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
          
      </View>
    )
  }
}

const _styles = StyleSheet.create({
  addContactContainer: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }

});