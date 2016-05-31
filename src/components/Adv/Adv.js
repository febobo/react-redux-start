import React from 'react'

import ad4 from '../../static/images/ad4.jpg'
import classes from './Adv.scss'
type Props = {

};
export class Adv extends React.Component {
  props: Props;

  render () {
    const advProps = {
      style : {display:"inline-block",width:"970px",height:"90px"},
      client : 'ca-pub-5722932343401905',
      slot : '1843492278',
      // advBoxStyle : { paddingTop:"25px", textAlign : "center"}
    }
    return (
      <div className={classes.adTop}>
      <a href="#"><img src={ad4} /></a>
      </div>
    )
  }
}

export default Adv
