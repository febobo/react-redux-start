import React, { Component } from 'react';
import GoogleAdv from '../../GoogleAdv'
import BaseConfig from '../../../BaseConfig';
import { Tag } from 'antd'
import classes from './HomeContentRightAdv.scss'

export default class HomeContentRightAdv extends Component {
  componentDidMount (){

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
    const { client , slot , style , advBoxStyle } = this.props;
    return (
      <div>
        {
          BaseConfig.show_google_adv ?
          this.showGoogleAdv()
          :null
        }
        {
          BaseConfig.show_moon_adv ?
          <div className={classes.buttonWrap}>
            <div>
              <span color="blue">SuperReward</span>
            </div>
            <div>
              <span color="blue">PTCWALL</span>
            </div>
            <div>
              <span color="blue">ClixWall</span>
            </div>
          </div>
          :null
        }

      </div>
    );
  }
}
