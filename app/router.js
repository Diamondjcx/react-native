
import React, { Component } from 'react';
import { Scene, Router, Lightbox, Drawer } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import DynamicPage from './components/DynamicPage';
import TrendPage from './components/TrendPage';
import MyPage from './components/MyPage';
import SearchPage from './components/SearchPage';
import LoadingModal from './components/common/LoadingModal';
import SearchButton from './components/widget/CustomSearchButton' ;
import DrawerFilter from './components/widget/SearchDrawerFilter' ;
import CustomBackButton from './components/widget/CustomBackButton';
import CustomDrawerButton from './components/widget/CustomDrawerButton';
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
        <Scene key="LoginPage">
          <Scene component={LoginPage} showLabel={true} hideNavBar />
        </Scene>
        <Scene key="root">
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
                key="DynamicPage"
                component={DynamicPage}
                title={'动态'}
                icon={TabIcon}
                title={I18n('tabDynamic')}
                tabIconName={'tabDynamic'}
              >
              </Scene>
              <Scene 
                key="TrendPage"
                component={TrendPage}
                title={'推荐'}
                icon={TabIcon}
                title={I18n('tabRecommended')}
                tabIconName={'tabRecommended'}
              >
              </Scene>
              <Scene 
                key="MyPage"
                component={MyPage}
                title={'我的'}
                icon={TabIcon}
                title={I18n('tabMy')}
                tabIconName={'tabMy'}
              >
              </Scene>
          </Scene>
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
        <Scene key="LoadingModal" component={LoadingModal} />
        
      </Lightbox>
    </Router>
   )
};

export default getRouter;

