export const SEND_LOTTERY = 'SEND_LOTTERY';
import request from 'superagent';
import URI from 'urijs';
import { message } from 'antd'
const v1 = 'https://staging.solebtc.com/api/v1';


// ------------------------------------
// Actions
// ------------------------------------

export function lotteryData (res){
  return {
    type : SEND_LOTTERY,
    res
  }
}

export function sendLottery(headers){
  if(!headers) return;
  return ( dispatch , getState ) =>{
    let url = new URI(v1 + '/incomes/rewards');
    request
      .post(url.toString())
      .set(headers)
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
            message.success('您已成功抽奖一次', 3);
            let res = JSON.parse(res.text);
            dispatch(lotteryData(res));
        }
      });
  }
}
