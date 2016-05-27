import React from 'react'
import classes from './Account.scss'
import accountIco1 from '../../static/images/accountIco1.png'
import accountIco2 from '../../static/images/accountIco2.png'
import accountIco3 from '../../static/images/accountIco3.png'
import {i18n} from '../../util/i18n'
import ad6 from '../../static/images/ad6.gif'
import ad7 from '../../static/images/ad7.gif'
import ad8 from '../../static/images/ad8.gif'
import ad9 from '../../static/images/ad9.gif'
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
      			<img src={ad6} />
      			<span>http://image.baidu.com/search/index?tn=baiduimage&amp;ipn=r&amp;ct=201326592&amp;cl=2&amp;lm=-1&amp;st=-1&amp;fm=index&amp;fr=&amp;sf=1&amp;fmq=&amp;pv=&amp;ic=0&amp;
      	&amp;se=1&amp;showtab=0&amp;fb=0&amp;width=&amp;height=&amp;face=0&amp;istype=2&amp;ie=utf-8&amp;word=Bits&amp;oq=Bits&amp;rsp=-1</span>
      			<em>200*200</em>
      			<img src={ad7} />
      			<span>http://image.baidu.com/search/index?tn=baiduimage&amp;ipn=r&amp;ct=201326592&amp;cl=2&amp;lm=-1&amp;st=-1&amp;fm=index&amp;fr=&amp;sf=1&amp;fmq=&amp;pv=&amp;ic=0&amp;
      	&amp;se=1&amp;showtab=0&amp;fb=0&amp;width=&amp;height=&amp;face=0&amp;istype=2&amp;ie=utf-8&amp;word=Bits&amp;oq=Bits&amp;rsp=-1</span>
      			<em>468*60</em>
      			<img src={ad8} />
      				<span>http://image.baidu.com/search/index?tn=baiduimage&amp;ipn=r&amp;ct=201326592&amp;cl=2&amp;lm=-1&amp;st=-1&amp;fm=index&amp;fr=&amp;sf=1&amp;fmq=&amp;pv=&amp;ic=0&amp;
      	&amp;se=1&amp;showtab=0&amp;fb=0&amp;width=&amp;height=&amp;face=0&amp;istype=2&amp;ie=utf-8&amp;word=Bits&amp;oq=Bits&amp;rsp=-1</span>
      			<em>728*90</em>
      			<img src={ad9} />
      			<span>http://image.baidu.com/search/index?tn=baiduimage&amp;ipn=r&amp;ct=201326592&amp;cl=2&amp;lm=-1&amp;st=-1&amp;fm=index&amp;fr=&amp;sf=1&amp;fmq=&amp;pv=&amp;ic=0&amp;
      	&amp;se=1&amp;showtab=0&amp;fb=0&amp;width=&amp;height=&amp;face=0&amp;istype=2&amp;ie=utf-8&amp;word=Bits&amp;oq=Bits&amp;rsp=-1</span>
      		</div>
      	</div>
      </div>
    )
  }
}

export default Account
