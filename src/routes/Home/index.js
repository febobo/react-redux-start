import HomeView from './components/HomeView'
import localstore from 'store';
export default {
  component: HomeView,
  onEnter (nextState, replace){
    // console.log(this)
    if(location.search && location.search.split('=')[1]) return;
    let user = localstore.get('user');
    if(!user){
      replace(null, '/login')
    }
  }
}
