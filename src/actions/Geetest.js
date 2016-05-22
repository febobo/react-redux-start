export const SEND_LOTTERY = 'SEND_LOTTERY';
export const COUNT_DOWN = 'COUNT_DOWN';
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

var timer;
export function countDown (count){
  if(!count){
    clearInterval(timer)
    return calculation({
      count : 0
     })
  };
  return ( dispatch , getState) => {
    // count = getState().geetest && getState().geetest.time &&
    //         getState().geetest.time.count || count
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval( ()=> {
        count --;
        let m = Math.floor(count / 60) < 10 ? '0' + Math.floor(count / 60)
                  : Math.floor(count / 60)  ;
        let s = count % 60 < 10 ? '0' + count % 60 : count % 60;
        let time = m + ':' + s
        if(count == 0){
          clearInterval(timer);
        }
        return dispatch(calculation({
          time : time ,
          count : count
         }))
      },1000)
  }
}

export function calculation(time){
  return {
    type : COUNT_DOWN,
    time
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
            // message.success('您已成功抽奖一次', 3);
            let res = JSON.parse(res.text);
            dispatch(lotteryData(res));
        }
      });
  }
}
