import React from 'react'

import ad4 from '../../static/images/ad4.jpg'
import classes from './Adv.scss'
type Props = {

};
export class Adv extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.adTop}><a href="#"><img src={ad4} /></a></div>
    )
  }
}

export default Adv
