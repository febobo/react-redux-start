import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import {i18n} from '../../../util/i18n'
import Adv from '../../../components/Adv'
import code from '../../../static/images/code.jpg'
import ad1 from '../../../static/images/ad1.jpg'
import ad2 from '../../../static/images/ad2.jpg'
import Lottery from '../../../components/Lottery'
// export const HomeView = () => (
export class HomeView extends React.Component {

  componentDidMount (){
    // let warp = document.getElementById('listScroll');
    // setInterval( () =>{
    //   if(warp.scrollTop >= 105){
    //     warp.scrollTop =0;
    //   }else {
    //     warp.scrollTop ++ ;
    //   }
    // },100)
  }
  render (){
    return (

  <div>
    <div className={classes.luck}>
    	<div className={classes.luckCode}><img src={code} /></div>
    	<div className={classes.luckBtn}><a href="#"><span>{i18n.t('common.lottery')}</span></a></div>
    </div>
    <Adv />
    <div className={classes.luckMain}>
    	<div className={classes.mainBlock}>
    		<div className={classes.dynamicTitle}><img src="images/dynamicIco.png" /><span><b>{i18n.t('common.dynamic')}</b></span>
        </div>
        <Lottery isDynamic={true}/>
    		<div className={classes.ad}>
    			<div className={classes.ad1}><a href="#"><img src={ad1} /></a></div>
    			<div className={classes.ad1}><a href="#"><img src={ad2} /></a></div>
    		</div>
    	</div>
    </div>
    <Adv />
  </div>

)
  }
}
// )

export default HomeView;


// <div>
//   <h4>Welcome!</h4>
//   <img
//     alt='This is a duck, because Redux!'
//     className={classes.duck}
//     src={DuckImage} />
// </div>
