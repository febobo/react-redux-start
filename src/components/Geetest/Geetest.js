import React from 'react'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import ad1 from '../../static/images/ad1.jpg'
import classes from './Geetest.scss'
import {i18n} from '../../util/i18n'
import { sendLottery } from '../../actions/Geetest'
import reactDom from 'react-dom'
import { connect } from 'react-redux'
import { Alert , Table ,message } from 'antd'
import geetest from 'geetest-proxy';
import moment from 'moment'
import request from 'superagent';
import store from 'store';
import URI from 'urijs';
import gs from './gs'
const v1 = 'https://staging.solebtc.com/api/v1';

type Props = {

};
export class Geetest extends React.Component {
  props: Props;

  componentWillMount (){

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
      return message.warning('请先拖动下方验证码进行验证', 3)
    }


    const { sendLottery } = this.props;
    // console.log('ok')
    const captchaObj = this.state.captchaObj.getValidate()

    const headers = {
      'X-Geetest-Challenge' : captchaObj.geetest_challenge,
      'X-Geetest-Validate' : captchaObj.geetest_validate,
      'X-Geetest-Seccode' : captchaObj.geetest_seccode,
      'Auth-Token' : store.get('auth_token'),
    }
    // captchaObj.onSuccess( () => {
    //   alert(1)
    // })
    sendLottery(headers);
    this.state.captchaObj.refresh();
    // captchaObj.refresh;
  }

  async getCaptcha() {
    let url = new URI(v1 + '/captchas');
    let data = await request.get(url.toString());

    initGeetest({
      gt: data.body && data.body.captcha_id,
      challenge : data.body && data.body.challenge,
      product : 'float',
    }, ::this.handlerPopup);

  }
  componentDidMount (){
    this.getCaptcha();

  }
  render () {
    return (
      <div className={classes.luck}>
      	<div className={classes.block}>
        <a href="#" onClick={::this.lottery} className={classes.luckBtn}><span>{i18n.t('common.lottery')}</span></a>
        <div ref="geetest"></div>
        </div>
      	<div className={classes.luckCode}  >
          <a href="#"><img src={ad1} /></a>
        </div>
      </div>
    )
  }
}

export default Geetest;

const mapActionCreators = {
  sendLottery
}

const mapStateToProps = (state)=>
({
  geetest : state.geetest
})

export default connect(mapStateToProps, mapActionCreators)(Geetest)