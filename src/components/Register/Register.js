import React from 'react'
import {Link} from 'react-router'
import GoogleAd from 'react-google-ad'
import classes from './Register.scss'
import Strength from '../Strength'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import { Alert , Button } from 'antd'
import {i18n} from '../../util/i18n'
import Lottery from '../Lottery'
import GoogleAdv from '../GoogleAdv'
import About from '../About'
type Props = {

};

export class Register extends React.Component {
  props: Props;

  componentWillMount (){

  }

  componentDidMount (){
      this.refs.email.focus();
      const script1 = document.createElement("script");
      const script2 = document.createElement("script");
      script2.id="adv_register";
      const ins = document.createElement("ins");
      script1.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script1.async = true;
      script2.async = true;
      script1.type = 'text/javascript';
      script2.type = 'text/javascript';
      ins.className = 'adsbygoogle';
      ins.style = 'display:inline-block;width:970px;height:90px';
      ins.setAttribute('data-ad-client','ca-pub-5722932343401905');
      ins.setAttribute('data-ad-slot','7890025877');
      // script1.id="adv_register1";
      document.getElementById('adv').appendChild(script1);
      document.getElementById('adv').appendChild(ins);
      document.getElementById('adv').appendChild(script2);
      document.getElementById('adv_register').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'

  }

  _userRegister (e){
    e.preventDefault();
    const {
      userRegister ,
      history ,isBoolean ,
      sendUserEmail ,
      location,
      userLogin
    } = this.props;
    let email = this.refs.email.value;
    let address = this.refs.address.value;
    let referer_id = location.query.referer_id ? location.query.referer_id * 1 : null;
    let query = {
      "email": email,
      "address": address,
      "referer_id": referer_id
    }
    isBoolean(true)
    userRegister('/users' , {'method' : 'POST' , body:JSON.stringify(query) },
      () => {
        userLogin(
          '/auth_tokens' ,
          {
            'method' : 'POST' ,
             body:JSON.stringify(query)
          },  () => {
            history.pushState(null, '/login');
            sendUserEmail()
          }
        );
      }
    );

  }

  render () {
    const {data , userRegister , isLoading } = this.props;
    console.log(this)
    return (
    <div>
    <GoogleAdv />
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
    			<form style={{overflow : 'hidden'}}
            onSubmit={::this._userRegister}
          >
            <div className={classes.regEmail}>
              <input name=""
                placeholder={i18n.t('register.email')}
                ref="email"
              />
            </div>
            <div className={classes.regBtc}>
              <input name=""
                placeholder={i18n.t('register.bitcoin_address')}
                ref="address"
              />
            </div>
            <input type="submit"
              loading={isLoading}
              className={classes.regBtn}
              value={i18n.t('register.register')}
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
    <div id="adv"></div>
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

export default Register
