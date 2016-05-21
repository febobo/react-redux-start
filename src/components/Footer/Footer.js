import React from 'react'

import classes from './Footer.scss'
import footerIco from '../../static/images/footerIco.png'
import footerLogo from '../../static/images/footerLogo.png'
import {i18n} from '../../util/i18n'
import moment from 'moment'
type Props = {

};
export class Footer extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.footerBg}>
      	<div className={classes.footer}>
      		<div className={classes.footerInfo}>
      			<p><img src={footerIco} /><span>{i18n.t('footer.server_time')}：{moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss") }</span></p>
      			<em>{i18n.t('footer.copyright')}
              <a href="http://help.solebtc.com/category/advertise/">Advertise&nbsp;&nbsp;</a>
              <a href="http://help.solebtc.com/category/news/">News</a>
            </em>
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
