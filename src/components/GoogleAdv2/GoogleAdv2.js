import React, { Component } from 'react';
export default class GoogleAdv2 extends Component {

  componentDidMount (){
      // console.log(adsbygoogle);
      // (adsbygoogle = window.adsbygoogle || []).push({});
      const script2 = document.createElement("script");
      script2.id="adv_home";
      script2.async = true;
      document.body.appendChild(script2);
      document.getElementById('adv_home').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }

  componentWillUnmount() {
    // IMPORTANT! Allow us to push new slot on other pages
    document.body.removeChild(document.getElementById('adv_home'));
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.length = 0;
  }
  render() {
    // console.log(this)
    console.log('render111')
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
