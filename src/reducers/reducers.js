import { BTC_WEBSOCKET } from '../actions/Websocket.js'
import { combineReducers } from 'redux'


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
