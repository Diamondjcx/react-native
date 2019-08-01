

import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';
// import * as Constant from '../../style/constant'
import Icon from 'react-native-vector-icons/Ionicons'
import IconE from 'react-native-vector-icons/EvilIcons'
// import console = require('console');

/**
 * 自定义搜索按键
 */
class SearchButton extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {

    }
    confirm = () => {

    }
    contactAdmin = () => {
        console.log(1);
        Actions.ConfirmModal()
    }

    render() {
        return (
            <View style={[ {
                flex: 1,
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center"
            }]}>
                {
                    // 联系客服
                }
                <TouchableOpacity style={[ {
                    marginHorizontal: 10,
                    paddingLeft: 20
                }]} onPress={this.contactAdmin}>
                <IconE name={'comment'} size={25} color={'#ececec'}/>
                </TouchableOpacity>
                {
                    //设置
                }
                <TouchableOpacity style={[ {
                    marginHorizontal: 10,
                    paddingLeft: 20
                }]} onPress={() => {
                    Actions.SettingPage();
                }}>
                <Icon name={'md-settings'} size={25} color={'#ececec'}/>
                </TouchableOpacity>
                {
                    //s搜索
                }
                <TouchableOpacity style={[ {
                    marginHorizontal: 10,
                    paddingLeft: 20
                }]} onPress={() => {
                    Actions.SearchPage();
                }}>
                <Icon name={'md-search'} size={25} color={'#ececec'}/>
                </TouchableOpacity>
            </View>
           
        )
    }
}

export default SearchButton