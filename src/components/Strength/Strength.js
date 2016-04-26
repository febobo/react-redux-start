import React from 'react'

import classes from './Strength.scss'
import ourIco from '../../static/images/ourIco.png'
import ourImg from '../../static/images/ourImg.png'

type Props = {

};
export class Strength extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.ourBg}>
      	<div className={classes.ourAdvantages}>
      		<div className={classes.aboutTitle}><img src={ourIco} /><span><b>我们的优势：</b></span></div>
      		<div className={classes.clear}></div>
      		<div className={classes.ourImg}><img src={ourImg} /></div>
      		<div className={classes.ourList}>
      			<ul>
      				<li>Get a huge Bitcoin bonus <br>< /br>every 15 minutes</li>
      				<li>.Allowed to register as many<br>< /br> accounts as you want</li>
      				<li>Auto-payouts every day</li>
      				<li>Do simple tasks to get<br>< /br>more Bitcoins</li>
      			</ul>
      		</div>
      	</div>
      </div>
    )
  }
}

export default Strength
