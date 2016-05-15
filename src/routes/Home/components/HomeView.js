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
import geetest from 'geetest-proxy';
// import gs from './gs'
// console.log(initGeetest)

export class HomeView extends React.Component {

  componentDidMount (){
    // let captcha = geetest(reactDom.findDOMNode(this.refs.geetest), {
    //   gt: '5c17ac67511f4174d0861e0ae16e5975',
    //   challenge : '41580e1e3343648961506f235de68cd7',
    //   product : 'float',
    // });
  }

  render (){
    return (

  <div>
    <div className={classes.luck}>

    	<div className={classes.luckBtn}>
      <a href="#"><span>{i18n.t('common.lottery')}</span></a>
      <Geetest />

      </div>
    	<div className={classes.luckCode}  >

      </div>
    </div>
    <Adv />
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
// )

export default HomeView;
