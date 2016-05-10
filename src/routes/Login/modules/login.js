/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
import Fetch from '../../../util/Fetch'
import store from 'store';

export const USER_LOGIN = 'USER_LOGIN'
export const GET_USER = 'GET_USER'
export const GET_REWARDS = 'GET_REWARDS'

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
      console.log(res , 222)
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


export const actions = {
  userLogin,
  getRewards
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
