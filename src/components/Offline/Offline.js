import React from 'react'
import classes from './Offline.scss'
import { Pagination ,  Alert , Tag , Table} from 'antd';
type Props = {

};
export class Offline extends React.Component {
  props: Props;

  componentWillMount(){
    this._getData()
  }

  _getData (lastUntil , limit){
    const { getOfflineList } = this.props;
    let until = lastUntil || Math.floor(new Date().getTime()/1000);
    let pageSize = limit || 2
    let param = '?until=' + until + '&limit=' + pageSize
    getOfflineList(param)
  }

  _changePage (page , limit){
    // if(page==1) return;
    const { offlineData } = this.props;
    let lastTime = offlineData.rewardList[offlineData.rewardList.length-1].created_at;
    let lastUntil = Math.floor(new Date(lastTime).getTime()/1000)
    this._getData(lastUntil , limit)
  }

  render () {
    const { offlineData } = this.props;
    const columns = [{
      title: '时间',
      dataIndex: 'updated_at',
      render(text) {
        return <a href="#">{text}</a>;
      }
    }, {
      title: '金额',
      dataIndex: 'amount'
    }];

    const data = [];
    offlineData && offlineData.rewardList &&
    offlineData.rewardList.length && offlineData.rewardList.map( (v, k) => {
        data.push({
          key: `${k}`,
          updated_at: `${v.updated_at}`,
          amount:`${v.amount}`,
        });
    })

    const that = this;
    const pagination = {
      total: offlineData && offlineData.rewardList &&
      offlineData.rewardList.length,
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
