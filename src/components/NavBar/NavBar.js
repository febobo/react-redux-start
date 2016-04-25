import React from 'react'
import classes from './NavBar.scss'
import navIco2 from '../../static/images/navIco2.png'
import navIco3 from '../../static/images/navIco3.png'
import navIco4 from '../../static/images/navIco4.png'
import navIco5 from '../../static/images/navIco5.png'
import navIco1 from '../../static/images/navIco1.png'

import btcIco from '../../static/images/btcIco.png'
import moneyIco from '../../static/images/moneyIco.png'
type Props = {

};
export class NavBar extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.nav}>
      	<ul>
      		<li className={classes.navCur}><a href="#"><img src={navIco1} /><span>抽奖</span></a></li>
      		<li><a href="#"><img src={navIco1} /><span>视频</span></a></li>
      		<li><a href="#"><img src={navIco1} /><span>历史</span></a></li>
      		<li><a href="#"><img src={navIco1} /><span>下线</span></a></li>
      		<li><a href="#"><img src={navIco1} /><span>账户</span></a></li>
      	</ul>
      	<div className={classes.clear}></div>
      	<p>As long as you have over 0.001BTC, the system will pay to your BTC address automatically at 0:00(UTC) every day.</p>
      	<div className={classes.btc}>
      		<img src={btcIco} />
      		<strong>BTC Adress：</strong>
      		<span>YILANGXIAOLONGSHIHAORENOI1234567</span>
      		<em>（已认证）</em>
      	</div>
      	<div className={classes.ibtcIco}>
      		<img src={moneyIco} />
      		<strong>余额：</strong>
      		<span>100000000Bits</span>
      	</div>
      </div>
    )
  }
}

export default NavBar
