/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
import request from 'superagent';
import store from 'store';
import URI from 'urijs';
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const GET_HISTORY_LIST = 'GET_HISTORY_LIST'
export const GET_WITHDRAWALS_LIST = 'GET_WITHDRAWALS_LIST'
export const GET_OFFERWALL_LIST = 'GET_OFFERWALL_LIST'
// const v1 = BaseConfig'.api;
import BaseConfig from '../../../BaseConfig';
const v1 = BaseConfig.api

// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function historyList(res,dataType){
  return {
    type : GET_HISTORY_LIST ,
    res,
    dataType : dataType
  }
}

export function getHistoryList(param,type) {
  return (dispatch) => {
    let url = new URI(v1 + param);
    request
      .get(url.toString())
      .set('Auth-Token', store.get('auth_token'))
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
          // console.log(res)
            let res = JSON.parse(res.text);
            dispatch(historyList(res,type));
        }
      });
  };
}



export const actions = {
  getHistoryList
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_HISTORY_LIST] : (state , action) => {

    console.log(2222)
    // return Object.assign({} , state , {
    //   rewardList : action.res.data,
    //   count : action.res.count,
    //   type : action.dataType
    // })
    if(action.dataType == 'withdrawals'){
      return Object.assign({} , state , {
        withdrawals : {
          rewardList : action.res.data,
          count : action.res.count,
          type : action.dataType
        }
      })
    }
    if(action.dataType == 'withdrawals'){
      return Object.assign({} , state , {
        rewards : {
          rewardList : action.res.data,
          count : action.res.count,
          type : action.dataType
        }
      })
    }
    if(action.dataType == 'withdrawals'){
      return Object.assign({} , state , {
        offerwall : {
          rewardList : action.res.data,
          count : action.res.count,
          type : action.dataType
        }
      })
    }
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
