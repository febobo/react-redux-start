import React from 'react'
import DuckImage from '../../static/images/Duck.jpg'
import classes from './History.scss'
import Adv from '../Adv'
import moment from 'moment'
import { Pagination ,  Alert , Tag , Table} from 'antd';
import {i18n} from '../../util/i18n'
var currentLimit = 10;
// export const History = () => (
export class History extends React.Component {
  componentWillMount(){
    this.state = {
      type : 'withdrawals'
    }
    this._getData('withdrawals')
  }

  _getData (url , page , limit){
    const { getHistoryList } = this.props;
    let offset = page || 0;
    let pageSize = limit || 10
    currentLimit = pageSize;
    let param = '?offset=' + offset*currentLimit + '&limit=' + pageSize
    getHistoryList(`/${url}${param}` , 'withdrawals')
  }

  _changePage (url,page , limit){
    // if(page==1) return;
    const { historyData } = this.props;
    this._getData(url , page , limit)
  }

  changeType(type){
    console.log(type)
    this.setState({
      type
    })
    if(type === 'withdrawals'){
      return this._getData('/withdrawals')
    }
    if(type === 'rewards'){
      return this._getData('/incomes/rewards')
    }
    if(type === 'offerwall'){
      return this._getData('/incomes/offerwalls')
    }
  }

  renderWithDrawals (){
    const { historyData} = this.props;
    console.log(historyData)
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
            amount:`${v.amount.toFixed(8)}`,
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
        showSizeChanger: true,
        onShowSizeChange(current, pageSize){
          that._changePage('withdrawals' ,current -1 ,pageSize);
        },
        onChange(current) {
          that._changePage('withdrawals' , current -1,currentLimit );
        },
        // showTotal(){
        //   return (<span>总条数：{historyData && historyData.count}</span>)
        // }
      };
      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          bordered={true}
        />
      )
  }

  renderRewards (){
    const { historyData } = this.props;

      const columns = [{
        title: i18n.t('common.time'),
        dataIndex: 'created_at',
        render(text) {
          return <a href="#">{text}</a>;
        }
      }, {
        title: i18n.t('common.amount'),
        dataIndex: 'income'
      }
      // , {
      //   title: i18n.t('history.transaction'),
      //   dataIndex: 'tx'
      // }, {
      //   title: i18n.t('history.status'),
      //   dataIndex: 'status'
      // }
    ];

      const data = [];
      historyData && historyData.rewardList &&
      historyData.rewardList.length && historyData.rewardList.map( (v, k) => {
          data.push({
            key: `${k}`,
            created_at:moment(`${v.created_at}`).format("YYYY-MM-DD HH:mm:ss"),
            income:`${v.income}`,
          });
      })

      const that = this;
      const pagination = {
        total: historyData && historyData.count,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize){
          that._changePage('/incomes/rewards' ,current -1 ,pageSize);
        },
        onChange(current) {
          that._changePage('/incomes/rewards',current -1,currentLimit );
        },
      };
      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          bordered={true}
        />
      )
  }

  renderOfferwall (){
    const { historyData } = this.props;

      const columns = [{
        title: i18n.t('common.time'),
        dataIndex: 'created_at',
        render(text) {
          return <a href="#">{text}</a>;
        }
      }, {
        title: i18n.t('common.amount'),
        dataIndex: 'income'
      }
      , {
        title: 'type',
        dataIndex: 'type'
      }
      // , {
      //   title: i18n.t('history.status'),
      //   dataIndex: 'status'
      // }
    ];

      const data = [];
      historyData && historyData.rewardList &&
      historyData.rewardList.length && historyData.rewardList.map( (v, k) => {
          data.push({
            key: `${k}`,
            created_at:moment(`${v.created_at}`).format("YYYY-MM-DD HH:mm:ss"),
            income:`${v.income}`,
            type:(() => {
              if(`${v.type}` == 'offerwall'){
                return  <Tag color="green">{v.type}</Tag>
              }else if(`${v.status}` == 'rewards'){
                return  <Tag  color="yellow">{v.type}</Tag>
              }else{
                return  <Tag  color="red">{v.type}</Tag>
              }
            })(),
          });
      })

      const that = this;
      const pagination = {
        total: historyData && historyData.count,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize){
          that._changePage('/incomes/offerwall' ,current -1 ,pageSize);
        },
        onChange(current) {
          that._changePage('/incomes/offerwall',current -1,currentLimit );
        },
      };
      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          bordered={true}
        />
      )
  }

  renderItem (){
    // let { user , lu , type} = this.props;
    let type = this.state.type;
    const itmes= [{
      type : 'withdrawals',
      name : 'withdrawals'
    },{
      type : 'rewards',
      name : 'rewards'
    },{
      type : 'offerwall',
      name : 'offerwall'
    }]
    let itemsNodeArr = []
    itmes.map( (v,k)=>{
      let active = v.type == type ? classes.active : null
      itemsNodeArr.push(
        <li
          key={'itemNode' + k}
          onClick={ ()=> {this.changeType(v.type)}}
          className={active}
        >
          {v.name}
        </li>
      )
    })
    return itemsNodeArr;
  }

  renderBody(){
    if(this.state.type === 'withdrawals'){
      return this.renderWithDrawals()
    }
    if(this.state.type === 'rewards'){
      return this.renderRewards()
    }
    if(this.state.type === 'offerwall'){
      return this.renderOfferwall()
    }
  }
  render (){
    console.log(this.props)
    return (
      <div className={classes.history}>
        <div>
          <ul className={classes.tabs}>
            {this.renderItem()}
          </ul>
        </div>
        <div className={classes.bg}>
          {
            this.renderBody()
          }
        </div>
      </div>
    )
  }

// )
}

export default History;
