
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Animated,
    Image,
    StatusBar,
    BackHandler,
    Keyboard,
    Linking,
    Easing
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Actions} from 'react-native-router-flux';
import * as Constant from "../../style/constant"
import I18n from '../../style/i18n'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconC from 'react-native-vector-icons/Entypo'
import {Fumi} from 'react-native-textinput-effects';
import Toast from '../../components/common/ToastProxy'
import styles, {screenHeight, screenWidth} from "../../style"
import loginActions from '../../store/actions/login'
import { login } from '../../common.api';
import LottieView from 'lottie-react-native';


const animaTime = 600;
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
            secureTextEntry: true,
            secureIcon: "eye-with-line",
            opacity: new Animated.Value(0),
            progress: new Animated.Value(0),
        }
    }

    componentDidMount() {
        this.onOpen();
        this.handle = BackHandler.addEventListener('hardwareBackPress-LoginPage', this.onClose)
        Animated.timing(this.state.opacity, {
            duration: animaTime,
            toValue: 1,
        }).start();
        this.startAnimation();
    }

    componentWillUnmount() {
        this.thisUnmount = true;
        if (this.handle) {
            this.handle.remove();
        }
        if (this.refs.lottieView) {
            this.refs.lottieView.reset();
        }
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
    onOpen() {
        loginActions.getLoginParams().then((res) => {
            this.setState({
                saveUserName: res.userName,
                savePassword: res.password
            });
            this.params.userName = res.userName;
            this.params.password = res.password;
        });
    }

    onClose() {
        if (Actions.state.index === 0) {
            return false;
        }
        Animated.timing(this.state.opacity, {
            duration: animaTime,
            toValue: 0,
        }).start(Actions.pop());
        return true;

    }

    startAnimation() {
        if (this.thisUnmount) {
            return;
        }
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear
        }).start(({finished}) => {
            /*if (!finished) {
                return;
            }
            //重复播放
            this.setState({
                progress: new Animated.Value(0),
            });
            this.startAnimation()*/
        });
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
        // const rs = await login(values);
        // console.log(rs);
        // if (rs && rs.responseCode === 10007) {
        //   this.exitLoading();
        //   this.props.dispatch(saveUserInfo(rs.data));
        //   this.toDefaultPath(rs.data);
        // }
        Actions.reset("root")
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
            <Animated.View
                style={[styles.centered, styles.absoluteFull, {backgroundColor: Constant.primaryColor}, {opacity: this.state.opacity}]}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                           barStyle={'light-content'}/>
                <View style={[styles.absoluteFull, {zIndex: -999, justifyContent: 'flex-end'}]}>
                    <View style={{width: screenWidth, height: screenHeight / 2}}>
                        <LottieView
                            ref="lottieView"
                            style={{width: screenWidth, height: screenHeight / 2}}
                            source={require('../../style/lottie/animation-login.json')}
                            progress={this.state.progress}
                        />
                    </View>
                </View>
                <View
                    style={[{backgroundColor: Constant.miWhite}, {
                        height: 360,
                        width: screenWidth - 80,
                        margin: 50,
                        borderRadius: 10
                    }]}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}>
                    <View style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}>
                        <Image source={require("../../img/logo.png")}
                               resizeMode={"contain"}
                               style={{width: 80, height: 80}}/>
                    </View>
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
                    <View style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}>
                        <Fumi
                            ref={"passwordInput"}
                            {...textInputProps}
                            label={I18n('Password')}
                            returnKeyType={'send'}
                            secureTextEntry={this.state.secureTextEntry}
                            password={this.state.secureTextEntry}
                            iconName={'keyboard-o'}
                            value={this.state.savePassword}
                            onChangeText={this.passwordChange}
                        />
                        <View style={[{
                            position: "absolute",
                            left: screenWidth - 150,
                            right: 2 * Constant.normalMarginEdge,
                            zIndex: 12,
                        }, styles.alignItemsEnd]}>
                            <TouchableOpacity style={[styles.centered, {
                                marginTop: Constant.normalMarginEdge,
                                padding: Constant.normalMarginEdge
                            }]}
                                onPress={() => {
                                    this.setState({
                                        saveUserName: this.params.userName,
                                        savePassword: this.params.password,
                                        secureIcon: (this.state.secureTextEntry) ? "eye" : "eye-with-line",
                                        secureTextEntry: !this.state.secureTextEntry,
                                    });
                                }}>
                                <IconC name={this.state.secureIcon}
                                       backgroundColor={Constant.transparentColor}
                                       color={Constant.primaryColor} size={13}
                                       style={styles.centered}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    </View>
                    <TouchableOpacity style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}
                        onPress={() => {
                            this.onClickLogin();
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
                            <Text style={[styles.normalTextWhite]}>{I18n('Login')}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.centered, {marginTop: Constant.normalMarginEdge}]}
                        onPress={() => {
                            Linking.openURL("https://github.com/join")
                        }}>
                        <Text
                            style={[styles.subSmallText,]}>{" " + I18n('register') + " "}</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
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