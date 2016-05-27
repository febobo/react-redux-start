import React from 'react'
import DuckImage from '../../static/images/Duck.jpg'
import classes from './History.scss'
import Adv from '../Adv'
import moment from 'moment'
import { Pagination ,  Alert , Tag , Table} from 'antd';
import {i18n} from '../../util/i18n'

// export const History = () => (
export class History extends React.Component {
  componentWillMount(){
    this._getData()
  }

  _getData (page , limit){
    const { getHistoryList } = this.props;
    let offset = page || 0;
    let pageSize = limit || 10
    let param = '?offset=' + offset + '&limit=' + pageSize
    getHistoryList(param)
  }

  _changePage (page , limit){
    // if(page==1) return;
    const { historyData } = this.props;
    this._getData(page , limit)
  }

  render (){
    // console.log(this._getData)
    const { historyData } = this.props;

      const columns = [{
        title: i18n.t('common.time'),
        dataIndex: 'updated_at',
        render(text) {
          return <a href="#">{text}</a>;
        }
      }, {
        title: i18n.t('common.amount'),
        dataIndex: 'amount'
      }, {
        title: i18n.t('history.transaction'),
        dataIndex: 'tx'
      }, {
        title: i18n.t('history.status'),
        dataIndex: 'status'
      }];

      const data = [];
      historyData && historyData.rewardList &&
      historyData.rewardList.length && historyData.rewardList.map( (v, k) => {
          data.push({
            key: `${k}`,
            updated_at:moment(`${v.updated_at}`).format("YYYY-MM-DD HH:mm:ss"),
            amount:`${v.amount}`,
            tx: ( ()=>{
              if(!v.tx_url) return null;
              return  <a href={v.tx_url}>blockchain</a>
            })(),
            status: (() => {
              if(`${v.status}` == 2){
                return  <Tag color="green">{i18n.t('history.handle_end')}</Tag>
              }else if(`${v.status}` == 1){
                return  <Tag  color="yellow">{i18n.t('history.handle_ing')}</Tag>
              }else{
                return  <Tag  color="red">{i18n.t('history.wait_handle')}</Tag>
              }
            })()
          });
      })

      const that = this;
      const pagination = {
        total: historyData && historyData.count,
        pageSize : 10,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize){
          that._changePage(current -1 ,pageSize);
        },
        onChange(current) {
          that._changePage(current -1 );
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
