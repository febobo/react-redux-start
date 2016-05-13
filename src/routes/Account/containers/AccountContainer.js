import { connect } from 'react-redux'
import store from 'store'

import Account from 'components/Account'

const mapActionCreators = {
}

const mapStateToProps = (state) => ({
  user : store.get('user') || null,
  host : 'http://' + location.host + '/register?referer_id=' + (store.get('user') && store.get('user').id )
})



export default connect(mapStateToProps, mapActionCreators)(Account)
