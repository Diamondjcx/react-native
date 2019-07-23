
import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

/**
 * 登陆Modal
 */

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    onUserName = (username) => {
        console.log(username);
    }
    onPassWord = (password) => {
        console.log(password);
    }
    onLogin = () => {
        Actions.reset("root")
    }

    render() {
        return (
            <View>
            <Text>登录页</Text>
                <View>
                    <TextInput 
                    placeholder="请输入用户名">
                    </TextInput>
                </View>
                <View>
                    <TextInput 
                    placeholder="请输入密码">
                    </TextInput>
                </View>
                <View>
                    <Button
                    onPress={this.onLogin}
                    title="登录"
                />
                </View>
            </View>
        )
    }
}
