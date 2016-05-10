import React from 'react'
import {Link} from 'react-router'
import classes from './Login.scss'
import Strength from '../Strength'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import { Alert } from 'antd'
import store from 'store'
import {i18n} from '../../util/i18n'
import Lottery from '../Lottery'
import About from '../About'
type Props = {

};
export class Login extends React.Component {
  props: Props;

  _userLogin (){
    const { userLogin , history , getRewards} = this.props;
    let email = this.refs.email.value;
    let query = {
      "email": email,
    }
    console.log(this)
    userLogin(
      '/auth_tokens' ,
      {
        'method' : 'POST' ,
         body:JSON.stringify(query)
      }
    );
    // history.pushState(null, '/')
  }

  componentDidMount (){
    // const { userLogin , history , getRewards} = this.props;
    // // console.log(store.get('auth_token'))
    // let limit = 15;
    // let until = new Date().getTime();
    //
    //   // 'Auth-Token' : store.get('auth_token')
    // let headers = new Headers();
    // headers.set("Auth-Token", store.get('auth_token') && store.get('auth_token').auth_token);
    // // console.log(headers.get('Auth-Token'))
    // getRewards(
    //   '/incomes/rewards?until=' + until + '&limit=15' ,
    //   {
    //     headers : {
	  //       'Auth-Token': "d5f3a1f9-1ee0-473c-a8c2-5f0b203722c7"
	  //     }
    //   }
    // )


  }

  render () {
    console.log(this.props)
    const { data } = this.props;
    return (
    <div>
      <div className={classes.login}>
      	<div className={classes.reg}>
      		<div className={classes.regTitle}>
      			<ul>
            <li className={classes.regCur}>
              <Link to='/register' activeClassName={classes.regCur}>
                {i18n.t('register.register')}
              </Link>
            </li>
    				<li>
              <Link to='/login' activeClassName={classes.regCur}>
                {i18n.t('login.login')}
              </Link>
            </li>
      			</ul>
      		</div>
      		<div className={classes.clear}></div>
      		<div className={classes.regForm}>
      			<form>
      				<input name="" className={classes.loginEmail}
                placeholder={i18n.t('login.email')}
                ref="email"
              />
      				<input type="button" name="" className={classes.regBtn}
                value={i18n.t('login.login')}
                onClick={ () => this._userLogin() }
              />
      			</form>
      		</div>
          {
            data && data.code == -110 ?
            <div style={{padding : "10px 20px"}}>
            <Alert
              message="温馨提示"
              description={data.message}
              type="error"
              showIcon
            />
            </div> :
            null
          }
      	</div>
      </div>
      <div className={classes.main}>
      	<div className={classes.mainBlock}>
          <Lottery />
          <About />
      	</div>
      </div>
      <Strength />
  </div>
    )
  }
}

export default Login
