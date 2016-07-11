import React, { Component } from 'react';
import GoogleAdv from '../../GoogleAdv'
import BaseConfig from '../../../BaseConfig';
import OfferWow from '../../OfferWow'
import { Tag } from 'antd'
import classes from './HomeContentRightAdv.scss'

export default class HomeContentRightAdv extends Component {
  constructor(props){
    super(props);
    this._lu = this._lu.bind(this);
    this.state = {
      showLu : false
    }
  }

  // @type Number(1,2,3) => (super,Clix,Ptcw)
  _lu(type){
    this.setState({
      showLu : !this.state.showLu,
      type:type
    });
  }

  componentWillUnmount() {
  }

  showGoogleAdv (){
    const advProps = {
      style : {display:"inline-block",width:"300px",height:"250px"},
      client : 'ca-pub-5722932343401905',
      slot : '9366759071',
      // advBoxStyle : { paddingTop:"25px", textAlign : "center"}
    }
    return (
      <GoogleAdv
        {...advProps}
      />
    )
  }
  render() {
    const { client , slot , style , advBoxStyle ,user } = this.props;
    return (
      <div>
        {
          this.state.showLu ?
          <OfferWow
            user={user}
            config={BaseConfig}
            lu={this._lu}
            type={this.state.type}
          />
          : null
        }
        {
          BaseConfig.show_google_adv ?
          this.showGoogleAdv()
          :null
        }
        {
          BaseConfig.show_moon_adv ?
          <div className={classes.buttonWrap}>
            <div>
              <span color="blue"
                onClick={ ()=>this._lu(1)}
              >SuperReward</span>
            </div>
            <div>
              <span color="blue"
                onClick={ ()=>this._lu(2)}
              >PTCWALL</span>
            </div>
            <div>
              <span color="blue"
                onClick={ ()=>this._lu(3)}
              >ClixWall</span>
            </div>
          </div>
          :null
        }

      </div>
    );
  }
}
