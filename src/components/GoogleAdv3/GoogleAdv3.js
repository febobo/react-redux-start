import React, { Component } from 'react';
export default class GoogleAdv3 extends Component {

  componentDidMount (){
      // console.log(adsbygoogle);
      // (adsbygoogle = window.adsbygoogle || []).push({});
      // console.log('render2222')
      const script2 = document.createElement("script");
      script2.id="adv_login";
      script2.async = true;
      document.body.appendChild(script2);
      document.getElementById('adv_login').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }
  componentWillUnmount() {
    // IMPORTANT! Allow us to push new slot on other pages
    document.body.removeChild(document.getElementById('adv_login'));
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.length = 0;
    console.log('unmout')
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
        <ins
            className="adsbygoogle"
            style={style}
            data-ad-client={client}
            data-ad-slot={slot}
        />
      </div>
    );
  }
}
