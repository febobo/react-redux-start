import React from 'react'
import GoogleAd from 'react-google-ad'

type Props = {

};
export class GoogleAdv extends React.Component {
  props: Props;

  componentDidMount (){
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render () {
    const style = 'display:inline-block;width:970px;height:90px';
    return (
        <ins
          className="adsbygoogle"
          style={{display:"inline-block";width:"970px";height:"90px"}}
          data-ad-client="ca-pub-5722932343401905"
          data-ad-slot={7890025877}
          />
    )
  }
}

export default GoogleAdv
