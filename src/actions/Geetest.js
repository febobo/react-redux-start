export const CAPTCHA = 'CAPTCHA';
import request from 'superagent';
import URI from 'urijs';
const v1 = 'https://staging.solebtc.com/api/v1';


// ------------------------------------
// Actions
// ------------------------------------

export function captchaData (res){
  return {
    type : CAPTCHA,
    res
  }
}

export function getCaptcha(){
  return ( dispatch , getState ) =>{
    let url = new URI(v1 + '/captchas');
    request
      .get(url.toString())
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
            let res = JSON.parse(res.text);
            dispatch(captchaData(res));
        }
      });
  }
}
