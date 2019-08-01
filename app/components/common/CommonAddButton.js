/**
 * Created by guoshuyu on 2017/11/12.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    BackHandler
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'
import styles, {screenWidth, screenHeight} from "../../style/index"
import I18n from '../../style/i18n'
import * as Constant from "../../style/constant"
import {Actions} from "react-native-router-flux";


/**
 * 加号按钮
 */
class CommonAddButton extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }

    componentWillUnmount() {

    }


    render() {
        return (
            <TouchableOpacity
                style={[{
                    position: "absolute",
                    left: screenWidth - 60,
                    top: screenHeight - screenHeight / 2.5,
                    right: 0,
                    bottom: 0,
                    zIndex: 222,
                }]}
                onPress={() => {
                    // Actions.TextInputModal({
                    //     textConfirm: this._createIssue,
                    //     titleText: I18n('createIssue'),
                    //     needEditTitle: true,
                    //     text: "",
                    //     titleValue: "",
                    //     bottomBar: true,
                    // })
                    console.log('弹出框');
                }}>
                <View
                    style={[styles.centered, ...btnStyle]}>
                    <Icon name={'md-add-circle'}
                        style={{backgroundColor: Constant.transparentColor}}
                        backgroundColor={Constant.transparentColor}
                        size={50} color={Constant.primaryColor}/>
                </View>
            </TouchableOpacity>
        )
    }
}




export default CommonAddButton;
