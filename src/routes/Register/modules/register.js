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
export const USER_REGISTER = 'USER_REGISTER'
export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';
export const IS_BOOLEAN = 'IS_BOOLEAN';
export const SEND_EMAIL = 'SEND_EMAIL';
export const LOGOUT = 'LOGOUT';



// ------------------------------------
// Actions
// ------------------------------------

export function register (res){
  return {
    type : USER_REGISTER,
    res : res,
  }
}

export function isBoolean (boolean){
  return {
    type : IS_BOOLEAN,
    isBoolean : boolean,
  }
}

export function send_email (res){
  return {
    type : IS_BOOLEAN,
    res
  }
}

export function changeLanguage(language) {
  store.set('language', language);
  return {
    type: LANGUAGE_CHANGED,
    language
  };
}

// 发送邮件
export function sendUserEmail(emali){
  return ( dispatch , getstate) => {
    let url = new URI(v1 + '/sessions');
    request
      .post(url.toString())
      .set('Auth-Token', store.get('auth_token'))
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
            message.success('认证邮件已发送至邮箱，请尽快完成认证', 30);
            dispatch(send_email(res));
        }
      });
  }
}
// 用户注册
export function userRegister(url , obj , cb){
 return (dispatch , getstate ) => {

   if(!obj.body || !JSON.parse(obj.body).email || !JSON.parse(obj.body).address){
     dispatch(isBoolean(false))
     return dispatch(register({code : -110 , message : '请填写完整信息'}))
   }
   let param =  JSON.parse(obj.body);
   // 验证邮箱
   if(param && param.email){
     if(!/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(param.email)){
       dispatch(isBoolean(false))
       return dispatch(register({code : -110 , message : '请输入正确的邮箱'}))
     }
   }
  Fetch(url,obj).then( (res) => {
    if(!res.code){
      cb && cb();
      store.set('user' , res)
    }
    dispatch(isBoolean(false))
    return dispatch(register(res))
  })
 }
}

/* Logout */
export function logout() {
  let url = new URI(v1 + '/auth_tokens');

  // request delete auth token
  request
    .del(url.toString())
    .set('Auth-Token', store.get('auth_token'))
    .end((err, res) => {
      if (err) {
        console.error('logout error:', err);
      }
    });

  // remove from local storage
  store.remove('auth_token');
  store.remove('user');

  return {
    type: LOGOUT
  }
}


export const actions = {
  userRegister,
  isBoolean,
  sendUserEmail,
  logout
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_REGISTER] : (state , action) => {
    return Object.assign({} , state , { data :action.res})
  },
  [LANGUAGE_CHANGED] : (state , action) => {
    return Object.assign({} , state , { language :action.language})
  },
  [IS_BOOLEAN] : (state , action) => {
    console.log(action)
    return Object.assign({} , state , { isBoolean :action.isBoolean})
  },
  [SEND_EMAIL] : (state , action) => {
    return Object.assign({} , state , action)
  },
  [LOGOUT] : (state , action) => {
    return Object.assign({} , state , { data : '' })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  language : store.get('language') || 'en'
};
export default function counterReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
