import React, { Component } from 'react';
import classes from './offerWow.scss'
export default class OfferWow extends Component {

  constructor(props){
    super(props)
		this.changeType = this.changeType.bind(this);
		this.state = {};
  }

	shouldComponentUpdate (nextProps ,nextState){
			if(nextProps.type === this.props.type &&
				nextState === this.state
			){
				return false
			}
			return true
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
    let { user , lu , type} = this.props;
		type = this.state.type || type;
    if(type === 1){
      return this.renderSupreWow()
    }

    if(type === 2){
      return this.renderClixwall()
    }

    if(type === 3){
      return this.renderPtcwall()
    }

		if(type === 4){
      return this.renderBtcWow()
    }
  }

	changeType (type){
		this.setState({
			type
		})

	}

	renderItem (){
		let { user , lu , type} = this.props;
		type = this.state.type || type;
		const itmes= [{
			type : 1,
			name : 'Superrewards'
		},{
			type : 2,
			name : 'clixwall'
		}]
		let itemsNodeArr = []
		itmes.map( (v,k)=>{
			console.log(v.type == type )
			let active = v.type == type ? classes.active : null
			itemsNodeArr.push(
				<li
					key={'itemNode' + k}
					onClick={ ()=> {this.changeType(v.type)}}
					className={active}
				>
					{v.name}
				</li>
			)
		})
		return itemsNodeArr;

	}

  render() {
    const { user , config} = this.props;
    return (
      <div>
          {this.renderMoonWow()}
					<div className={classes.slider}>
						<ul>
							{this.renderItem()}
						</ul>
					</div>
      </div>
    );
  }
}
