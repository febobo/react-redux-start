import React, { Component } from 'react';
export default class OfferWow extends Component {

  constructor(props){
    super(props)
  }

  renderBtcWow (){

    const { user , lu} = this.props;
    const url = `https://www.offer-wow.com/affiliate/wall/open.do?websiteid=2626&styleIndex=1&memberid=${user && user.id}`
    return(
      // <div style={{paddingLeft:'140px',zIndex:99999999999999999, position:'fixed'}}>
      //       <iframe src={url} style={{width:'720px',height:'560px'}} scrolling='auto' frameborder='no' border='0' allowTransparency='true'>
      //       </iframe>
      // </div>
      <div style={{paddingLeft:'140px',zIndex:999999, position:'fixed'}}>
        <div style={{position:'fixed',top:0,bottom:0,right:0,left:0,backgroundColor:'#000',opacity:0.6}}></div>
        <div style={{zIndex:99999999999999999,position:'relative'}}>
            <div style={{textAlign:'right'}}>
              <span
                style={{display:'inline-block',padding:'12px 25px',cursor:'pointer',backgroundColor: 'rgb(168, 5, 32)',borderTopLeftRadius: '12px',borderTopRightRadius: '12px',color:'#fff',fontSize:'16px'}}
                onClick={lu}
              >Close</span>
            </div>
            <iframe src={url} frameborder="1" width="728" height="560" scrolling="auto" >
            </iframe>
        </div>
      </div>
    )
  }

  renderPtcwall (){
    const { user , lu } = this.props;
    const offsetLeft = (document.body.clientWidth - 728) / 2 + 'px';
    const offsetTop = '120px';
    const url = `http://www.ptcwall.com/index.php?view=ptcwall&pubid=p268ps11dq34z8d16t&usrid=${user && user.id}`
    return(
      <div style={{left:offsetLeft , top :offsetTop ,zIndex:999999, position:'fixed'}}>
        <div style={{position:'fixed',top:0,bottom:0,right:0,left:0,backgroundColor:'#000',opacity:0.6}}></div>
        <div style={{backgroundColor:'#ccc',zIndex:99999999999999999,position:'relative'}}>
            <div style={{textAlign:'right'}}>
              <span
                style={{display:'inline-block',padding:'12px 25px',cursor:'pointer',backgroundColor:'rgb(0, 174, 239)',color:'#fff',fontSize:'16px'}}
                onClick={lu}
              >Close</span>
            </div>
            <iframe src={url} frameborder="1" width="728" height="560" scrolling="auto" >
            </iframe>
        </div>
      </div>
    )
  }

  renderClixwall (){
    const { user , lu } = this.props;
    const offsetLeft = (document.body.clientWidth - 728) / 2 + 'px';
    const offsetTop = '120px';
    const url = `http://www.clixwall.com/wall.php?p=RHWQ7-D9G18-VJ1EP&u=${user && user.id}`
    return(
      <div style={{left:offsetLeft , top :offsetTop ,zIndex:999999, position:'fixed'}}>
        <div style={{position:'fixed',top:0,bottom:0,right:0,left:0,backgroundColor:'#000',opacity:0.6}}></div>
        <div style={{backgroundColor:'#ccc',zIndex:99999999999999999,position:'relative'}}>
            <div style={{textAlign:'right'}}>
              <span
                style={{display:'inline-block',padding:'12px 25px',cursor:'pointer',backgroundColor:'rgb(0, 174, 239)',color:'#fff',fontSize:'16px'}}
                onClick={lu}
              >Close</span>
            </div>
            <iframe src={url} frameborder="1" width="728" height="560" scrolling="auto" >
            </iframe>
        </div>
      </div>
    )
  }

  renderSupreWow (){
    const { user , lu } = this.props;
    const offsetLeft = (document.body.clientWidth - 728) / 2 + 'px';
    const offsetTop = '120px';
    const url = `https://wall.superrewards.com/super/offers?h=plrmkzlptng.031981954300&hdpay=1&uid=${user && user.id}`
    return(
      <div style={{left:offsetLeft , top :offsetTop ,zIndex:999999, position:'fixed'}}>
        <div style={{position:'fixed',top:0,bottom:0,right:0,left:0,backgroundColor:'#000',opacity:0.6}}></div>
        <div style={{backgroundColor:'#ccc',zIndex:99999999999999999,position:'relative'}}>
            <div style={{textAlign:'right'}}>
              <span
                style={{display:'inline-block',padding:'12px 25px',cursor:'pointer',backgroundColor:'rgb(0, 174, 239)',color:'#fff',fontSize:'16px'}}
                onClick={lu}
              >Close</span>
            </div>
            <iframe src={url} frameborder="1" width="728" height="560" scrolling="auto" >
            </iframe>
        </div>
      </div>
    )
  }

  renderMoonWow (){
    const { user , lu , type} = this.props;

    if(type === 1){
      return this.renderSupreWow()
    }

    if(type === 2){
      return this.renderClixwall()
    }

    if(type === 3){
      return this.renderPtcwall()
    }
  }

  render() {
    const { user , config} = this.props;
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
