import React from 'react'

type Props = {

};
export class CountDown extends React.Component {
  props: Props;

  state = {}
  
  render () {
    const { time } = this.props.geetest;
    // console.log(time)
    return (
      <span>
        {
          time && time.time
          ? time.time
          : null
        }
      </span>
    )
  }
}

export default CountDown

CountDown.propTypes = {
  count : React.PropTypes.number
}
