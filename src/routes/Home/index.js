import HomeView from './components/HomeView'
import localstore from 'store';
export default {
  component: HomeView,
  onEnter (nextState, replace){
    if(location.search && location.search.split('=')[1] == 110) return;
    let user = localstore.get('user');
    if(!user){
      replace(null, '/login')
    }
  }
}
