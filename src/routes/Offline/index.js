import { injectReducer } from '../../store/reducers'

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
  }
})
