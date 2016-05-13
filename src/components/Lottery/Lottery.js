import React from 'react'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import classes from '../Login/Login.scss'
import {i18n} from '../../util/i18n'
import { getBtcWebsocket , btcWebsocket } from '../../actions/Websocket'
import { connect } from 'react-redux'
import { Alert , Table } from 'antd'

type Props = {

};
export class Lottery extends React.Component {
  props: Props;

  componentWillMount (){
    // this._stream()
    const { getBtcWebsocket , btcWebsocket } = this.props;
    getBtcWebsocket()
    // btcWebsocket({name : 1})
  }

  render () {

    const { users_online , latest_incomes } = this.props.lottery;
    const { isDynamic } = this.props;

    const list = latest_incomes && latest_incomes.length && latest_incomes.map( (v, k) => {
        return (
          <li className={classes.dynamicBg} key={'lottery' + k }>
            <p>{v.address}</p>
            <p><font color="#509c1d">{v.amount}</font></p>
            <p><font color="#bbbaba">{v.time}</font></p>
          </li>
        )
      })

    return (
      <div className={classes.dynamic}>
        {
          isDynamic ?
          null :
          <div className={classes.dynamicTitle}><img src={dynamicIco.png} /><span><b>{i18n.t('common.dynamic')}</b></span></div>
        }
        <div className={classes.dynamicTab}>
          <p>{i18n.t('common.btcAddress')}</p>
          <p>{i18n.t('common.amount')}</p>
          <p>{i18n.t('common.time')}</p>
        </div>
        <div className={classes.clear}></div>
        <div className={classes.dynamicList}>
          <ul>
            {
              list ? list :
              <li>
                <Alert
                  message=""
                  description="暂未抽奖记录"
                  type="error"
                  showIcon
                />
              </li>
            }
          </ul>
        </div>
      </div>
    )
  }
}
// <li className={classes.dynamicBg}>
//   <p>12454545112@qq.com</p>
//   <p><font color="#509c1d">0.005btc</font></p>
//   <p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
// </li>
export default Lottery;

const mapActionCreators = {
  getBtcWebsocket,
  btcWebsocket
}

const mapStateToProps = (state)=>
({
  lottery : state.lottery,
})

export default connect(mapStateToProps, mapActionCreators)(Lottery)
