/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
import Fetch from '../../../util/Fetch'
import store from 'store';
import request from 'superagent';
import URI from 'urijs';
import { message } from 'antd';
const v1 = 'https://staging.solebtc.com/api/v1';

export const USER_LOGIN = 'USER_LOGIN'
export const GET_USER = 'GET_USER'
export const GET_REWARDS = 'GET_REWARDS'
export const SET_USER = 'SET_USER'

// ------------------------------------
// Actions
// ------------------------------------

export function rewardList (res){
  type : GET_REWARDS,
  res
}

// 用户注册
export function getRewards(url , obj , cb){
 return (dispatch , getstate ) => {
  Fetch(url,obj).then( (res) => {
    if(!res.code){
      cb && cb();
      store.set('user' , res)
    }
    return dispatch(login(res))
  })
 }
}
export function login (res){
  return {
    type : USER_LOGIN,
    res : res
  }
}

// 用户注册
export function userLogin(url , obj , cb){
 return (dispatch , getstate ) => {

   if(!JSON.parse(obj.body).email){
     return dispatch(login({code : -110 , message : '请填写完整信息'}))
   }
   let param =  JSON.parse(obj.body);
   // 验证邮箱
   if(param && param.email){
     if(!/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(param.email)){
       return dispatch(login({code : -110 , message : '请输入正确的邮箱'}))
     }
   }
  Fetch(url,obj).then( (res) => {
    console.log(res , 33333)
    if(!res.code){
      store.set('auth_token' , res.auth_token)
      cb && cb();
    }
    return dispatch(login(res))
  })
 }
}

/* User operation */
export function getUser(cb) {
  return (dispatch) => {
    let url = new URI(v1 + '/users');

    request
      .get(url.toString())
      .set('Auth-Token', store.get('auth_token'))
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
            let user = JSON.parse(res.text);
            message.success('登陆成功，系统自动为您跳转至首页', 3);
            store.set('user', user);
            cb && cb();
            dispatch(setUser(user));
        }
      });
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

export const actions = {
  userLogin,
  getRewards,
  getUser
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGIN] : (state , action) => {
    return Object.assign({} , state , { data :action.res})
  },
  [GET_REWARDS] : (state , action) => {
    return Object.assign({} , state , { rewardList :action.res})
  },
  [SET_USER] : (state , action) => {
    return Object.assign({} , state , { user :action.user})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
