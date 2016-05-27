import React from 'react'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import ad1 from '../../static/images/ad1.jpg'
import classes from './Geetest.scss'
import {i18n} from '../../util/i18n'
import { sendLottery , countDown , setDely} from '../../actions/Geetest'
import { getUser } from '../../routes/Login/modules/login'
import { getBtcWebsocket } from '../../actions/Websocket'
import reactDom from 'react-dom'
import { connect } from 'react-redux'
import { Alert , Table ,message } from 'antd'
import geetest from 'geetest-proxy';
import CountDown from '../CountDown';
import moment from 'moment'
import request from 'superagent';
import store from 'store';
import URI from 'urijs';
import gs from './gs'
// const v1 = 'https://staging.solebtc.com/api/v1';
const v1 ='https://solebtc.com/api/v1'

type Props = {

};
export class Geetest extends React.Component {
  props: Props;

  componentWillMount (){
    const { countDown , getUser  } = this.props;
    getUser( () => {
      // console.log(Math.ceil(new Date().getTime() /1000) - new Date(store.get('user').rewarded_at).getTime() / 1000)
      let currentTime = Math.ceil(new Date().getTime() /1000)
      let leftTime = currentTime - new Date(store.get('user').rewarded_at).getTime() / 1000;
      let count = store.get('user').reward_interval - leftTime;
      console.log(store.get('user') , count)
      // > 0才开启倒计时 ，否则 关掉定时器
      if(count > 0){
        countDown(count);
      }else{
        countDown(false)
      }
    });
  }

  state = {}

  handlerPopup (captchaObj){
    this.setState({
      captchaObj : captchaObj
    });
    captchaObj.appendTo(reactDom.findDOMNode(this.refs.geetest))
    captchaObj.onSuccess( () => {
      let validate = captchaObj.getValidate();
    })
  }

  lottery (){
    if(this.state.captchaObj && !this.state.captchaObj.getValidate()){
      return message.warning(i18n.t('message.Solve_Captcha'), 3)
    }

    const { sendLottery , count , countDown , setDely} = this.props;
    const captchaObj = this.state.captchaObj.getValidate()
    const headers = {
      'X-Geetest-Challenge' : captchaObj.geetest_challenge,
      'X-Geetest-Validate' : captchaObj.geetest_validate,
      'X-Geetest-Seccode' : captchaObj.geetest_seccode,
      'Auth-Token' : store.get('auth_token'),
    }

    sendLottery(headers);
    setDely(4)
    this.state.captchaObj.refresh();
    // 每一次抽奖存一次当前时间
    store.set('prev_time',Math.ceil(new Date().getTime() / 1000))
    countDown(store.get('user').reward_interval);
  }

  waiting (){
    return message.warning(i18n.t('message.Await_Captcha'), 3)
  }
  async getCaptcha() {
    let url = new URI(v1 + '/captchas');
    let data = await request.get(url.toString());

    initGeetest({
      gt: data.body && data.body.captcha_id,
      challenge : data.body && data.body.challenge,
      product : 'float',
      lang : store.get('language') || 'en'
    }, ::this.handlerPopup);

  }
  componentDidMount (){
    this.getCaptcha();

  }
  render () {
    // console.log(this.props)
    const { time , tipsDley} = this.props.geetest;
    const { tips } = this.props;
    console.log(this , tips,222)
    return (
      <div className={classes.wrap}>
        {
          tips.user_lattery && tips.user_lattery.amount && tipsDley ?
          <div className={classes.tips}>{i18n.t('message.Bonus_display')}{tips.user_lattery.amount}{i18n.t('message.unit')}！</div> :
          null
        }
        <div className={classes.luck}>
        	<div className={classes.block}>
          {
            time && time.count ?
              <a className={classes.luckBtn2}
                onClick={::this.waiting}
              >
                <CountDown
                  {...this.props}
                />
              </a> :
              <a href="#" onClick={::this.lottery} className={classes.luckBtn}><span>{i18n.t('common.lottery')}</span></a>
          }

          <div ref="geetest"></div>
          </div>
        	<div className={classes.luckCode}  >
            <a href="#"><img src={ad1} /></a>
          </div>
        </div>
      </div>
    )
  }
}
// <a href="#" onClick={::this.lottery} className={classes.luckBtn}><span>{i18n.t('common.lottery')}</span></a>

export default Geetest;

const mapActionCreators = {
  sendLottery,
  countDown,
  getUser,
  setDely
}

const mapStateToProps = (state)=>
({
  geetest : state.geetest,
  tips : state.lottery
})

export default connect(mapStateToProps, mapActionCreators)(Geetest)
