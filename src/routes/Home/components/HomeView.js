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
import BtcHomeTopAdv from '../../../components/Advs/BtcHomeTopAdv'
import AutoHomeTopLeftAdv from '../../../components/Advs/AutoHomeTopLeftAdv'
// import AutoHomeTopRightAdv from '../../../components/Advs/AutoHomeTopRightAdv'
import CoinadAdv from '../../../components/CoinadAdv'
import geetest from 'geetest-proxy';
import config from '../../../BaseConfig'


export class HomeView extends React.Component {

  renderAdvProps(advProps){
    const defaultProps =  {
      style : {display:"inline-block",width:"970px",height:"90px"},
      client : 'ca-pub-5722932343401905',
      slot : 1843492278,
      advBoxStyle : { paddingTop:"22px", textAlign : "center"}
    }
    return Object.assign({},defaultProps,advProps)
  }

  render (){
		const advProps = {
      style : {display:"inline-block",width:"300px",height:"250px"},
      client : 'ca-pub-5722932343401905',
      slot : '9366759071',
      // advBoxStyle : { paddingTop:"25px", textAlign : "center"}
    }
    return (

  <div>
    {
      config.show_home_top_adv ?
      <GoogleAdv4
        {...this.renderAdvProps({slot:3422043073})}
      />
      :null
    }
    {
      config.show_btc_home_top_adv ?
      <BtcHomeTopAdv
        {...this.renderAdvProps({slot:8465861479})}
      />
      :null
    }
    {
      config.show_auto_home_top_adv ?
      <div style={{width:'1000px',margin:'0 auto',overflow:'hidden',padding:'0 20px'}}>
        <div style={{float:'left'}}>
          <AutoHomeTopLeftAdv
            {...this.renderAdvProps({
              style : {display:"inline-block",width:"468px",height:"60px"},
              client : 'ca-pub-5722932343401905',
              slot : 3046293077,
              advBoxStyle : { paddingTop:"22px", textAlign : "center"}
            })}
          />
        </div>
        <div style={{float:'right',paddingTop : '22px'}}>
          <center>
            <div>
              <iframe scrolling="no" src="//coinad.com/ads/show/show.php?a=4XD7CSC96NFAP&b=3Y7FCLUKXK5ZR" style={{overflow:"hidden",width:"468px",height:"60px"}} frameborder="0"></iframe>
            </div>
          </center>
        </div>
      </div>
      :null
    }
    <Geetest {...this.props}/>
    {
      config.show_google_adv ?
      <GoogleAdv2
        {...this.renderAdvProps({
					slot:1843492278,
					advBoxStyle : { paddingTop:"25px", textAlign : "center" , width : "996px" , margin:"0 auto"}
				})}
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
            {/*
              config.show_coinad_adv ?
              <center>
              	<div>
              		<iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=4XD7CSC96NFAP&b=JQB17YW307U7Y" style={{overflow:"hidden",width:"300px",height:"250px"}} frameborder="0"></iframe>
              	</div>
              </center>
              :null
            */}
						{
              config.show_coinad_adv ?
							<GoogleAdv
				        {...advProps}
				      />
              :null
            }
            {
              config.show_auto_home_content_right_adv ?
              <center>
              	<div>
              		<iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=4XD7CSC96NFAP&b=JQB17YW307U7Y" style={{overflow:"hidden",width:"300px",height:"250px"}} frameborder="0"></iframe>
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
                  <iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=4XD7CSC96NFAP&b=JQB17YW307U7Y" style={{overflow:"hidden",width:"300px",height:"250px"}} frameborder="0"></iframe>
                </div>
              </center>
              :null
            }
            {
              config.show_auto_home_content_right_adv ?
              <center>
              	<div>
              		<iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=4XD7CSC96NFAP&b=JQB17YW307U7Y" style={{overflow:"hidden",width:"300px",height:"250px"}} frameborder="0"></iframe>
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
              <iframe scrolling="no" src="//coinad.com/ads/show/show.php?a=4XD7CSC96NFAP&b=CQE94BMJIJCKA" style={{overflow:"hidden",width:"728px",height:"90px"}} frameborder="0"></iframe>
            </div>
        </center>
        :null
      }
      {
        config.show_auto_home_content_right_adv ?
        <center>
          <div>
            <iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=4XD7CSC96NFAP&b=CQE94BMJIJCKA" style={{overflow:"hidden",width:"728px",height:"90px"}} frameborder="0"></iframe>
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
