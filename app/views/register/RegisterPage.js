

import React, { Component } from "react";
import { View, Image,Text,TouchableOpacity,StatusBar } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import * as Constant from "../../style/constant"
import I18n from '../../style/i18n'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconC from 'react-native-vector-icons/Entypo'
import styles, {screenHeight, screenWidth} from "../../style"

export default class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  userInputChange = (text) => {
    this.params.userName = text;
  }
  onRegister = () => {
      console.log('注册');
  }
  render() {
    let textInputProps = {
        style: {width: 280, height: 70, backgroundColor: Constant.miWhite},
        activeColor: Constant.primaryColor,
        passiveColor: '#dadada',
        iconClass: Icon,
        iconColor: Constant.primaryColor,
        iconSize: 25,
        clearButtonMode: "always"
    };
    return (
        <View style={[styles.centered, styles.absoluteFull, {backgroundColor: Constant.primaryColor}, {opacity: this.state.opacity}]}>
        <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
            barStyle={'light-content'}/>
            <View style={[styles.centered, {}]}>
                <Image source={require("../../img/logo.png")}
                    resizeMode={"contain"}
                    style={{width: 80, height: 80}}/>
            </View>
            <View>
                <View style={[styles.centered, {}]}>
                    <Sae
                        ref={"userCountInput"}
                        label={'账号'}
                        {...textInputProps}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'white'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                </View>
                <View style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}>
                    <Sae
                        ref={"validateCode"}
                        {...textInputProps}
                        label={'验证码'}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'white'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                </View>
                <View style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}>
                    <Sae
                        ref={"passWord"}
                        {...textInputProps}
                        label={'密码'}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'white'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                </View>
                <View style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}>
                    <Sae
                        ref={"confirmPsaaword"}
                        {...textInputProps}
                        label={'确认密码'}
                        iconName={'pencil'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        value={this.state.saveUserName}
                        onChangeText={this.userInputChange}
                    />
                </View>
                <TouchableOpacity style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}
                onPress={() => {
                    this.onRegister();
                }}>
                <View
                    style={[styles.centered, {
                        backgroundColor: Constant.primaryColor,
                        width: 230,
                        marginTop: Constant.normalMarginEdge,
                        paddingHorizontal: Constant.normalMarginEdge,
                        paddingVertical: Constant.normalMarginEdge,
                        borderRadius: 5
                    }]}>
                    <Text style={[styles.normalTextWhite]}>立即注册</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}
