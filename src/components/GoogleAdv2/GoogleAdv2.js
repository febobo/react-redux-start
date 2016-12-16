import React, { Component } from 'react';
export default class GoogleAdv2 extends Component {

  componentDidMount (){
      // console.log(adsbygoogle);
      // (adsbygoogle = window.adsbygoogle || []).push({});
      // const script2 = document.createElement("script");
      // script2.id="adv_home";
      // script2.async = true;
      // script2.src = 'https://adbit.co/js/show_ads.js';
      // document.body.appendChild(script2);
      // document.getElementById('adv_home').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }

  componentWillUnmount() {
    // IMPORTANT! Allow us to push new slot on other pages
    // document.body.removeChild(document.getElementById('adv_home'));
    // window.adsbygoogle = window.adsbygoogle || [];
    // window.adsbygoogle.length = 0;
  }
  render() {
    // console.log(this)
    // console.log('render111')
    const { client , slot , style , advBoxStyle } = this.props;
    return (
      <div
        id="application"
        style={advBoxStyle}
      >
			<center>
			<div>
				<iframe scrolling="no" src="https://coinad.com/ads/show/show.php?a=3FMLHO8FY55DT&b=QAJCZO2RSCH65" style={{overflow:"hidden",width:"468px",height:"60px"}} frameborder="0"></iframe>
			</div>
			</center>
      </div>
    );
  }
}

				// <div class="adbit-display-ad" data-adspace-id="56F350EFCA"></div>
// <ins
// 		className="adsbygoogle"
// 		style={style}
// 		data-ad-client={client}
// 		data-ad-slot={slot}
// />
