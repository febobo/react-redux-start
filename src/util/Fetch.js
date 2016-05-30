// 定义全局api
// const remoteApi = 'https://staging.solebtc.com/api/v1';
const remoteApi = 'https://solebtc.com/api/v1';
import {i18n} from './i18n'
function Fetch(url  , obj , cb , header ){


  let defaultObj = {
    method : 'GET',
  }
  if(typeof obj === 'object'){
    Object.assign(defaultObj , obj)
  }
  // console.log(defaultObj)
  const promise = new Promise( (resolve , reject) => {
    fetch(remoteApi + url , defaultObj).then( (res)=> {
      switch (res.status) {
        case 400:
          resolve({code : -110 , message : i18n.t('message.paramWrong')})
          break;
        case 409:
          resolve({code : -110 , message : i18n.t('message.accountRepeated')})
          break;
        case 401:
          resolve({code : -110 , message : '验证失败，TOKEN失效'})
          break;
        case 403:
          resolve({code : -110 , message : '无权限操作'})
          break;
        case 404:
          resolve({code : -110 , message : i18n.t('message.no_data')})
          break;
        case 200:
          res.json().then( (res)=> {
              resolve(res);
          });
        case 201:
          res.json().then( (res)=> {
              resolve(res);
          });
          break;
        default:
        resolve(res);
      }

    }).catch(function(error) {
      console.log(error.message);
  });

  })
  return promise
}

export default Fetch;
