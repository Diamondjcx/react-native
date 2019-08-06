import React, {Component} from 'react';
import {
    View,
    Text,
    SectionList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';
import CommonRowItem from '../../../components/common/CommonRowItem'

import * as Constant from '../../../style/constant'
import styles from '../../../style/index'
import I18n from '../../../style/i18n'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconC from 'react-native-vector-icons/Octicons'
class GeneralPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            onClickFun && onClickFun()
                        }}
                        style={[{
                            minHeight: 50, marginLeft: Constant.normalMarginEdge, marginRight: Constant.normalMarginEdge,
                            marginVertical: Constant.normalMarginEdge / 2,
                        }]}>
                        <View style={[styles.flexDirectionRow, styles.centerH,
                            {borderTopWidth:  StyleSheet.hairlineWidth, borderTopColor: Constant.lineColor},
                            {borderBottomWidth:  StyleSheet.hairlineWidth, borderBottomColor: Constant.lineColor},]}>
                            <Text style={[{flex: 1}, styles.smallText]}>正文字体</Text>
                            <Icon name={Constant.nextIcon} size={Constant.smallIconSize} color={Constant.primaryColor}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <CommonRowItem
                showIconNext={true}
                topLine={false}
                bottomLine={false}
                itemIcon={"person"}
                textStyle={[styles.centered, styles.normalText, {
                    textAlignVertical: 'center',
                    marginHorizontal: Constant.normalMarginEdge
                }]}
                iconSize={20}
                viewStyle={[{
                    borderRadius: 4, marginTop: Constant.normalMarginEdge,
                    paddingLeft: Constant.normalMarginEdge
                }, styles.shadowCard]}
                itemText={'字体颜色'}
                onClickFun={() => {
                    Actions.ContactPage();
                }}/>
                <View>

                </View>
            </View>
        )
    };
}

export default GeneralPage;