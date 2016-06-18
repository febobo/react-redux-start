/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
import request from 'superagent';
import store from 'store';
import URI from 'urijs';
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const GET_HISTORY_LIST = 'GET_HISTORY_LIST'
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

export function historyList(res){
  return {
    type : GET_HISTORY_LIST ,
    res
  }
}

export function getHistoryList(param) {
  return (dispatch) => {
    let url = new URI(v1 + '/withdrawals' + param);
    request
      .get(url.toString())
      .set('Auth-Token', store.get('auth_token'))
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
          // console.log(res)
            let res = JSON.parse(res.text);
            dispatch(historyList(res));
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
    return Object.assign({} , state , {
      rewardList :action.res.data,
      count : action.res.count
    })
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
