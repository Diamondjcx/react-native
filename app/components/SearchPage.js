/**
 * Created by guoshuyu on 2017/11/10.
 */

import React, {Component} from 'react';
import {
    View, StyleSheet, StatusBar, TextInput, TouchableOpacity, Keyboard, DeviceEventEmitter,
} from 'react-native';
import styles from "../style"
import * as Constant from "../style/constant"
import I18n from '../style/i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Config from '../config'


/**
 * 搜索
 */
class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.searchText = "";
        this.state = {
            showSelect: 0,
            dataSource: [],
        }
    }

    componentDidMount() {
    }

    _searchTextChange = (text) => {
        this.searchText = text;
    }

        /**
     * 刷新
     * */
    _refresh = (select) =>{
        if (!select) {
            select = this.select;
        }
        this._searchText(select);
    }

    _searchText = () => {
        Keyboard.dismiss();
        console.log('刷新请求数据');
    }
    render() {
        return (
            <View style={styles.mainBox}>
                <StatusBar hidden={false} backgroundColor={'transparent'} translucent barStyle={'light-content'}/>
                <View style={[styles.flexDirectionRowNotFlex, styles.shadowCard, {
                    backgroundColor: '#FFF',
                    borderBottomRightRadius: 4,
                    borderBottomLeftRadius: 4,
                    height: 40,
                    paddingVertical: Constant.normalMarginEdge / 3,
                }]}>
                    <TextInput
                        onChangeText={(text) => {
                            this._searchTextChange(text)
                        }}
                        placeholder={I18n('search')}
                        returnKeyType={'search'}
                        returnKeyLabel={'search'}
                        onSubmitEditing={(event) => {
                            this.searchText = event.nativeEvent.text;
                            this._refresh()
                        }}
                        underlineColorAndroid="transparent"
                        clearButtonMode="always"
                        style={[styles.smallText, {
                            padding: 0,
                            paddingLeft: Constant.normalMarginEdge / 2,
                            marginHorizontal: Constant.normalMarginEdge / 2,
                            borderRadius: 3,
                            backgroundColor: Constant.subLightTextColor,
                        }, styles.flex]}/>

                    <TouchableOpacity
                        style={[styles.centered, {marginTop: 2, marginHorizontal: Constant.normalMarginEdge}]}
                        onPress={() => {
                            this._refresh()
                        }}>
                        <Icon name={'md-search'} size={28} color={Constant.subLightTextColor}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default SearchPage
