// 定义全局api
const remoteApi = 'https://staging.solebtc.com/api/v1';
function Fetch(url  , obj ){

  let defaultObj = {
    method : 'GET',
  }

  if(typeof obj === 'object'){
    Object.assign(defaultObj , obj)
  }
  const promise = new Promise( (resolve , reject) => {
    fetch(remoteApi + url , defaultObj).then( (res)=> {
      switch (res.status) {
        case 400:
          resolve({code : -110 , message : '参数错误'})
          break;
        case 409:
          resolve({code : -110 , message : '邮箱或地址已被注册'})
          break;
        case 401:
          resolve({code : -110 , message : '验证失败，TOKEN失效'})
          break;
        case 403:
          resolve({code : -110 , message : '无权限操作'})
          break;
        case 200:
          res.json().then( (res)=> {
              resolve(res);
          });
          break;
        default:

      }

    }).catch(function(error) {
      console.log(error.message);
  });

  })
  return promise
}

export default Fetch;
