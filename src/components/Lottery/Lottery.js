import React from 'react'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import classes from '../Lottery/Lottery.scss'
import {i18n} from '../../util/i18n'
import { getBtcWebsocket , btcWebsocket } from '../../actions/Websocket'
import { connect } from 'react-redux'
import { Alert , Table ,Tag } from 'antd'
import moment from 'moment'


type Props = {

};
export class Lottery extends React.Component {
  props: Props;

  constructor (props){
    super(props);
    this.amkey = 0;
    console.log(222)
  }
  componentWillMount (){
    // this._stream()
    const { getBtcWebsocket , btcWebsocket } = this.props;
    getBtcWebsocket()

    // btcWebsocket({name : 1})
  }

  componentDidMount (){

  }
  render () {
    const { users_online , latest_incomes } = this.props.lottery;
    const { isDynamic , style  } = this.props;

        //  const list = latest_incomes && latest_incomes.length && latest_incomes.map( (v, k) => {
        //      return (
        //        <div key={'lottery' + k }>
        //          <div>{v.address}</div>
        //          <div>{v.amount}</div>
        //          <div>{moment(v.time).format("YYYY-MM-DD hh:mm:ss")}</div>
        //        </div>
        //      )
        //    })
    const that = this;
    // that.amkey = that.amkey <= 11 ? that.amkey++ : 0;
    if(that.amkey  <= 11){
      that.amkey++
    }else{
      that.amkey = 0
    }

    console.log(that.amkey)
    const columns = [{
      title: i18n.t('common.btcAddress'),
      dataIndex: 'address',
      render(text,row) {
        // console.log(row.key)
        if(row.key == that.amkey){
          return <div className={classes.test}>{text}</div>;
        }
          return <div >{text}</div>;
      }
    }, {
      title: i18n.t('common.amount'),
      dataIndex: 'amount',
      render(text,row) {
        if(row.key == that.amkey){
          return <div className={classes.test}>{text}</div>;
        }
          return <div >{text}</div>;
      }
    }, {
      title: i18n.t('common.time'),
      dataIndex: 'time',
      render(text,row) {
        if(row.key == that.amkey){
          return <div className={classes.test}>{text}</div>;
        }
          return <div >{text}</div>;
      }
    }];
    const data = [];
    latest_incomes && latest_incomes.length && latest_incomes.map( (v, k) => {
        data.push({
          key: `${k}`,
          address: `${v.address}`,
          amount: <Tag color="blue">{v.amount.toFixed(8)}</Tag>,
          time: moment(Date.parse(`${v.time}`)).format("YYYY-MM-DD HH:mm:ss"),
        });
    })
    return (
      <div className={classes.dynamic} style={style}>
        {
          isDynamic ?
          null :
          <div className={classes.dynamicTitle}><img src={dynamicIco.png} /><span><b>{i18n.t('common.dynamic')}</b></span></div>
        }


        <Table
          columns={columns}
          dataSource={data}
          bordered={true}
          pagination={false}
          size="small"
          ref="box"
          rowClassName={(v,k) =>{
            return 'lottery' + k
          }}
        />

      </div>
    )
  }
}
// <div className={classes.lotteryTable}>
//   <div className={classes.lotteryTitle}>
//     <div>Address</div>
//     <div>Amount</div>
//     <div>Time</div>
//   </div>
//   <div className={classes.lotterybody} id="listScroll">
// // {
// //   list ?
// //   list :
// //   null
// // }
// </div>
// </div>

export default Lottery;

const mapActionCreators = {
  getBtcWebsocket,
  btcWebsocket
}

const mapStateToProps = (state)=>
({
  lottery : state.lottery,
})

export default connect(mapStateToProps, mapActionCreators)(Lottery)
