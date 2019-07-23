
import React, { Component } from 'react';
import { Scene, Router, Lightbox, Drawer } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import DynamicPage from './components/DynamicPage';
import TrendPage from './components/TrendPage';
import MyPage from './components/MyPage';
import SearchButton from './components/widget/CustomSearchButton' ;
// import { View,Text } from "react-native";
// // import console = require('console');

// // import styles from './style' ;


// /**
//  * 全局路由
//  */
const getRouter = () =>  (
    // <View ><Text>12222111</Text></View>
    <Router
    >
      <Lightbox>
        <Scene key="LoginPage">
          <Scene component={LoginPage} showLabel={true} hideNavBar />
        </Scene>
        <Scene key="root">
          <Scene key="mainTabPage" 
            tabs
            lazy
            tabBarPosition={"bottom"}
            hideNavBar
            // tabBarStyle={{
            //     height: 44,
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //     backgroundColor: '#ffffff'
            //   }}
            //   renderRightButton={() => <SearchButton />}
          >
            <Scene 
              key="DynamicPage"
              component={DynamicPage}
              title={'动态'}
              tabIconName={'tabDynamic'}
            >
            </Scene>
            <Scene 
              key="TrendPage"
              component={TrendPage}
              title={'推荐'}
              tabIconName={'tabRecommended'}
            >
            </Scene>
            <Scene 
              key="MyPage"
              component={MyPage}
              title={'我的'}
              tabIconName={'tabMy'}
            >
            </Scene>
          </Scene>
        </Scene>
      </Lightbox>
    </Router>
  );

export default getRouter;


// import React from 'react';
// import { StyleSheet, Text, View, BackHandler, StatusBar, DeviceEventEmitter } from 'react-native';

// import {
//     Scene,
//     Router,
//     Actions,
//     Reducer,
//     ActionConst,
//     Overlay,
//     Tabs,
//     Modal,
//     Drawer,
//     Stack,
//     Lightbox,
// } from 'react-native-router-flux';
// const router = (...props) => (
//     <Router 
//     >
//         <Modal
//             hideNavBar
//         >
//             <Stack hideNavBar headerMode='screen' key="root">
//                 <Tabs
//                     key="tabbar"        // 唯一标识
//                     wrap={true}         // 自动使用自己的导航栏包装每个场景
//                     showLabel={false}   // 显示文字
//                     tabBarStyle={styles.tabBarStyle} // tabBar的样式
//                     swipeEnabled={false}// 是否可以滑动
//                     headerMode='screen' // 页面切换方式
//                     lazy={true}         // 是否默认渲染tabbar
//                     tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
//                     activeBackgroundColor='white'   // 选中tabbar的背景色
//                     inactiveBackgroundColor='white' // 未选中tabbar的背景色
//                     activeTintColor='#4ECBFC'       // 选中tabbar图标的颜色
//                     inactiveTintColor='#aaa'        // 未选中tabbar图标的颜色
//                 >
//                     <Stack key="Test1"
//                            title={'识兔'}
//                           //  image={Images.ShiTu}
//                           //  selectedImage={Images.ShiTu}
//                     >
//                         <Scene component={DynamicPage} key="Test1_key"/>
//                     </Stack>
//                     <Stack key='Test2'
//                            title='百思'
//                           //  image={Images.Gank}
//                           //  selectedImage={Images.Gank}
//                     >
//                         <Scene component={TrendPage} key="Test2_key"/>
//                     </Stack>
//                     <Stack key="Test3"
//                            title='我的'
//                           //  image={Images.Main}
//                           //  selectedImage={Images.Main}
//                     >
//                         <Scene component={MyPage} key="Test3_key"/>
//                     </Stack>
//                 </Tabs>
//                 {/*// 推荐把需要的路由放在<Tabs/>后面，跳转的时候通过key，Actions.Test3_key*/}

//             </Stack>
//             <Stack gesturesEnabled={false}  key="Login">
//                 <Scene
//                     title='登录'
//                     key="LoginModal"
//                     component={LoginPage}
//                     gesturesEnabled={false}
//                     hideNavBar
//                     onExit={() => console.log('onExit')}
//                     onLeft={Actions.pop}
//                 />
               
//             </Stack>

//         </Modal>
//     </Router>
// );

// export default router;

// const styles = StyleSheet.create({
//     tabBarStyle: {
//         backgroundColor: '#eee',
//         height:49,
//     },
// });