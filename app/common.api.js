
import {postJson} from './net'

// let res = await Api.netFetch(url, 'GET', requestParams, false, {Accept: 'application/vnd.github.html,application/vnd.github.VERSION.raw'});

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

// 登录
export const login = async (data, callback) => {
  const rs = await postJson('/rcrt/headhunter/login/login', data, callback);
  return rs;
};