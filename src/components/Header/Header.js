import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavBar from '../NavBar'
import classes from './Header.scss'
import logoImg from '../../static/images/logo.png'
import arrowIco from '../../static/images/arrowIco.png'
import { Menu, Dropdown, Icon } from 'antd';
import {i18n} from '../../util/i18n'

// function handleMenuClick(e) {
//   console.log('click', e);
// }


export class Header extends React.Component {

  constructor (props){
    super(props);
    this.changeLanguage = this.props.changeLanguage.bind(this);
  }
  _changeLanguage(evt) {
    // reload the whole page
    // as dispatch(changeLanguage($lang)) do not caused re-render
    //  evt.target.getAttribute('lang');

    let lang = evt.item.props.lang;
    this.changeLanguage(lang);
    window.location.reload();
  };

  render (){
    const langs = {
      'en': 'English',
      'cn': '中文'
    };

    const menu = (
      <Menu onClick={::this._changeLanguage} >
        {['en', 'cn'].map((lang, i) => {
          return (
              <Menu.Item key={i} lang={`${lang}`} >
                {langs[lang]}
              </Menu.Item>
          );
        })}
      </Menu>
    );
    return (
      <div>
        <div className={classes.topBg}>
        	<div className={classes.top}>
        		<div className={classes.logo}>
              <a href="/"><img src={logoImg} /></a>
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
        			<span>Oline：<em>1357</em><span>
        		</span></span></div>
        	</div>

        </div>

        <NavBar {...this.props} />
      </div>
  )}
}


export default Header

        // <a href="/"><img src={require('./logo.png')}></a>
// <div>
//   <h1>React Redux Starter Kit</h1>
//   <IndexLink to='/' activeClassName={classes.activeRoute}>
//     Home
//   </IndexLink>
//   {' · '}
//   <Link to='/counter' activeClassName={classes.activeRoute}>
//     Counter
//   </Link>
//
// </div>
