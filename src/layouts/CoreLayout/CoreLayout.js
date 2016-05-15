import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import { userRegister ,
         changeLanguage,
         sendUserEmail,
         logout
       } from '../../routes/Register/modules/register'
import { isBoolean } from '../../actions/Nav'
import { getBtcWebsocket } from '../../actions/Websocket'

import {i18n} from '../../util/i18n'
import store from 'store';

export class CoreLayout extends React.Component {

  componentWillMount() {
    let lang = this.props.language;
    i18n.extend(require('../../texts/' + lang + '.js').text);
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
  getBtcWebsocket,
  sendUserEmail,
  logout
}

const mapStateToProps = (state) => ({
  data : state.register && state.register.user || store.get('user'),
  language : store.get('language') || 'en',
  isloading : state.nav && state.nav.isloading || false,
  users_online : state.lottery && state.lottery.users_online || 0
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
