import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import { userRegister ,
         changeLanguage,
       } from '../../routes/Register/modules/register'
import { isBoolean } from '../../actions/Nav'
import { getBtcWebsocket } from '../../actions/Websocket'

       console.log(isBoolean)
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
  isBoolean,
  getBtcWebsocket
}

const mapStateToProps = (state) => ({
  data : state.register && state.register.user || store.get('user'),
  language : store.get('language') || 'en',
  isloading : state.nav && state.nav.isloading || false,
  users_online : state.Websocket && state.Websocket.users_online || 0
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
