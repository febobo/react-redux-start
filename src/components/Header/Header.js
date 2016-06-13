import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavBar from '../NavBar'
import classes from './Header.scss'
import logoImg from '../../static/images/logo.png'
import soledash from '../../static/images/soledash.png'
import SoleDoKC from '../../static/images/SoleDoKC.png'
import SoleLTC from '../../static/images/SoleLTC.png'
import arrowIco from '../../static/images/arrowIco.png'
import { Menu, Dropdown, Icon } from 'antd';
import {i18n} from '../../util/i18n'
import store from 'store'
// function handleMenuClick(e) {
//   console.log('click', e);
// }

//process.env.TYPE
// [1,2,3,4] => [solebtc , SoleLTC , soledash , SoleDoKC]
export class Header extends React.Component {

  constructor (props){
    super(props);
    this.changeLanguage = this.props.changeLanguage.bind(this);
    // console.log(process.env.TYPE)
  }

  _changeLanguage(evt) {
    let lang = evt.item.props.lang;
    this.changeLanguage(lang);
    window.location.reload();
  };

  render (){
    const langs = [{
      'en': 'English',
      'cn': '中文',
      'ft': '繁體中文',
      // 'ar': 'العربية',
      'ru': 'Русский',
      'fy': 'Français',
      'pt' : 'Português',
      'de' : 'Deutsch',
      'sp' : 'Español',
    },{
      'lt': 'English',
    },{
      'ds': 'English',
    },{
      'gb': 'English',
    },
  ];

  const Lang = [
    ['en', 'cn' , 'ft'  , 'ru', 'fy','pt' , 'de' , 'sp'],
    ['lt'],
    ['ds'],
    ['gb']
  ]
  // console.log(Lang[process.env.TYPE-1])
    const menu = (
      <Menu onClick={::this._changeLanguage} >
        {Lang[process.env.TYPE-1].map((lang, i) => {
          return (
              <Menu.Item key={i} lang={`${lang}`} >
                {langs[process.env.TYPE-1][lang]}
              </Menu.Item>
          );
        })}
      </Menu>
    );

    const logoArr = [logoImg,SoleLTC,soledash,SoleDoKC]

    const {users_online} = this.props;
    return (
      <div>
        <div className={classes.topBg}>
        	<div className={classes.top}>
        		<div className={classes.logo}>
              <a href="/"><img src={logoArr[process.env.TYPE-1]}
                style={{width: "170px",  height: "59px"}} /></a>
            </div>
        		<div className={classes.language}>
        			<span>{i18n.t('language.language')}<em>|</em></span>
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                  <img src={arrowIco} className={classes.arrowIco} />
                </a>
              </Dropdown>
        		</div>
        		<div className={classes.oline}>
        			<strong></strong>
        			<span>{i18n.t('navbar.online')}：<em>{users_online}</em><span>
        		</span></span></div>
        	</div>

        </div>

        {
          this.props.routes[1].path == 'register' ||
          this.props.routes[1].path == 'login' ?
          null :
          <NavBar {...this.props} />
        }
      </div>
  )}
}


export default Header
