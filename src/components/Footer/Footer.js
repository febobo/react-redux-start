import React from 'react'

import classes from './Footer.scss'
import footerIco from '../../static/images/footerIco.png'
import footerLogo from '../../static/images/footerLogo.png'
import {i18n} from '../../util/i18n'
type Props = {

};
export class Footer extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.footerBg}>
      	<div className={classes.footer}>
      		<div className={classes.footerInfo}>
      			<p><img src={footerIco} /><span>{i18n.t('footer.server_time')}：2016-02-27 15:35:23</span></p>
      			<em>{i18n.t('footer.copyright')}</em>
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
