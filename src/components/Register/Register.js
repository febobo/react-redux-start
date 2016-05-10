import React from 'react'
import {Link} from 'react-router'
import classes from './Register.scss'
import Strength from '../Strength'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import { Alert , Button } from 'antd'
import {i18n} from '../../util/i18n'
import Lottery from '../Lottery'
import About from '../About'
type Props = {

};
// <input type="button" name="" className={classes.regBtn} value={i18n.t('register.register')}
// onClick={ () => this._userRegister() }
// />
export class Register extends React.Component {
  props: Props;

  componentDidMount (){
      this.refs.email.focus();
  }

  _userRegister (){
    const { userRegister , history} = this.props;
    let email = this.refs.email.value;
    let address = this.refs.address.value;
    let query = {
      "email": email,
      "address": address,
      "referer_id": 0
    }
    userRegister('/users' , {'method' : 'POST' , body:JSON.stringify(query) },
      () => {
        history.pushState(null, '/login')
      }
    );

  }

  render () {
    console.log(this.props)
    const {data , userRegister , isLoading } = this.props;

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
    			<form style={{overflow : 'hidden'}}>
    				<input name="" className={classes.regEmail} placeholder={i18n.t('register.email')} ref="email"/>
    				<input name="" className={classes.regBtc} placeholder={i18n.t('register.bitcoin_address')} ref="address" />
            <Button type="primary" loading={isLoading} className={classes.regBtn} onClick={ () => this._userRegister() }>
              {i18n.t('register.register')}
            </Button>
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
