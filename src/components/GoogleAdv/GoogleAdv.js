import React, { Component } from 'react';
export default class GoogleAdv extends Component {

  componentDidMount (){
      const script2 = document.createElement("script");
      script2.id="adv_register";
			script2.src = '//ad.bitmedia.io/js/adbybm.js/57e0e0337056922c667b77a3'
      script2.async = true;
			// console.log(document.getElementById('s_application'))
			// document.getElementById('s_application').innerHTML = script2
      document.body.appendChild(script2);
      // document.getElementById('adv_register').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }
  componentWillUnmount() {
    // IMPORTANT! Allow us to push new slot on other pages
    document.body.removeChild(document.getElementById('adv_register'));
    // window.adsbygoogle = window.adsbygoogle || [];
    // window.adsbygoogle.length = 0;
  }

  render() {
    const { client , slot , style , advBoxStyle } = this.props;
    return (
      <div
        id="s_application"
        style={advBoxStyle}
      >
			<ins className="bmadblock-57e0e0337056922c667b77a3" style={style}></ins>

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
