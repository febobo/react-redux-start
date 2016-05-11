import React from 'react'
import DuckImage from '../../static/images/Duck.jpg'
import classes from './History.scss'
import Adv from '../Adv'
import { Pagination ,  Alert , Tag , Table} from 'antd';

// export const History = () => (
export class History extends React.Component {
  componentWillMount(){
    this._getData()
  }

  _getData (lastUntil , limit){
    const { getHistoryList } = this.props;
    let until = lastUntil || Math.floor(new Date().getTime()/1000);
    let pageSize = limit || 2
    let param = '?until=' + until + '&limit=' + pageSize
    getHistoryList(param)
  }

  _changePage (page , limit){
    // if(page==1) return;
    const { historyData } = this.props;
    let lastTime = historyData.rewardList[historyData.rewardList.length-1].created_at;
    let lastUntil = Math.floor(new Date(lastTime).getTime()/1000)
    this._getData(lastUntil , limit)
  }

  render (){
    // console.log(this._getData)
    const { historyData } = this.props;

      const columns = [{
        title: '时间',
        dataIndex: 'updated_at',
        render(text) {
          return <a href="#">{text}</a>;
        }
      }, {
        title: '金额',
        dataIndex: 'amount'
      }, {
        title: '交易号',
        dataIndex: 'tx'
      }, {
        title: '状态',
        dataIndex: 'status'
      }];

      const data = [];
      historyData && historyData.rewardList &&
      historyData.rewardList.length && historyData.rewardList.map( (v, k) => {
          data.push({
            key: `${k}`,
            updated_at: `${v.updated_at}`,
            amount:`${v.amount}`,
            tx: ( ()=>{
              return  <a href={v.tx_url}>{v.tx_url}</a>
            })(),
            status: (() => {
              if(`${v.status}` == 2){
                return  <Tag color="green">已处理</Tag>
              }else if(`${v.status}` == 1){
                return  <Tag  color="yellow">处理中</Tag>
              }else{
                return  <Tag  color="red">等待处理</Tag>
              }
            })()
          });
      })

      const that = this;
      const pagination = {
        total: historyData && historyData.rewardList &&
        historyData.rewardList.length,
        defaultPageSize : 2,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize){
          that._changePage(current,pageSize);
        },
        onChange(current) {
          that._changePage(current);
        },
      };

    return (
      <div className={classes.history}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          bordered={true}
        />
      </div>
    )
  }

// )
}

export default History;
