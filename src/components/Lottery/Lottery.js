import React from 'react'
import dynamicIco from '../../static/images/dynamicIco.png'
import aboutIco from '../../static/images/aboutIco.png'
import classes from '../Login/Login.scss'
import {i18n} from '../../util/i18n'
import { getBtcWebsocket , btcWebsocket } from '../../actions/Websocket'
import { connect } from 'react-redux'
import { Alert , Table } from 'antd'

type Props = {

};
export class Lottery extends React.Component {
  props: Props;

  componentWillMount (){
    // this._stream()
    const { getBtcWebsocket , btcWebsocket } = this.props;
    getBtcWebsocket()
    // btcWebsocket({name : 1})
  }

  render () {

    const { users_online , latest_incomes } = this.props.lottery;
    const { isDynamic , style  } = this.props;

    const columns = [{
      title: 'BTC Address',
      dataIndex: 'address',
      render(text) {
        return <a href="#">{text}</a>;
      }
    }, {
      title: 'Amount',
      dataIndex: 'amount'
    }, {
      title: 'Time',
      dataIndex: 'time'
    }];

    const data = [];
    latest_incomes && latest_incomes.length && latest_incomes.map( (v, k) => {
        data.push({
          key: `${k}`,
          address: `${v.address}`,
          amount:`${v.amount}`,
          time: `${v.time}`,
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
        />
      </div>
    )
  }
}

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
