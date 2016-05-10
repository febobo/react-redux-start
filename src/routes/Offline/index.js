import { injectReducer } from '../../store/reducers'
import localstore from 'store';
export default (store) => ({
  path: 'offline',
  getComponent (nextState, next) {
    require.ensure([
      './containers/OfflineContainer',
      './modules/offline'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Offline = require('./containers/OfflineContainer').default
      const reducer = require('./modules/offline').default

      injectReducer(store, { key: 'offline', reducer })

      next(null, Offline)
    })
  },
  onEnter (nextState, replace){
    let user = localstore.get('user');
    // console.log()
    if(!user || user && user.id){
      replace(null, '/login')
    }
  }
})
