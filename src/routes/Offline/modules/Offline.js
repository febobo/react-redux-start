import request from 'superagent';
import store from 'store';
import URI from 'urijs';
export const GET_OFFLINE_LIST = 'GET_OFFLINE_LIST'
const v1 = 'https://staging.solebtc.com/api/v1';
// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function offlineList(res){
  return {
    type : GET_OFFLINE_LIST ,
    res
  }
}

export function getOfflineList(param) {
  return (dispatch) => {
    let url = new URI(v1 + '/users/referees' + param);
    request
      .get(url.toString())
      .set('Auth-Token', store.get('auth_token'))
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
            let res = JSON.parse(res.text);
            dispatch(offlineList(res));
        }
      });
  };
}



export const actions = {
  getOfflineList
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_OFFLINE_LIST] : (state , action) => {
    return Object.assign({} , state , {
      offlineList :action.res,
      count : action.count
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
