/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
import Fetch from '../../../util/Fetch'
export const USER_REGISTER = 'USER_REGISTER'
// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function increment (value: number = 1): Action {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function register (res){
  return {
    type : USER_REGISTER,
    res : res
  }
}
// 用户注册
export function userRegister(url , obj , data){

 return (dispatch , getstate ) => {

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
    return dispatch(register(res))
  })
 }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync,
  userRegister
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_REGISTER] : (state , action) => {
    return Object.assign({} , state , { data :action.res})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function counterReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
