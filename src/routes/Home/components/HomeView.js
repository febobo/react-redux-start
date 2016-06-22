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
import GoogleAdv2 from '../../../components/GoogleAdv2'
import GoogleAdv4 from '../../../components/GoogleAdv4'
import CoinadAdv from '../../../components/CoinadAdv'
import geetest from 'geetest-proxy';
import config from '../../../BaseConfig'
// import store from 'store'
// import gs from './gs'
// console.log(initGeetest)

export class HomeView extends React.Component {

  componentWillMount (){

  }

  render (){
    const advProps = {
      style : {display:"inline-block",width:"970px",height:"90px"},
      client : 'ca-pub-5722932343401905',
      slot : '1843492278',
      advBoxStyle : { paddingTop:"22px", textAlign : "center"}
    }
    const topAdvProps = {
      style : {display:"inline-block",width:"970px",height:"90px"},
      client : 'ca-pub-5722932343401905',
      slot : '3422043073',
      advBoxStyle : { paddingTop:"22px", textAlign : "center"}
    }
    return (

  <div>
    {
      config.show_home_top_adv ?
      <GoogleAdv4
        {...topAdvProps}
      />
      :null
    }
    <Geetest {...this.props}/>
    {
      config.show_google_adv ?
      <GoogleAdv2
        {...advProps}
      />
      :null
    }
    <div className={classes.luckMain}>
    	<div className={classes.mainBlock}>
    		<div className={classes.dynamicTitle}><img src="images/dynamicIco.png" /><span><b>{i18n.t('common.dynamic')}</b></span>
        </div>
        <Lottery isDynamic={true} style={{marginTop:'20px'}}/>
    		<div className={classes.ad}>
    			<div className={classes.ad1}>
            {
              config.show_coinad_adv ?
              <center>
              	<div>
              		<iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=3FMLHO8FY55DT&b=DNXGITSPBPYNI" style={{overflow:"hidden",width:"300px",height:"250px"}} frameborder="0"></iframe>
              	</div>
              </center>
              :null
            }
            {
              config.show_moon_adv ?
              <center>
                  <div>
                    <iframe src="coinmedia.co/new_code_site13705.js" scrolling="no" frameborder="0" width="300px" height="250px"></iframe>
                  </div>
              </center>
              :null
            }
          </div>
    			<div className={classes.ad1}>
            {
              config.show_coinad_adv ?
              <center>
                <div>
                  <iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=3FMLHO8FY55DT&b=DNXGITSPBPYNI" style={{overflow:"hidden",width:"300px",height:"250px"}} frameborder="0"></iframe>
                </div>
              </center>
              :null
            }
            {
              config.show_moon_adv ?
              <center>
                  <div>
                    <iframe src="//coinmedia.co/new_code_site13705.js" scrolling="no" frameborder="0" width="300px" height="250px"></iframe>
                  </div>
              </center>
              :null
            }
          </div>
    		</div>
    	</div>
    </div>
    <div className={classes.adv}>
      {
        config.show_coinad_adv ?
        <center>
            <div>
              <iframe scrolling="no" src="//coinad.com/ads/show/show.php?a=3FMLHO8FY55DT&b=QP10TX6B6KV66" style={{overflow:"hidden",width:"728px",height:"90px"}} frameborder="0"></iframe>
            </div>
        </center>
        :null
      }
      {
        config.show_moon_adv ?
        <center>
            <div>
              <iframe src="//coinmedia.co/new_code_site13704.js" scrolling="no" frameborder="0" width="728px" height="120px"></iframe>
            </div>
        </center>
        :null
      }

    </div>
  </div>

)
  }
}

export default HomeView;
