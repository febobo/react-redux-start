import React from 'react'
import {Link} from 'react-router'
import { Menu, Dropdown , Icon} from 'antd'
import store from 'store';
import {i18n} from '../../util/i18n'
import classes from './NavBar.scss'
import navIco2 from '../../static/images/navIco2.png'
import navIco3 from '../../static/images/navIco3.png'
import navIco4 from '../../static/images/navIco4.png'
import navIco5 from '../../static/images/navIco5.png'
import navIco1 from '../../static/images/navIco1.png'

import btcIco from '../../static/images/btcIco.png'
import moneyIco from '../../static/images/moneyIco.png'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" href="http://www.baidu.com/">go to baidu</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="http://www.baidu.com/">go to baidu</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="http://www.baidu.com/">go to baidu</a>
    </Menu.Item>
  </Menu>
);

type Props = {

};

export class NavBar extends React.Component {
  props: Props;

  componentWillMount (){
    const { history } = this.props;
    let user = store.get('user');
    if(!user){
      history.pushState(null, '/login');
    }
  }


  render () {
    const { data } = this.props;
    return (
      <div className={classes.nav}>
      	<ul>
      		<li>
            <Link to='/' activeClassName={classes.navCur}>
              <img src={navIco1} />
              {i18n.t('common.lottery')}
            </Link>
          </li>
      		<li>
            <Link to='/account' activeClassName={classes.navCur}>
              <img src={navIco1} />
              {i18n.t('common.account')}
            </Link>
          </li>
      		<li>
            <Link to='/history' activeClassName={classes.navCur}>
              <img src={navIco1} />
              {i18n.t('common.history')}
            </Link>
          </li>
      		<li>
            <Link to='/offline' activeClassName={classes.navCur}>
              <img src={navIco1} />
              {i18n.t('common.offline')}
            </Link>
          </li>
      		<li>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                <img src={navIco1} />
                {i18n.t('common.other')}
                <Icon type="down" />
              </a>
            </Dropdown>
          </li>

      	</ul>
      	<div className={classes.clear}></div>
      	<p>As long as you have over 0.001BTC, the system will pay to your BTC address automatically at 0:00(UTC) every day.</p>
      	<div className={classes.btc}>
      		<img src={btcIco} />
      		<strong>{i18n.t('common.btcAddress')}：</strong>
          {
            data && data.address ?
            <span>{data.address}</span> :
            null
          }
      		<em>（{i18n.t('navbar.unverified')}）</em>
      	</div>
      	<div className={classes.ibtcIco}>
      		<img src={moneyIco} />
      		<strong>{i18n.t('navbar.balance')}：</strong>
          {
            data && data.balance ?
            <span>{data.balance}Bits</span> :
            0
          }
      	</div>
      </div>
    )
  }
}
// <li>
//   <img src={navIco1} />
//   <a><span>其它</span></a>
//   <Dropdown overlay={menu}>
//     <a className="ant-dropdown-link" href="#">
//       其它 <Icon type="down" />
//     </a>
//   </Dropdown>
//   <a><span>其它</span></a>
// </li>
export default NavBar
