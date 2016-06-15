const apiArr = [
  'https://offerwall.solebtc.com/api/v1',
  'https://soleltc.com/api/v1',
  'https://soledash.net/api/v1',
  'https://soledoges.com/api/v1',
]

const socketApiArr = [
  'wss://offerwall.solebtc.com/api/v1/websocket',
  'wss://soleltc.com/api/v1/websocket',
  'wss://soledash.net/api/v1/websocket',
  'wss://soledoges.com/api/v1/websocket',
]
export default {
    api : apiArr[process.env.TYPE-1],
    socketApi : socketApiArr[process.env.TYPE-1],
}
