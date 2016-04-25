import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavBar from '../NavBar'
import classes from './Header.scss'
import logoImg from '../../static/images/logo.png'
import arrowIco from '../../static/images/arrowIco.png'

export const Header = () => (

  <div>
    <div className={classes.topBg}>
    	<div className={classes.top}>
    		<div className={classes.logo}>

          <a href="/"><img src={logoImg} /></a>
        </div>
    		<div className={classes.language}>
    			<span>中文简体<em>|</em></span>
    			<a href="#"><img src={arrowIco} className={classes.arrowIco} /></a>
    		</div>
    		<div className={classes.oline}>
    			<strong></strong>
    			<span>Oline：<em>1357</em><span>
    		</span></span></div>
    	</div>

    </div>
    <NavBar />
  </div>
)

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
