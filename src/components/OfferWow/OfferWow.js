import React, { Component } from 'react';
export default class OfferWow extends Component {

  renderBtcWow (){
    const { user } = this.props;
    const url = `http://www.offer-wow.com/affiliate/wall/open.do?websiteid=2626&styleIndex=1&memberid=${user && user.id}`
    return(
      <div style={{paddingLeft:'140px',zIndex:99999999999999999, position:'absolute'}}>
            <iframe src={url} style={{width:'720px',height:'560px'}} scrolling='no' frameborder='no' border='0' allowTransparency='true'>
            </iframe>
      </div>
    )
  }

  renderMoonWow (){
    const { user } = this.props;
    const url = `https://wall.superrewards.com/super/offers?h=plrmkzlptng.031981954300&hdpay=1&uid=${user && user.id}`
    return(
      <div style={{paddingLeft:'136px',zIndex:99999999999999999, position:'absolute'}}>
        <div style={{backgroundColor:'#ccc'}}>
            <iframe src={url} frameborder="0" width="728" height="560" scrolling="no" >
            </iframe>
        </div>
      </div>
    )
  }

  render() {
    const { user , config} = this.props;
     console.log(user , config)
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
