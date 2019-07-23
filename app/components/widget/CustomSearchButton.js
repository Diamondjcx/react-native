

import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';
// import * as Constant from '../../style/constant'
import Icon from 'react-native-vector-icons/Ionicons'

/**
 * 自定义搜索按键
 */
class SearchButton extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {

    }


    render() {
        return (
            <TouchableOpacity style={[ {
                marginHorizontal: 10,
                paddingLeft: 20
            }]} onPress={() => {
                Actions.SearchPage();
            }}>
            <Icon name={'md-search'} size={25} color={'#ececec'}/>
            </TouchableOpacity>
        )
    }
}

export default SearchButton