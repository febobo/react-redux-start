import React from 'react'
import classes from './Offline.scss'
import { Pagination ,  Alert} from 'antd';
type Props = {

};
export class Offline extends React.Component {
  props: Props;

  componentWillMount(){
    console.log(this)
    const { getOfflineList } = this.props;
    let param = '?until=' + new Date().getTime()
    getOfflineList(param)
  }

  render () {
    const { offlineData } = this.props;
    const list = offlineData && offlineData.offlineList && offlineData.offlineList.length && offlineData.offlineList.map( (v, k) => {
        return (
          <ul key={'offlineList' + k}>
      			<li>{v.address}</li>
      			<li>{v.created_at}</li>
      		</ul>
        )
      })
      console.log(list)
    return (
      <div className={classes.offline}>
      	<div className={classes.offlineTitle}>
      		<ul>
      			<li>address</li>
      			<li>加入时间</li>

      		</ul>
      	</div>
      	<div className={classes.clear}></div>
      	<div className={classes.offlineList}>
        {
          list ? list :
          <div>
            <Alert
              message=""
              description="暂未下线历史记录"
              type="error"
              showIcon
            />
          </div>
        }

      	</div>
      </div>
    )
  }
}

export default Offline
