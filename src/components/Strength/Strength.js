import React from 'react'
import {i18n} from '../../util/i18n'
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
      		<div className={classes.aboutTitle}><img src={ourIco} /><span><b>{i18n.t('advantage.header')}：</b></span></div>
      		<div className={classes.clear}></div>
      		<div className={classes.ourImg}><img src={ourImg} /></div>
      		<div className={classes.ourList}>
      			<ul>
      				<li>{i18n.t('advantage.first_adv')}</li>
      				<li>{i18n.t('advantage.second_adv')}</li>
      				<li>{i18n.t('advantage.third_adv')}</li>
      				<li>{i18n.t('advantage.fourth_adv')}</li>
      			</ul>
      		</div>
      	</div>
      </div>
    )
  }
}

export default Strength
