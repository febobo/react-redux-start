import React from 'react'
import classes from './Offline.scss'
import { Pagination ,  Alert , Tag , Table} from 'antd';
import moment from 'moment'
import {i18n} from '../../util/i18n'
type Props = {

};

var currentLimit = 10;
export class Offline extends React.Component {
  props: Props;

  componentWillMount(){
    this._getData()
  }

  _getData (page , limit){

    const { getOfflineList } = this.props;
    let offset = page || 0;
    let pageSize = limit || 10
    currentLimit = pageSize;
    let param = '?offset=' + offset*currentLimit + '&limit=' + pageSize
    getOfflineList(param)
  }

  _changePage (page , limit){
    // if(page==1) return;
    const { offlineData } = this.props;
    this._getData(page , limit)
  }

  render () {
    const { offlineData } = this.props;

    const columns = [{
      title: i18n.t('common.time'),
      dataIndex: 'updated_at',
      render(text) {
        return <a href="#">{text}</a>;
      }
    }, {
      title: i18n.t('common.btcAddress'),
      dataIndex: 'address'
    }, {
      title: i18n.t('common.amount'),
      dataIndex: 'amount'
    }];

    const data = [];
    offlineData && offlineData.offlineList &&
    offlineData.offlineList.length && offlineData.offlineList.map( (v, k) => {
        data.push({
          key: `${k}`,
          updated_at: moment(`${v.created_at}`).format("YYYY-MM-DD HH:mm:ss"),
          address:`${v.address}`,
          amount: <Tag color="blue">{v.referer_total_income.toFixed(8)}</Tag>
        });
    })

          // amount:`${v.referer_total_income.toFixed(8)}`,
    const that = this;
    const pagination = {
      total: offlineData && offlineData.count,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize){
        that._changePage(current - 1,pageSize);
      },
      onChange(current,pageSize) {
        that._changePage(current -1,currentLimit);
      },
      // showTotal(){
      //   return (<span>总条数：{offlineData && offlineData.count}</span>)
      // }
    };
    return (
      <div className={classes.offline}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          bordered={true}
        />
      </div>
    )
  }
}

export default Offline
