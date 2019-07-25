const initState = {
    animateCls: 'normal', // 过渡动画样式
  };
  
  export const user = (state = initState, action) => {
    switch (action.type) {
    case 'SAVE_USER_INFO':
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
    }
  };