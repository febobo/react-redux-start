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
import { getUser } from '../../routes/Login/modules/login'
import { isBoolean } from '../../actions/Nav'
import { getBtcWebsocket } from '../../actions/Websocket'

import {i18n} from '../../util/i18n'
import store from 'store';
import {LocaleProvider} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';

export class CoreLayout extends React.Component {

  componentWillMount() {
    let {language , getUser , userAuth , location , history}  = this.props;
    i18n.extend(require('../../texts/' + language + '.js').text);

    // token && id 同时存在即为认证
    const query = location.query;
    if(query.id && query.token){
      userAuth(query , getUser);
      history.push('/');
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
  userAuth
}

const mapStateToProps = (state) => ({
  data : state.login && state.login.user || store.get('user'),
  language : store.get('language') || 'en',
  isloading : state.nav && state.nav.isloading || false,
  users_online : state.lottery && state.lottery.users_online || 0
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
