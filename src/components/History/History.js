import React from 'react'
import DuckImage from '../../static/images/Duck.jpg'
import classes from './History.scss'
import Adv from '../Adv'
import { Pagination ,  Alert} from 'antd';

// export const History = () => (
export class History extends React.Component {
  componentWillMount(){

    const { getHistoryList } = this.props;
    let param = '?until=' + new Date().getTime() + '&limit=2'
    getHistoryList(param)
  }
  render (){
    console.log(this)
    const { historyData } = this.props;
    const list = historyData && historyData.rewardList && historyData.rewardList.map( (v, k) => {
        return (
          <ul key={'historyList' + k}>
      			<li>{v.created_at}</li>
      			<li>{v.type}</li>
      			<li><font color="#509c1d">{v.income}</font></li>
      			<li className={classes.noBorder}><font color="#0a6ba3">{v.referer_income}</font></li>
      		</ul>
        )
      })
    return (
      <div>
        <div className={classes.history}>
        	<div className={classes.tableTitle}>
        		<ul>
        			<li>时间</li>
        			<li>类型</li>
        			<li>金额</li>
        			<li className={classes.noBorder}>credited（已奖励）</li>
        		</ul>
        	</div>
        	<div className={classes.clear}></div>
        	<div className={classes.tableList}>
          {
            list ? list :
            <div>
              <Alert
                message=""
                description="暂未历史记录"
                type="error"
                showIcon
              />
            </div>
          }
        	</div>
        </div>
        {
          historyData.rewardList ?
          <div className={classes.pagination}>
            <Pagination
              defaultCurrent={1}
              total={historyData.rewardList.length}
              pageSize={1}
            />
          </div> :
          null
        }

      </div>
    )
  }

// )
}

export default History;


// <div>
//   <h4>Welcome!</h4>
//   <img
//     alt='This is a duck, because Redux!'
//     className={classes.duck}
//     src={DuckImage} />
// </div>
