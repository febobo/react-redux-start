import React from 'react'
import classes from './Account.scss'
import accountIco1 from '../../static/images/accountIco1.png'
import accountIco2 from '../../static/images/accountIco2.png'
import accountIco3 from '../../static/images/accountIco3.png'
import {i18n} from '../../util/i18n'
import config from '../../BaseConfig'
type Props = {

};
export class Account extends React.Component {
  props: Props;

  constructor (props){
    super(props);
  }

  componentWillMount (){
  }
  render () {
    const { user , host} = this.props;
    const hosts = 'https://' + window.location.host;
    const ad6_link = `<a href="${host}" target="_blank"><img src="${hosts}${config.refererObj.size_200}"></a>`;
    const ad7_link = '<a href="'+host+'" target="_blank"><img src="'+ hosts + config.refererObj.size_200 + '"></a>';
    const ad8_link = '<a href="'+host+'" target="_blank"><img src="'+ hosts + config.refererObj.size_200 + '"></a>';
    const ad9_link = '<a href="'+host+'" target="_blank"><img src="'+ hosts + config.refererObj.size_200 + '"></a>';


    // console.log(str)
    // console.log(location.host)
    return (
      <div className={classes.account}>
      	<div className={classes.accountList}>
      		<p className={classes.accountImg}><img src={accountIco1} /></p>
      		<p className={classes.accountTitle}>
            {i18n.t('navbar.balance')}：<span>{user && user.balance}{i18n.t('message.unit')}</span> &nbsp;&nbsp;&nbsp;
            {i18n.t('message.Total_commission')}：<span>{user && user.total_income_from_referees}{i18n.t('message.unit')}</span>
          </p>
      		<div className={classes.clear}></div>

      		<p className={classes.accountImg}><img src={accountIco2} /></p>
      		<div className={classes.accountRight}>
      			<p className={classes.accountTitle}>{i18n.t('account.link')}：</p><br></br>
      			<span>{host}</span>
      		</div>

      		<div className={classes.clear}></div>
      		<p className={classes.accountImg}><img src={accountIco3} /></p>
      		<div className={classes.accountRight}>
      			<p className={classes.accountTitle}>{i18n.t('account.banners')}</p>
      			<em>200*200</em>
      			<img src={config.refererObj.size_200} />
      			<span>{ad6_link}</span>
      			<em>300*300</em>
      			<img src={config.refererObj.size_300} />
      			<span>{ad7_link}</span>
      			<em>468*60</em>
      			<img src={config.refererObj.size_468} />
      				<span>{ad8_link}</span>
      			<em>728*90</em>
      			<img src={config.refererObj.size_728} />
      			<span>{ad9_link}</span>
      		</div>
      	</div>
      </div>
    )
  }
}

export default Account
