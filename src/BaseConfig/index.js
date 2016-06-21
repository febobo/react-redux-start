/*
  @ process.env.TYPE Array [1,2,3,4,5] => [btc,ltc,dash,doge,moonbtc]
*/

import logoImg from '../static/images/logo.png'
import soledash from '../static/images/soledash.png'
import SoleDoKC from '../static/images/SoleDoKC.png'
import SoleLTC from '../static/images/SoleLTC.png'
import newbtclogo from '../static/images/moonlogo.png'
// logo 数组
const logoArr = [logoImg,SoleLTC,soledash,SoleDoKC,newbtclogo]

const apiArr = [
  'https://solebtc.com/api/v1',
  'https://soleltc.com/api/v1',
  'https://soledash.net/api/v1',
  'https://soledoges.com/api/v1',
  'https://solemoon.com/api/v1',
]

const socketApiArr = [
  'wss://solebtc.com/api/v1/websocket',
  'wss://soleltc.com/api/v1/websocket',
  'wss://soledash.net/api/v1/websocket',
  'wss://soledoges.com/api/v1/websocket',
  'wss://solemoon.com/api/v1/websocket',
]

// 语言对应
const language = [{
  'en': 'English',
  'cn': '中文',
  'ft': '繁體中文',
  // 'ar': 'العربية',
  'ru': 'Русский',
  'fy': 'Français',
  'pt' : 'Português',
  'de' : 'Deutsch',
  'sp' : 'Español',
},{
  'lt': 'English',
},{
  'ds': 'English',
},{
  'gb': 'English',
},{
  'me': 'English',
},
]

// const show_google_adv,show_coinad_adv,show_moon_adv;
// switch (process.env.TYPE) {
//   case 1:
//     show_google_adv = true;
//     break;
//   case 1:
//     show_google_adv = true;
//     break;
//   default:
// }

// 语言简写
const langs = [
  ['en', 'cn' , 'ft'  , 'ru', 'fy','pt' , 'de' , 'sp'],
  ['lt'],
  ['ds'],
  ['gb'],
  ['me']
]
export default {
    api : apiArr[process.env.TYPE-1],
    socketApi : socketApiArr[process.env.TYPE-1],
    language : language,
    langs : langs,
    logo : logoArr[process.env.TYPE-1],
    show_google_adv : process.env.TYPE != 5 ? true : false,
    show_coinad_adv : process.env.TYPE != 5 ? true : false,
    show_moon_adv : process.env.TYPE == 5 ? true : false,
    show_btc_task : process.env.TYPE == 1 ? true : false,
    show_moon_task : process.env.TYPE == 5 ? true : false,
}
