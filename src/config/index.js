const apiArr = [
  'http://soleltc.com/api/v1',
  'http://soleltc.com/api/v1',
  'http://soledash.com/api/v1',
  'http://soledoges.com/api/v1',
]

const socketApiArr = [
  'ws://soleltc.com/api/v1/websocket',
  'ws://soleltc.com/api/v1/websocket',
  'ws://soledash.com/api/v1/websocket',
  'ws://soledoges.com/api/v1/websocket',
]
export default {
    api : apiArr[process.env.TYPE-1],
    socketApi : socketApiArr[process.env.TYPE-1],
}
