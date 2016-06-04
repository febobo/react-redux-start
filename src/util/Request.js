// 定义全局api
const remoteApi = BaseConfig.api;
import request from 'superagent';
import store from 'store';
import URI from 'urijs';

function Request(url  , obj ){

  let defaultObj = {
    method : 'GET',
  }
  if(typeof obj === 'object'){
    Object.assign(defaultObj , obj)
  }
  // console.log(defaultObj)
  // const promise = new Promise( (resolve , reject) => {
  //
  // })
  // return promise
}

export default Request;
