
import {postJson} from './net'

// let res = await Api.netFetch(url, 'GET', requestParams, false, {Accept: 'application/vnd.github.html,application/vnd.github.VERSION.raw'});

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

// 登录
export const login = async (data, callback) => {
  const rs = await postJson('/rcrt/headhunter/login/login', data, callback);
  return rs;
};

/**
 * 数据管理模块相关
 */

 // 测算记录
export const testRecordData = async (data, callback) => {
  const rs = await postJson('/rcrt/headhunter/login/login', data, callback);
  // return rs;
  return {
    "data": [
      {
        "name": '张三',
        "id": '1',
      },
      {
        "name": '李四',
        "id": '2',
      },
      {
        "name": '王五',
        "id": '3',
      },
      {
        "name": '赵六',
        "id": '4',
      }
    ],
    "responseCode": "10001",
    "responseMsg": "请求成功",
  }
};

// 获取联系人列表
export const contactList = async (data, callback) => {
  const rs = await postJson('/rcrt/headhunter/login/login', data, callback);
  // return rs;
  return {
    "data": [
      {
        'title':'家人',
        'data': [
          {
            "name": '张三1',
            "id": '1',
          },
          {
            "name": '张三2',
            "id": '2',
          }
        ]
      },
      {
        'title':'对手',
        'data': [
          {
            "name": '李四1',
            "id": '1',
          },
          {
            "name": '李四2',
            "id": '2',
          }
        ]
      },
    ],
    "responseCode": "10001",
    "responseMsg": "请求成功",
  }
};