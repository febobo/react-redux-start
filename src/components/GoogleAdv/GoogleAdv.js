import React, { Component } from 'react';
export default class GoogleAdv extends Component {

  componentDidMount (){
      const script2 = document.createElement("script");
      script2.id="adv_register";
      script2.async = true;
      document.body.appendChild(script2);
      document.getElementById('adv_register').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }
  componentWillUnmount() {
    // IMPORTANT! Allow us to push new slot on other pages
    document.body.removeChild(document.getElementById('adv_register'));
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.length = 0;
  }

  render() {
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
