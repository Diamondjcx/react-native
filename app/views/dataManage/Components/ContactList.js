import React, {Component} from 'react';
import {
    View,
    Text,
    SectionList,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';
import * as Constant from '../../../style/constant'
import styles from '../../../style/index'
import I18n from '../../../style/i18n'


class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.selectMap,
            selectIndex: this.props.selectIndex
        };
    }

    _renderRow = ({ item, index, section: { title, data } }) => {
        console.log(item);
        var swipeoutBtns = [
            {
              text: 'Button'
            }
          ]
        return (
            <TouchableOpacity
                style={[{
                    height: 40,
                    flex: 1,
                    paddingHorizontal: Constant.normalMarginEdge,
                    marginTop: Constant.normalMarginEdge,
                    backgroundColor: (item.select) ? Constant.miWhite : Constant.transparentColor,
                    borderRadius: 4,
                    flexDirection: 'row',
                }]}
                onPress={() => {
                    let selectMap = this.props.selectMap;
                    let dataList = data;
                    dataList.forEach((data) => {
                        data.select = false;
                    });
                    dataList[data.indexOf(item)].select = true;
                    this.setState({
                        dataSource: selectMap,
                    });
                    this.props.onSelect && this.props.onSelect(title, dataList[index].value);
                }}
            >
                <Text style={[(item.select)
                    ? styles.normalText : styles.subSmallText, {textAlign: 'center'}]}>{item.name}</Text>
            </TouchableOpacity>

            // <Swipeout right={swipeoutBtns}>
            // <View>
            //     <Text>{item.name}</Text>
            // </View>
            // </Swipeout>
        );
    }

    _renderSectionHeader = ({section: {title}}) => {
        return (
            <View style={{
                marginTop: Constant.normalMarginEdge,
                paddingLeft: Constant.normalMarginEdge,
                flex: 1,
                height: 40,
                backgroundColor: Constant.primaryLightColor,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={styles.smallTextWhite}>{title}</Text>
            </View>
        )
    }

    render() {
        return (
            <SectionList
                sections={this.state.dataSource}
                renderItem={this._renderRow}
                renderSectionHeader={this._renderSectionHeader}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}


const propTypes = {
    selectMap: PropTypes.any,
    selectIndex: PropTypes.any,
    listStyle: PropTypes.any,
    onSelect: PropTypes.func,
};

ContactList.propTypes = propTypes;

ContactList.defaultProps = {
    selectMap: {},
    selectIndex: {},
    listStyle: {},
};

export default ContactList;