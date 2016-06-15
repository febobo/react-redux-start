import React, { Component } from 'react';
export default class OfferWow extends Component {

  render() {
    const { user } = this.props;
    // console.log(user)
    const url = `http://www.offer-wow.com/affiliate/wall/open.do?websiteid=2626&styleIndex=1&memberid=${user && user.id}`
    return (
      <div style={{paddingLeft:'140px',zIndex:99999999999999999, position:'absolute'}}>
      <iframe src={url} style={{width:'720px',height:'560px'}} scrolling='no' frameborder='no' border='0' allowTransparency='true'>
      </iframe>
      </div>
    );
  }
}
