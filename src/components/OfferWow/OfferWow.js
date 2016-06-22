import React, { Component } from 'react';
export default class OfferWow extends Component {

  constructor(props){
    super(props)
  }

  renderBtcWow (){

    const { user , lu} = this.props;
    const url = `http://www.offer-wow.com/affiliate/wall/open.do?websiteid=2626&styleIndex=1&memberid=${user && user.id}`
    return(
      // <div style={{paddingLeft:'140px',zIndex:99999999999999999, position:'fixed'}}>
      //       <iframe src={url} style={{width:'720px',height:'560px'}} scrolling='auto' frameborder='no' border='0' allowTransparency='true'>
      //       </iframe>
      // </div>
      <div style={{paddingLeft:'140px',zIndex:999999, position:'fixed'}}>
        <div style={{position:'fixed',top:0,bottom:0,right:0,left:0,backgroundColor:'#000',opacity:0.6}}></div>
        <div style={{zIndex:99999999999999999,position:'relative'}}>
            <div style={{textAlign:'right'}}>
              <span
                style={{display:'inline-block',padding:'12px 25px',cursor:'pointer',backgroundColor: 'rgb(168, 5, 32)',borderTopLeftRadius: '12px',borderTopRightRadius: '12px',color:'#fff',fontSize:'16px'}}
                onClick={lu}
              >Close</span>
            </div>
            <iframe src={url} frameborder="1" width="728" height="560" scrolling="auto" >
            </iframe>
        </div>
      </div>
    )
  }

  renderMoonWow (){
    const { user , lu } = this.props;
    const url = `https://wall.superrewards.com/super/offers?h=plrmkzlptng.031981954300&hdpay=1&uid=${user && user.id}`
    return(
      <div style={{paddingLeft:'136px',zIndex:999999, position:'fixed'}}>
        <div style={{position:'fixed',top:0,bottom:0,right:0,left:0,backgroundColor:'#000',opacity:0.6}}></div>
        <div style={{backgroundColor:'#ccc',zIndex:99999999999999999,position:'relative'}}>
            <div style={{textAlign:'right'}}>
              <span
                style={{display:'inline-block',padding:'12px 25px',cursor:'pointer',backgroundColor:'rgb(0, 174, 239)',color:'#fff',fontSize:'16px'}}
                onClick={lu}
              >Close</span>
            </div>
            <iframe src={url} frameborder="1" width="728" height="560" scrolling="auto" >
            </iframe>
        </div>
      </div>
    )
  }

  render() {
    const { user , config} = this.props;
    return (
      <div>
        {
          config.show_btc_task ?
          this.renderBtcWow():
          this.renderMoonWow()
        }
      </div>
    );
  }
}
