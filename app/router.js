
import React, { Component } from 'react';
import { Scene, Router, Lightbox, Drawer } from 'react-native-router-flux';
import LoginPage from './views/login/LoginPage';
import RegisterPage from './views/register/RegisterPage';
import HomePage from './views/homepage/HomePage';
import DataManagePage from './views/dataManage/DataManagePage';
import NameOptionPage from './views/nameOption/NameOptionPage';
import VIPUnlockPage from './views/vipUnlock/VIPUnlockPage';
import OtherPage from './views/other/OtherPage';
import SearchPage from './components/SearchPage';
import SettingPage from './views/setting/SettingPage';

import LoadingModal from './components/common/LoadingModal';
import CommonBottomModal from './components/common/CommonBottomModal';
import CommonConfirmModal from './components/common/CommonConfirmModal';
import SearchButton from './components/widget/CustomSearchButton' ;
import DrawerFilter from './components/widget/SearchDrawerFilter' ;
import CustomBackButton from './components/widget/CustomBackButton';
import CustomDrawerButton from './components/widget/CustomDrawerButton';
import ContactModal from './components/widget/ContactModal';
import TabIcon from './components/widget/TabIcon';
import BackUtils from './utils/backUtils';
import I18n, { changeLocale } from './style/i18n';
import * as Constant from './style/constant' ;
// import { View,Text } from "react-native";
// // import console = require('console');
import { screenWidth, drawerWidth } from "./style/index";
import styles from './style' ;


// /**
//  * 全局路由
//  */
const getRouter = () =>  {
    // <View ><Text>12222111</Text></View>
   return ( 
     <Router
     getSceneStyle={() => {
      return styles.routerStyle;
    }}
    backAndroidHandler={BackUtils()}
    >
      <Lightbox>

        <Scene key="root" 
          navigationBarStyle={styles.navigationBar}
          titleStyle={{color: Constant.titleTextColor}}
        >
          <Scene key="mainTabPage" 
            key="mainTabPage"
            tabs
            lazy
            wrap={false}
            showLabel={false}
            tabBarPosition={"bottom"}
            title={I18n('appName')}
            renderRightButton={() => <SearchButton />}
            tabBarStyle={{
              height: Constant.tabBarHeight,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Constant.tabBackgroundColor
            }}
          >
              <Scene 
                key="HomePage"
                component={HomePage}
                title={'首页'}
                icon={TabIcon}
                title={I18n('tabHome')}
                tabIconName={'tabHome'}
              >
              </Scene>
              <Scene 
                key="DataManagePage"
                component={DataManagePage}
                title={'数据管理'}
                icon={TabIcon}
                title={I18n('tabDataManage')}
                tabIconName={'tabDataManage'}
              >
              </Scene>
              <Scene 
                key="NameOptionPage"
                component={NameOptionPage}
                title={'取名/改名'}
                icon={TabIcon}
                title={I18n('tabNameOption')}
                tabIconName={'tabNameOption'}
              >
              </Scene>
              <Scene 
                key="VIPUnlockPage"
                component={VIPUnlockPage}
                title={'会员解锁'}
                icon={TabIcon}
                title={I18n('tabVipUnlock')}
                tabIconName={'tabVipUnlock'}
              >
              </Scene>
              <Scene 
                key="OtherPage"
                component={OtherPage}
                title={'其他'}
                icon={TabIcon}
                title={I18n('tabOther')}
                tabIconName={'tabOther'}
            >
            </Scene>
          </Scene>
          {
            //联系管理员
          }
            {
              //设置页面
            }
            <Scene
                key="SettingPage"
                component={SettingPage}
                title={I18n('setting')}
              />
          <Drawer
            key="SearchPageDrawer"
            contentComponent={DrawerFilter}
            drawerPosition={'right'}
            hideNavBar
            drawerWidth={drawerWidth}
            drawerIcon={<CustomDrawerButton />}
            renderLeftButton={() => <CustomBackButton />}
          >
            <Scene
              key="SearchPage"
              component={SearchPage}
              title={I18n('search')}
            />
          </Drawer>
          
        </Scene>
        <Scene key="ContactModal" component={ContactModal}/>
        <Scene key="LoadingModal" component={LoadingModal} />
        <Scene key="BottomModal" component={CommonBottomModal} />
        <Scene key="ConfirmModal" component={CommonConfirmModal} />
        {
        <Scene key="LoginPage">
          <Scene component={LoginPage} showLabel={true} hideNavBar />
        </Scene>
        }
        {
        <Scene key="RegisterPage">
          <Scene component={RegisterPage} showLabel={true} hideNavBar />
       </Scene>
        }

      </Lightbox>
    </Router>
   )
};

export default getRouter;

