import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './History.scss'
import Adv from '../../../components/Adv'

export const History = () => (
  <div className={classes.history}>
  	<div className={classes.tableTitle}>
  		<ul>
  			<li>交易号</li>
  			<li>类型</li>
  			<li>金额（satoshi)</li>
  			<li className={classes.noBorder}>交易号</li>
  		</ul>
  	</div>
  	<div className={classes.clear}></div>
  	<div className={classes.tableList}>
  		<ul>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul className={classes.tableBg}>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul className={classes.tableBg}>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul className={classes.tableBg}>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul className={classes.tableBg}>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#d16700">待定</font></li>
  		</ul>
  		<ul className={classes.tableBg}>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  		<ul>
  			<li>No2016022901261452</li>
  			<li>抽奖</li>
  			<li><font color="#509c1d">+3000</font></li>
  			<li className={classes.noBorder}><font color="#0a6ba3">完成</font></li>
  		</ul>
  	</div>
  </div>
)

export default History;


// <div>
//   <h4>Welcome!</h4>
//   <img
//     alt='This is a duck, because Redux!'
//     className={classes.duck}
//     src={DuckImage} />
// </div>
