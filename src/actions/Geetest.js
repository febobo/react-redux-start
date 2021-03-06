export const SEND_LOTTERY = 'SEND_LOTTERY';
export const COUNT_DOWN = 'COUNT_DOWN';
export const SET_DELY = 'SET_DELY';

import request from 'superagent';
import URI from 'urijs';
import { message } from 'antd'
import BaseConfig from '../BaseConfig';
const v1 = BaseConfig.api


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

export function tipsShow(tipsDley){
  return {
    type : SET_DELY,
    tipsDley
  }
}

var tipsTimer ;
export function setDely (dely){
  if(!dely) return ;
  return ( dispatch ) => {
  let tipsTimer = setInterval( () => {
      dely --;
      dispatch(tipsShow(dely))
      if(dely == 0){
        clearInterval(tipsTimer)
      }
    },1000)
  }
}
export function sendLottery(headers,cb){
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
            cb && cb();
            // console.log(res)
            let res = JSON.parse(res.text);
            dispatch(lotteryData(res));
        }
      });
  }
}
