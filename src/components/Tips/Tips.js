import React from 'react'
import classes from './Tips.scss'
import light from '../../static/images/light.png'

type Props = {

};
export class Tips extends React.Component {
  props: Props;

  render () {
    // console.log(this.props)
    const { tips } = this.props;
    return (
      <div className={classes.tips}>
        <div className={classes.tipsBg}></div>
        <div className={classes.chestOpen}></div>
        <div className={classes.text}>
          恭喜！成功获得<br></br>{tips.user_lattery.amount} BTC！
        </div>
      </div>
    )
  }
}

export default Tips
