
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles, {screenWidth, screenHeight} from "../../style/index"
import * as Constant from "../../style/constant"
import I18n from '../../style/i18n'
import Modal from '../common/ModalBox';
import {Actions} from "react-native-router-flux";


/**
 * 联系管理员模态框
 */
class ContactModal extends Component {

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.text = this.props.text;
    }

    componentDidMount() {
        if (this.refs.contactModal)
        this.refs.contactModal.open();
        console.log('联系管理员');

    }

    componentWillUnmount() {
    }

    onClose = () => {
        Actions.pop();
        return true;
    }
    render() {
        let width = screenWidth - 100;
        return (
            <Modal ref={"contactModal"}
            style={[{height: screenHeight, width: screenWidth, backgroundColor: "#F0000000"}]}
            position={"bottom"}
            onClosed={this.onClose}
            backdrop={true}
            backButtonClose={false}
            swipeToClose={true}
            backdropOpacity={0.8}>
         <View style={[styles.centered, {height: screenHeight, width: screenWidth}]}>
             <View style={[styles.centered, {height: 100, width: screenWidth}]}>
                 <ScrollView style={[{
                     backgroundColor: Constant.white,
                     borderRadius: 4,
                     width: width,
                 }]}>
                     <View >
                            <Text>联系客服</Text>
                            <Text>邮箱：3333333@qq.com</Text>
                            <Text>QQ：2222222</Text>
                    </View>
                    <View>
                            <TouchableOpacity
                            style={[styles.flex, styles.centerH, {
                                borderLeftWidth: 1,
                                borderLeftColor: Constant.miWhite,
                                borderBottomRightRadius: 3,
                            },]}
                            onPress={this.onClose}>
                            <Text style={[styles.normalText, {fontWeight: 'bold'}]}>{I18n("ok")}</Text>
                            </TouchableOpacity>
                    </View>
                 </ScrollView>
             </View>
         </View>
     </Modal>
        )
    }
}

ContactModal.propTypes = {
    text: PropTypes.string,
    titleText: PropTypes.string,
    textConfirm: PropTypes.func,
};
ContactModal.defaultProps = {
    text: '',
    titleText: '',
};


export default ContactModal;
