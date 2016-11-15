import React, { Component } from 'react';
import classes from './offerWow.scss'
import config from '../../BaseConfig'
export default class OfferWow extends Component {

  constructor(props){
    super(props)
		// this.changeType = this.changeType.bind(this);
		this.state = {};
  }

	shouldComponentUpdate (nextProps ,nextState){
			if(nextProps.type === this.props.type &&
				nextState === this.state
			){
				return false
			}
			return true
	}

  render() {
    const { user , config , showSlider, lu} = this.props;
		const offsetL = (document.body.clientWidth-900)/2 + 900 + 'px';
    const url = `http://btcwall.co?publisher_id=1&site_id=1`
    return (
      <div>
      <div style={{paddingLeft:'50px',zIndex:999999, position:'fixed'}}>
         <div style={{position:'fixed',top:0,bottom:0,right:0,left:0,backgroundColor:'#000',opacity:0.6}}></div>
         <div style={{zIndex:99999999999999999,position:'relative'}}>
             <div style={{textAlign:'right'}}>
               <span
                 style={{display:'inline-block',padding:'12px 25px',cursor:'pointer',backgroundColor: 'rgb(168, 5, 32)',borderTopLeftRadius: '12px',borderTopRightRadius: '12px',color:'#fff',fontSize:'16px'}}
                 onClick={lu}
               >Close</span>
             </div>
             <iframe src={url} frameborder="1" width="900" height="560" scrolling="auto" >
             </iframe>
         </div>
       </div>
      </div>
    );
  }
}
