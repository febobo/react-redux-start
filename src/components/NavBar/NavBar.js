import React from 'react'
import {Link , IndexLink} from 'react-router'
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
import OfferWow from '../OfferWow'
import config from '../../BaseConfig'
const FormItem = Form.Item;


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" href="https://solebtc.com">Bitcoin Faucet</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="https://soledoges.com">Dogecoin Faucet</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="https://soleltc.com">Litecoin Faucet</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="https://soledash.net">Dash Faucet </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#">ETHer Faucet (Coming)</a>
    </Menu.Item>
  </Menu>
);

type Props = {

};

export class NavBar extends React.Component {
  props: Props;

  constructor(props){
    super(props);
    this._lu = this._lu.bind(this);
    this.state = {
      showLu : false
    }
  }

	componentWillMount(){
		if(this.props.routes[1].path){
			return
		}
		if(this.props.language != 'cn' && config.show_btc_super_task && this.props.data ){
			this.setState({
	      showLu : !this.state.showLu,
				showSlider : true,
				type : 7
	    });
		}
	}

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

  _lu({type,showSlider}){
    this.setState({
      showLu : !this.state.showLu,
			showSlider,
			type
    });
  }

  render () {
		// console.log(this.props)
    const { data , isBoolean , isloading ,sendUserEmail , history , language } = this.props;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <div className={classes.nav}>
        {
          this.state.showLu ?
          <OfferWow
            user={data}
            config={config}
            lu={this._lu}
						type={this.state.type}
						showSlider={this.state.showSlider}
          />
          : null
        }
      	<ul>
      		<li>
            <IndexLink to='/' activeClassName={classes.navCur}>
              <img src={navIco1} />
              {i18n.t('common.lottery')}
            </IndexLink>
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
      	<p>
          {i18n.t('navbar.tips')}
          {
            language == 'cn' && config.show_btc_task ?
              <span className={classes.lu}
                onClick={()=>this._lu({type:4})}
              >
                  {
                    this.state.showLu ?
                    null
                    : '撸万聪'
                  }
              </span>
              : null
          }
					{
            language != 'cn' && config.show_btc_super_task ?
              <span className={classes.lu}
                onClick={()=>{this._lu({type:1,showSlider:true})}}
              >
                  {
                    this.state.showLu ?
                    null
                    : 'Earn More'
                  }
              </span>
              : null
          }
          {
            config.show_Lottery_link ?
            <a className={classes.lu} href="http://solejack.com" target="_blank">DogeCoin JackPot</a>
            : null
          }
        </p>
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
              title={i18n.t('message.verify_email')}
              onCancel={ ()=> {isBoolean(false)} }
              footer={[
                <Button key="back" type="ghost" size="large" onClick={ ()=> {isBoolean(false)} }>{i18n.t('message.verifyEmailcancel')}</Button>,
                <Button key="submit" type="primary" size="large" loading={false} onClick={::this._sendEmail} >
                  {i18n.t('message.verifyEmailsubmit')}
                </Button>,
              ]}>
              <div style={{'fontSize':'20px'}}>
                {i18n.t('message.verifyEmailInfo')}
              </div>
            </Modal>

      	</div>
      	<div className={classes.btc} style={{width:"auto"}}>
      		<img src={moneyIco} />
      		<strong>{i18n.t('navbar.balance')}：</strong>
          {
            data && data.balance ?
            <span>{data.balance}{i18n.t('message.unit')}</span> :
            0
          }
      	</div>
        <div className={classes.logout} onClick={::this._logout} >
          <Icon type="poweroff" />
          {i18n.t('navbar.logout')}
        </div>
      </div>
    )
  }
}

export default NavBar
