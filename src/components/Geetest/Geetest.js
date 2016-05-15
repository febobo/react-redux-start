import React from 'react'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import classes from '../Login/Login.scss'
import {i18n} from '../../util/i18n'
import { getCaptcha } from '../../actions/Geetest'
import reactDom from 'react-dom'
import { connect } from 'react-redux'
import { Alert , Table } from 'antd'
import geetest from 'geetest-proxy';
import moment from 'moment'
import request from 'superagent';
import URI from 'urijs';
import gs from './gs'
console.log(initGeetest)
const v1 = 'https://staging.solebtc.com/api/v1';

type Props = {

};
export class Geetest extends React.Component {
  props: Props;

  componentWillMount (){

  }

  async getCaptcha() {
    let url = new URI(v1 + '/captchas');
    let data = await request.get(url.toString());

    let captcha = geetest(reactDom.findDOMNode(this.refs.geetest), {
      gt: data.body && data.body.captcha_id,
      challenge : data.body && data.body.challenge,
      product : 'float',
    });

    // console.log(captcha.getValidate())
    // captcha.on('success', function (info) {
    //   alert('[FOO] success');
    // });
    //
    // captcha.on('MESSAGE', function (info) {
    //   console.log('[FOO] MESSAGE: ', info);
    // });
  }
  componentDidMount (){
    this.getCaptcha()
  }
  render () {

    console.log(this)

    return (
      <div className={classes.dynamic} >
        <div ref="geetest"></div>
      </div>
    )
  }
}

export default Geetest;

const mapActionCreators = {
  getCaptcha
}

const mapStateToProps = (state)=>
({
  geetest : state.geetest
})

export default connect(mapStateToProps, mapActionCreators)(Geetest)
