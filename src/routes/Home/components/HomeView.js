import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import Adv from '../../../components/Adv'
import code from '../../../static/images/code.jpg'
import ad1 from '../../../static/images/ad1.jpg'
import ad2 from '../../../static/images/ad2.jpg'
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
    	<div className={classes.luckBtn}><a href="#"><span>抽 奖</span></a></div>
    </div>
    <Adv />
    <div className={classes.luckMain}>
    	<div className={classes.mainBlock}>
    		<div className={classes.dynamicTitle}><img src="images/dynamicIco.png" /><span><b>抽奖动态</b></span>
        </div>
    		<div className={classes.dynamic} >
    			<div className={classes.dynamicTab}>
    				<p>BTC地址</p>
    				<p>金额(satoshi)</p>
    				<p>时间</p>
    			</div>
    			<div className={classes.clear}></div>
    			<div className={classes.dynamicList} id="listScroll" >
    				<ul>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
              <li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li className={classes.dynamicBg}>
    						<p>12454545112@qq.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>
    					<li>
    						<p>lishimin912264@163.com</p>
    						<p><font color="#509c1d">0.005btc</font></p>
    						<p><font color="#bbbaba">2015-02-15 05:26:34</font></p>
    					</li>

    				</ul>
    			</div>
    		</div>
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
