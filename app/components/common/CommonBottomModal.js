
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import styles, {screenWidth, screenHeight} from "../../style/index"
import * as Constant from "../../style/constant"
import I18n from '../../style/i18n'
import Modal from './ModalBox';
import {Actions} from "react-native-router-flux";


/**
 * 联系管理员模态框
 */
class CommonBottomModal extends Component {

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.text = this.props.text;
    }

    componentDidMount() {
        if (this.refs.CommonBottomModal)
        this.refs.CommonBottomModal.open();
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
            <Modal ref={"CommonBottomModal"}
                style={[{height: screenHeight, width: screenWidth, backgroundColor: "#F0000000"}]}
                position={"bottom"}
                onClosed={this.onClose}
                backdrop={true}
                backButtonClose={false}
                swipeToClose={true}
                backdropOpacity={0.8}>
                <View style={[_styles.modalContainer, {height: screenHeight, width: screenWidth}]}>
                    <View style={[styles.modalContentContainer, {height: 100, width: screenWidth}]}>
                        <ScrollView style={[{
                            backgroundColor: Constant.white,
                            borderRadius: 4,
                            width: screenWidth,
                        }]}>
                             <Text>底部弹框</Text>
                        </ScrollView>
                    </View>
                </View>
     </Modal>
        )
    }
}

CommonBottomModal.propTypes = {
    text: PropTypes.string,
    titleText: PropTypes.string,
    textConfirm: PropTypes.func,
};
CommonBottomModal.defaultProps = {
    text: '',
    titleText: '',
};

const _styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    modalContentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
});

export default CommonBottomModal;
