import React from 'react'
import {Link} from 'react-router'
import classes from './Login.scss'
import Strength from '../Strength'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import { Alert , message } from 'antd'
import store from 'store'
import {i18n} from '../../util/i18n'
import Lottery from '../Lottery'
import About from '../About'
import GoogleAdv from '../GoogleAdv'
type Props = {

};
export class Login extends React.Component {
  props: Props;

  async _userLogin (e){
    e.preventDefault();
    const { userLogin , history , getRewards , getUser } = this.props;
    let email = this.refs.email.value;
    let query = {
      "email": email,
    }
    await userLogin(
      '/auth_tokens' ,
      {
        'method' : 'POST' ,
         body:JSON.stringify(query)
      },  () => {
          getUser(()=>{
            history.push('/');
            message.success(i18n.t('message.login_success'), 3);
          });
      }
    );

  }

  render () {
    const { data } = this.props;
    const advProps = {
      style : {display:"inline-block",width:"970px",height:"90px"},
      client : 'ca-pub-5722932343401905',
      slot : '7890025877',
      advBoxStyle : { paddingTop:"25px", textAlign : "center"}
    }
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
      			<form onSubmit={this._userLogin.bind(this)}>
              <div className={classes.loginEmail}>
                <input name=""
                  placeholder={i18n.t('login.email')}
                  ref="email"
                />
              </div>

      				<input type="submit" name="" className={classes.regBtn}
                value={i18n.t('login.login')}
              />
      			</form>
      		</div>
          {
            data && data.code == -110 ?
            <div style={{padding : "10px 20px"}}>
            <Alert
              message={i18n.t('message.tips')}
              description={data.message}
              type="error"
              showIcon
            />
            </div> :
            null
          }
      	</div>
      </div>
      <GoogleAdv
        {...advProps}
      />
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
