import { injectReducer } from '../../store/reducers'
import localstore from 'store';
export default (store) => ({
  path: 'history',
  getComponent (nextState, next) {
    require.ensure([
      './containers/HistoryContainer',
      './modules/history'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const History = require('./containers/HistoryContainer').default
      const reducer = require('./modules/history').default

      injectReducer(store, { key: 'history', reducer })

      next(null, History)
    })
  },
  onEnter (nextState, replace){
    let user = localstore.get('user');
    if(!user || user && !user.id){
      replace(null, '/login')
    }
  }
})
