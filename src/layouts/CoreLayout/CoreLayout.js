import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import { userRegister ,
         changeLanguage,
         isBoolean,
         isloadding
       } from '../../routes/Register/modules/register'
       console.log(userRegister , isBoolean , isloadding)
import {i18n} from '../../util/i18n'
import store from 'store';

export class CoreLayout extends React.Component {

  componentWillMount() {
    let lang = this.props.language;
    console.log(this.props)
    i18n.extend(require('../../texts/' + lang + '.js').text);

    // this._stream();
  };

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

const mapActionCreators = {
  userRegister,
  changeLanguage,
  isBoolean
}

const mapStateToProps = (state) => ({
  data : state.register && state.register.data,
  language : store.get('language') || 'en',
  isLoading : state.register && state.register.isBoolean || false
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
