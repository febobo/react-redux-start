import React from 'react'
import classes from './Offline.scss'
import { Pagination ,  Alert , Tag , Table} from 'antd';
import moment from 'moment'
type Props = {

};
export class Offline extends React.Component {
  props: Props;

  componentWillMount(){
    this._getData()
  }

  _getData (page , limit){
    const { getOfflineList } = this.props;
    let offset = page || 0;
    let pageSize = limit || 10
    let param = '?offset=' + offset + '&limit=' + pageSize
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
      title: '时间',
      dataIndex: 'updated_at',
      render(text) {
        return <a href="#">{text}</a>;
      }
    }, {
      title: '地址',
      dataIndex: 'address'
    }, {
      title: '金额',
      dataIndex: 'amount'
    }];

    const data = [];
    offlineData && offlineData.offlineList &&
    offlineData.offlineList.length && offlineData.offlineList.map( (v, k) => {
        data.push({
          key: `${k}`,
          updated_at: moment(`${v.created_at}`).format("YYYY-MM-DD hh:mm:ss"),
          address:`${v.address}`,
          amount:`${v.referer_total_income}`,
        });
    })

    const that = this;
    const pagination = {
      total: offlineData && offlineData.count,
      pageSize : 10,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize){
        that._changePage(current - 1,pageSize);
      },
      onChange(current) {
        that._changePage(current -1);
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
