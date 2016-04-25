import React from 'react'

import classes from './Footer.scss'
import footerIco from '../../static/images/footerIco.png'
import footerLogo from '../../static/images/footerLogo.png'

type Props = {

};
export class Footer extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.footerBg}>
      	<div className={classes.footer}>
      		<div className={classes.footerInfo}>
      			<p><img src={footerIco} /><span>服务器时间：2016-02-27 15:35:23</span></p>
      			<em>Copyright © 2016 Solebtc.com All Rights Reserved　版权所有·Solebtc</em>
      		</div>
      		<div className={classes.footerLogo}>
      			<img src={footerLogo} />
      		</div>
      	</div>
      </div>
    )
  }
}

export default Footer
