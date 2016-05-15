
export const BTC_WEBSOCKET = 'BTC_WEBSOCKET';

export function btcWebsocket(socketData , getState) {
  const { lottery } = getState();
  if(lottery && lottery.latest_incomes && socketData.delta_income){
    lottery.latest_incomes.push(socketData.delta_income)
  }else{
    lottery.latest_incomes = socketData.latest_incomes || lottery.latest_incomes;
  }
  return {
    type: BTC_WEBSOCKET,
    users_online : socketData.users_online || lottery.users_online,
    latest_incomes : lottery.latest_incomes,
  };
}

export function getBtcWebsocket(socketData) {
  return (dispatch , getState) => {
    let url = 'ws://staging.solebtc.com/api/v1/websocket';
    let ws = new WebSocket(url);
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
