import React from 'react'
import {Link} from 'react-router'
import { Menu, Dropdown , Icon , Input ,Modal, Button , Form , Tag} from 'antd'
import store from 'store';
import {i18n} from '../../util/i18n'
import classes from './NavBar.scss'
import navIco2 from '../../static/images/navIco2.png'
import navIco3 from '../../static/images/navIco3.png'
import navIco4 from '../../static/images/navIco4.png'
import navIco5 from '../../static/images/navIco5.png'
import navIco1 from '../../static/images/navIco1.png'
// import navIco2 from '../../static/images/navIco2.png'
// import navIco3 from '../../static/images/navIco3.png'
// import navIco4 from '../../static/images/navIco4.png'

import btcIco from '../../static/images/btcIco.png'
import moneyIco from '../../static/images/moneyIco.png'
const FormItem = Form.Item;


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" href="http://www.baidu.com/">go to baidu</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="http://www.baidu.com/">go to baidu</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="http://www.baidu.com/">go to baidu</a>
    </Menu.Item>
  </Menu>
);

type Props = {

};

export class NavBar extends React.Component {
  props: Props;

  _sendEmail (){
    const { sendUserEmail , isBoolean } = this.props;
    sendUserEmail();
    isBoolean(false);
  }

  _logout (){
    const { logout , history} = this.props;
    logout();
    history.pushState(null, '/login');
  }

  render () {
    const { data , isBoolean , isloading ,sendUserEmail , history } = this.props;
    // console.log(history.isActive(to , null ,true))
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <div className={classes.nav}>
      	<ul>
      		<li>
            <Link to='/' activeClassName={classes.navCur}>
              <img src={navIco1} />
              {i18n.t('common.lottery')}
            </Link>
          </li>
      		<li>
            <Link to='/account' activeClassName={classes.navCur}>
              <img src={navIco2} />
              {i18n.t('common.account')}
            </Link>
          </li>
      		<li>
            <Link to='/history' activeClassName={classes.navCur}>
              <img src={navIco3} />
              {i18n.t('common.history')}
            </Link>
          </li>
      		<li>
            <Link to='/ref' activeClassName={classes.navCur}>
              <img src={navIco4} />
              {i18n.t('common.offline')}
            </Link>
          </li>
      		<li>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                <img src={navIco1} />
                {i18n.t('common.other')}
                <Icon type="down" />
              </a>
            </Dropdown>
          </li>

      	</ul>
      	<div className={classes.clear}></div>
      	<p>As long as you have over 0.001BTC, the system will pay to your BTC address automatically at 0:00(UTC) every day.</p>
      	<div className={classes.btc}>
      		<img src={btcIco} />
      		<strong>{i18n.t('common.btcAddress')}：</strong>
          {
            data && data.address ?
            <span>{data.address}</span> :
            null
          }
          {
            data && data.status == 'unverified' ?
      		  <em style={{cursor:"pointer",color : 'red' , float: 'right'}} onClick={ ()=> { isBoolean(true) }}>（{i18n.t('navbar.unverified')}）</em>
            : null
          }
          {
            data && data.status == 'verified' ?
      		  <em style={{marginLeft:'5px' ,float: 'right'}}>(verified)</em>
            : null
          }
          {
            data && data.status == 'banned' ?
      		  <em style={{marginLeft:'5px' , float: 'right'}}>(banned)</em>
            : null
          }
            <Modal ref="modal"
              visible={isloading}
              title="邮箱认证"
              onCancel={ ()=> {isBoolean(false)} }
              footer={[
                <Button key="back" type="ghost" size="large" onClick={ ()=> {isBoolean(false)} }>返 回</Button>,
                <Button key="submit" type="primary" size="large" loading={false} onClick={::this._sendEmail} >
                  提 交
                </Button>,
              ]}>
              <div style={{'fontSize':'20px'}}>
                点击提交系统将会发送验证邮件至您邮箱<br></br>请注意查收
              </div>
            </Modal>

      	</div>
      	<div className={classes.btc} style={{width:"auto"}}>
      		<img src={moneyIco} />
      		<strong>{i18n.t('navbar.balance')}：</strong>
          {
            data && data.balance ?
            <span>{data.balance}Bits</span> :
            0
          }
      	</div>
        <div className={classes.logout} onClick={::this._logout} >
          <Icon type="poweroff" />
          Logout
        </div>
      </div>
    )
  }
}
// <Modal title="邮箱认证"
//   visible={isloading}
//   onOk={ ()=> {isBoolean(false)} } >
//   <Form horizontal form={this.props.form}>
//     <FormItem
//       {...formItemLayout}
//       validateStatus="error"
//       help="请输入正确的邮箱"
//       hasFeedback
//       label="邮箱：">
//       <Input  type="text" autoComplete="off" />
//     </FormItem>
//   </Form>
//   </Modal>
export default NavBar
