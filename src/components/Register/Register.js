import React from 'react'
import classes from './Register.scss'
import Strength from '../Strength'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import { Alert } from 'antd'
type Props = {

};
export class Register extends React.Component {
  props: Props;

  componentDidMount (){
      this.refs.email.focus();
      console.log(this);
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
    userRegister('/users' , {'method' : 'POST' , body:JSON.stringify(query) });
    history.pushState(null, '/login')
  }

  render () {
    const {data , userRegister} = this.props;

    return (
    <div>
    <div className={classes.login}>
    	<div className={classes.reg}>
    		<div className={classes.regTitle}>
    			<ul>
    				<li className={classes.regCur}>注册</li>
    				<li>登陆</li>
    			</ul>
    		</div>
    		<div className={classes.clear}></div>
    		<div className={classes.regForm}>
    			<form style={{overflow : 'hidden'}}>
    				<input name="" className={classes.regEmail} placeholder="请输入邮箱" ref="email"/>
    				<input name="" className={classes.regBtc} placeholder="请输入BTC地址" ref="address" />
    				<input type="button" name="" className={classes.regBtn} value="注册"
            onClick={ () => this._userRegister() }
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
      		<div className={classes.dynamic}>
      			<div className={classes.dynamicTitle}><img src={dynamicIco.png} /><span><b>抽奖动态</b></span></div>
      			<div className={classes.dynamicTab}>
      				<p>BTC地址</p>
      				<p>金额</p>
      				<p>时间</p>
      			</div>
      			<div className={classes.clear}></div>
      			<div className={classes.dynamicList}>
      				<ul>
      					<li className={classes.dynamicBg}>
      						<p>12454545112@qq.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li>
      						<p>lishimin912264@163.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li className={classes.dynamicBg}>
      						<p>12454545112@qq.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li>
      						<p>lishimin912264@163.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li className={classes.dynamicBg}>
      						<p>12454545112@qq.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li>
      						<p>lishimin912264@163.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li className={classes.dynamicBg}>
      						<p>12454545112@qq.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li>
      						<p>lishimin912264@163.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li className={classes.dynamicBg}>
      						<p>12454545112@qq.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li>
      						<p>lishimin912264@163.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li className={classes.dynamicBg}>
      						<p>12454545112@qq.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li>
      						<p>lishimin912264@163.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li className={classes.dynamicBg}>
      						<p>12454545112@qq.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>
      					<li>
      						<p>lishimin912264@163.com</p>
      						<p><font color="#509c1d">0.005btc</font></p>
      						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
      					</li>

      				</ul>
      			</div>
      		</div>
      		<div className={classes.aboutUs}>
      			<div className={classes.aboutTitle}><img src={aboutIco.png} /><span><b>关于我们</b></span></div>
      			<div className={classes.clear}></div>
      			<div className={classes.aboutText}>
      				<p>
      					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solebtc专注于交换数字货币,通常被称为“比特币”我们目前服务超过20种不同类型的数字货币可以直接与人民币交易比特币没有一个集中的发行方。
      				</p>
      			</div>
      		</div>
      	</div>
      </div>
      <Strength />
  </div>
    )
  }
}

export default Register
