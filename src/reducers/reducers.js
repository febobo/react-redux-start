import { BTC_WEBSOCKET } from '../actions/Websocket.js'
import { combineReducers } from 'redux'


const lotteryState = {

}
export function lottery ( state = lotteryState , action = {}){
  console.log(action.type)
  switch (action.type) {
    case BTC_WEBSOCKET:

      console.log(2211)
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
