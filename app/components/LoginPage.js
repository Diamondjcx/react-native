
import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    Keyboard,
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Actions} from 'react-native-router-flux';
import * as Constant from "../style/constant"
import I18n from '../style/i18n'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconC from 'react-native-vector-icons/Entypo'
import {Fumi} from 'react-native-textinput-effects';
import Toast from './common/ToastProxy'
import styles, {screenHeight, screenWidth} from "../style"
import loginActions from '../store/actions/login'
import { login } from '../common.api';
// import console = require('console');
/**
 * 登陆Modal
 */

// @connect(
//     state => ({state}),
//     dispatch => ({
//         login: bindActionCreators(loginActions, dispatch)
//     })
// )

 class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.params = {
            userName: '',
            password: ''
        };
        this.state = {
            saveUserName : '',
            savePassword : '',
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    userInputChange = (text) => {
        this.params.userName = text;
    }

    passwordChange = (text) => {
        this.params.password = text;
    }

    exitLoading() {
        // 当前场景还是loading
        if (Actions.currentScene === 'LoadingModal') {
            // 回到上一个页面
            Actions.pop();
        }
    }
    onClickLogin = () => {
        if (!this.params.userName || this.params.userName.length === 0) {
            Toast(I18n('LoginNameTip'));
            return
        }
        if (!this.params.password || this.params.password.length === 0) {
            Toast(I18n('LoginPWTip'));
            return
        }
        this.setState({
            username: "1@qq.com",
            imageCode: "z716",
            password: "2b2d25d30851f0371b21080d5f77ebdb690f31c9a47404023e39054642337b576758cfe64b0333413b3689d151aaf20bd8bed9899b41455e05833e828b210ab1ef08deaa5a0394b7014884eba37ae7ee03bae17f182dc7a4826ae52887882baedfa114411ff6acac7a3024a331d54cab55cf481a0b2429213969cdcfd9146ba2"
        });
        Actions.LoadingModal({backExit: false});
        // 键盘消失，input框失去焦点
        Keyboard.dismiss();

        let params = {
            username: "1@qq.com",
            imageCode: "cs79",
            password: "2b2d25d30851f0371b21080d5f77ebdb690f31c9a47404023e39054642337b576758cfe64b0333413b3689d151aaf20bd8bed9899b41455e05833e828b210ab1ef08deaa5a0394b7014884eba37ae7ee03bae17f182dc7a4826ae52887882baedfa114411ff6acac7a3024a331d54cab55cf481a0b2429213969cdcfd9146ba2"
        };
        this.onLogin(params);
        // Actions.reset("root")
    }

    onLogin = async (values) => {
        this.exitLoading();
        const rs = await login(values);
        console.log(rs);
        if (rs && rs.responseCode === 10007) {
          this.exitLoading();
          this.props.dispatch(saveUserInfo(rs.data));
          this.toDefaultPath(rs.data);
        }
      }

    // 路由跳转

    toDefaultPath = () => {
        Actions.reset("root")
    }
    render() {
        let textInputProps = {
            style: {width: 250, height: 70, backgroundColor: Constant.miWhite},
            activeColor: Constant.primaryColor,
            passiveColor: '#dadada',
            iconClass: Icon,
            iconColor: Constant.primaryColor,
            iconSize: 25,
            clearButtonMode: "always"
        };
        return (
            <View >
                <View style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}>

                    <Fumi
                    ref={"userNameInput"}
                    {...textInputProps}
                    label={I18n('UserName')}
                    iconName={'user-circle-o'}
                    value={this.state.saveUserName}
                    onChangeText={this.userInputChange}
                    />
                </View>
                <View  style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}>
                    <Fumi
                    ref={"passwordInput"}
                    {...textInputProps}
                    label={I18n('Password')}
                    returnKeyType={'send'}
                    iconName={'keyboard-o'}
                    value={this.state.savePassword}
                    onChangeText={this.passwordChange}
                    />
                </View>
                <View>
                    <Button
                    onPress={this.onClickLogin}
                    title="登录"
                />
                </View>
            </View>
        )
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(loginActions, dispatch),
    };
  };
  const mapStateToProps = state => ({
  });
  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);