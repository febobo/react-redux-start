import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export class CoreLayout extends React.Component {
  render (){
    const { children } = this.props;
    return (
      <div className=''>
        <Header {...this.props}/>
        <div className={classes.mainContainer}>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
