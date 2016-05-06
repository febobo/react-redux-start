import React from 'react'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import classes from '../Login/Login.scss'
import {i18n} from '../../util/i18n'

type Props = {

};
export class About extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.aboutUs}>
        <div className={classes.aboutTitle}><img src={aboutIco.png} /><span><b>{i18n.t('about.title')}</b></span></div>
        <div className={classes.clear}></div>
        <div className={classes.aboutText}>
          <p>
            {i18n.t('about.about')}
          </p>
        </div>
      </div>
    )
  }
}

export default About
