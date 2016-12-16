import React, { Component } from 'react';
export default class BtcHomeTopAdv extends Component {

  componentDidMount (){
      const script4 = document.createElement("script");
      script4.id="btc_top_home_adv";
      script4.async = true;
			script4.src = 'https://ad.bitmedia.io/js/adbybm.js/57e11db97056922c667b8360'
      document.body.appendChild(script4);
      // document.getElementById('btc_top_home_adv').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }
  componentWillUnmount() {
    // IMPORTANT! Allow us to push new slot on other pages
    document.body.removeChild(document.getElementById('btc_top_home_adv'));
    // window.adsbygoogle = window.adsbygoogle || [];
    // window.adsbygoogle.length = 0;
  }

  render() {
    const { client , slot , style , advBoxStyle } = this.props;
    return (
      <div
        id="application"
        style={advBoxStyle}
      >

<ins className="bmadblock-57e11db97056922c667b8360" style={{display:"inline-block",width:"728px",height:"90px"}}></ins>

      </div>
    );
  }
}

// <ins
// 		className="adsbygoogle"
// 		style={style}
// 		data-ad-client={client}
// 		data-ad-slot={slot}
// />
