import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import { userRegister ,
         changeLanguage,
         sendUserEmail,
         logout,
         userAuth
       } from '../../routes/Register/modules/register'
import { getUser , userLogin } from '../../routes/Login/modules/login'
import { isBoolean } from '../../actions/Nav'
import { getBtcWebsocket } from '../../actions/Websocket'

import {i18n} from '../../util/i18n'
import store from 'store';
import {LocaleProvider , message , Modal} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';

export class CoreLayout extends React.Component {

  componentWillMount() {
    let {language , getUser , userAuth , location , history , userLogin}  = this.props;
    i18n.extend(require('../../texts/' + language + '.js').text);

    // fuckAdBlock.onDetected(()=>{
    //   Modal.info({
    //     title: 'Tips',
    //     content: 'Please disable your Ad-blocking browser plugin！',
    //     onOk(){
    //       history.push('/login');
    //     }
    //   });
    // })
    // token && id 同时存在即为认证
      const query = location.query;
      if(query.id && query.token && query.email){
        userAuth(query);
        let params = {
          "email": decodeURIComponent(query.email),
        }
        userLogin(
          '/auth_tokens' ,
          {
            'method' : 'POST',
             body:JSON.stringify(params)
          },  () => {
              getUser(()=>{
                history.push('/');
                message.success(i18n.t('message.login_success'), 3);
              });
          }
        );
    }else{
      getUser();
    }
  };

  render (){
    const { children } = this.props;
    // console.log(this)
    return (
      <LocaleProvider locale={enUS}>
      <div className=''>
        <Header {...this.props}/>
        <div className={classes.mainContainer}>
          {children}
        </div>
        <Footer />
      </div>
      </LocaleProvider>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout

const mapActionCreators = {
  userRegister,
  changeLanguage,
  isBoolean,
  getBtcWebsocket,
  sendUserEmail,
  logout,
  getUser,
  userAuth,
  userLogin
}

const Lang = [
  ['en'],
  ['lt'],
  ['ds'],
  ['gb'],
  ['me'],
]

const mapStateToProps = (state) => ({
  data : state.login && state.login.user || store.get('user'),
  language : store.get('language') || Lang[process.env.TYPE-1],
  isloading : state.nav && state.nav.isloading || false,
  users_online : state.lottery && state.lottery.users_online || 0
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
