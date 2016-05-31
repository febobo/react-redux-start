import React from 'react'
import reactDom from 'react-dom'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import {i18n} from '../../../util/i18n'
import Adv from '../../../components/Adv'
import code from '../../../static/images/code.jpg'
import ad1 from '../../../static/images/ad1.jpg'
import ad2 from '../../../static/images/ad2.jpg'
import Lottery from '../../../components/Lottery'
import Geetest from '../../../components/Geetest'
import GoogleAdv from '../../../components/GoogleAdv'
import CoinadAdv from '../../../components/CoinadAdv'
import geetest from 'geetest-proxy';
// import gs from './gs'
// console.log(initGeetest)

export class HomeView extends React.Component {

  componentDidMount (){
      // // this.refs.email.focus();
      // const script1 = document.createElement("script");
      // const script2 = document.createElement("script");
      // script2.id="adv_register";
      // const ins = document.createElement("ins");
      // script1.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      // script1.async = true;
      // script2.async = true;
      // script1.type = 'text/javascript';
      // script2.type = 'text/javascript';
      // ins.className = 'adsbygoogle';
      // ins.style = 'display:inline-block;width:970px;height:90px';
      // ins.setAttribute('data-ad-client','ca-pub-5722932343401905');
      // ins.setAttribute('data-ad-slot','7890025877');
      // // script1.id="adv_register1";
      // document.getElementById('adv').appendChild(script1);
      // document.getElementById('adv').appendChild(ins);
      // document.getElementById('adv').appendChild(script2);
      // document.getElementById('adv_register').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }

  render (){
    const advProps = {
      style : {display:"inline-block",width:"970px",height:"90px"},
      client : 'ca-pub-5722932343401905',
      slot : '1843492278',
      advBoxStyle : { paddingTop:"22px", textAlign : "center"}
    }
    return (

  <div>
    <Geetest />
    <GoogleAdv
      {...advProps}
    />
    <div className={classes.luckMain}>
    	<div className={classes.mainBlock}>
    		<div className={classes.dynamicTitle}><img src="images/dynamicIco.png" /><span><b>{i18n.t('common.dynamic')}</b></span>
        </div>
        <Lottery isDynamic={true} style={{marginTop:'20px'}}/>
    		<div className={classes.ad}>
    			<div className={classes.ad1}><a href="#"><img src={ad1} /></a></div>
    			<div className={classes.ad1}><a href="#"><img src={ad2} /></a></div>
    		</div>
    	</div>
    </div>
    <Adv />
  </div>

)
  }
}

    // <CoinadAdv />
// )
// <Adv />
export default HomeView;
