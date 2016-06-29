import React, { Component } from 'react';
export default class AutoHomeTopLeftAdv extends Component {

  componentDidMount (){
      const script4 = document.createElement("script");
      script4.id="AutoHomeTopLeftAdv";
      script4.async = true;
      document.body.appendChild(script4);
      document.getElementById('AutoHomeTopLeftAdv').innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
  }
  componentWillUnmount() {
    // IMPORTANT! Allow us to push new slot on other pages
    document.body.removeChild(document.getElementById('AutoHomeTopLeftAdv'));
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
