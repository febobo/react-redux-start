import store from 'store';
export const BTC_WEBSOCKET = 'BTC_WEBSOCKET';

export function btcWebsocket(socketData , getState) {
  const { lottery } = getState();
  if(lottery && lottery.latest_incomes && socketData.delta_income){
    lottery.latest_incomes.unshift(socketData.delta_income)
    lottery.latest_incomes = lottery.latest_incomes.length > 12 ? lottery.latest_incomes.slice(0,12) : lottery.latest_incomes;
  }else{
    lottery.latest_incomes = socketData.latest_incomes || lottery.latest_incomes;
    lottery.latest_incomes = lottery && lottery.latest_incomes && lottery.latest_incomes.length > 12 ? lottery.latest_incomes.slice(0,12) : lottery.latest_incomes;
  }
  return {
    type: BTC_WEBSOCKET,
    users_online : socketData.users_online || lottery.users_online,
    latest_incomes : lottery.latest_incomes,
    user_lattery : socketData.delta_income || lottery.delta_income
  };
}

let ws ;
export function getBtcWebsocket(socketData) {
  return (dispatch , getState) => {
    if(ws && ws.readyState <= 1) return;
    let url = 'wss://solebtc.com/api/v1/websocket';
    ws = new WebSocket(url);
    ws.onopen = (evt) => setInterval(() => ws.send('ping message'), 5); // send ping
    ws.onerror = (evt) => console.log('websocket error ', evt);
    ws.onclose = (evt) => console.log('websocket close ', evt);
    ws.onmessage = (evt) => {
      let data = JSON.parse(evt.data);
      console.log('websocket message ', data);
      dispatch(btcWebsocket(data , getState))
    };
  }
}
