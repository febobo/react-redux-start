/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
import Fetch from '../../../util/Fetch'
import store from 'store';
export const USER_REGISTER = 'USER_REGISTER'
export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';
export const IS_BOOLEAN = 'IS_BOOLEAN';


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

export function changeLanguage(language) {
  store.set('language', language);
  return {
    type: LANGUAGE_CHANGED,
    language
  };
}

// 用户注册
export function userRegister(url , obj , cb){
 return (dispatch , getstate ) => {

   console.log(obj)
   if(!obj.body || !JSON.parse(obj.body).email || !JSON.parse(obj.body).address){
     return dispatch(register({code : -110 , message : '请填写完整信息'}))
   }
   let param =  JSON.parse(obj.body);
   // 验证邮箱
   if(param && param.email){
     if(!/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(param.email)){
       return dispatch(register({code : -110 , message : '请输入正确的邮箱'}))
     }
   }
  Fetch(url,obj).then( (res) => {
    if(!res.code){
      cb && cb();
      store.set('user' , res)
    }
    return dispatch(register(res))
  })
 }
}


export const actions = {
  userRegister,
  isBoolean
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
    return Object.assign({} , state , { isBoolean :action.isBoolean})
  }
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
