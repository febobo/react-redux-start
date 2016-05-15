import { BTC_WEBSOCKET } from '../actions/Websocket.js'
import { IS_BOOLEAN } from '../actions/Nav.js'
import { CAPTCHA } from '../actions/Geetest.js'



const lotteryState = {

}
export function lottery ( state = lotteryState , action = {}){
  switch (action.type) {
    case BTC_WEBSOCKET:
      return Object.assign({} , state ,
        {
          users_online : action.users_online,
          latest_incomes : action.latest_incomes,
        }
      )
      break;
    default:
    return state
  }
}

const navState = {

}

export function nav ( state =navState , action = {}){
  // console.log(action)
  switch (action.type) {
    case IS_BOOLEAN:
      return Object.assign({} , state , { isloading :action.isBoolean})
      break;
    default:
    return state
  }
}


export function  geetest( state = {} , action = {}){
  // console.log(action)
  switch (action.type) {
    case CAPTCHA:
      return Object.assign({} , state , { geetest :action.res})
      break;
    default:
    return state
  }
}
