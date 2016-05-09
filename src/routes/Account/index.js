import { injectReducer } from '../../store/reducers'
import localstore from 'store';
export default (store) => ({
  path: 'account',
  getComponent (nextState, next) {
    require.ensure([
      './containers/AccountContainer',
      './modules/account'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Account = require('./containers/AccountContainer').default
      const reducer = require('./modules/account').default

      injectReducer(store, { key: 'account', reducer })

      next(null, Account)
    })
  },
  onEnter (nextState, replace){
    let user = localstore.get('user');
    console.log(user , 2222)
    console.log(nextState , replace )

    if(!user.id){
      replace(null, '/login')
    }
  }
})
