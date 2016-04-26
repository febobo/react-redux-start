import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'login',
  getComponent (nextState, next) {
    require.ensure([
      './containers/LoginContainer',
      './modules/login'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Login = require('./containers/LoginContainer').default
      const reducer = require('./modules/login').default

      injectReducer(store, { key: 'login', reducer })

      next(null, Login)
    })
  }
})
