/*
  @ process.env.TYPE Array [1,2,3,4,5,6] => [btc,ltc,dash,doge,moonbtc,autodoge]
*/

import logoImg from '../static/images/logo.png'
import soledash from '../static/images/soledash.png'
import SoleDoKC from '../static/images/SoleDoKC.png'
import SoleLTC from '../static/images/SoleLTC.png'
import newbtclogo from '../static/images/moonlogo.png'
import autodogelogo from '../static/images/autodogelogo.png'

// referer link image
import ad6 from '../static/images/ad6.gif'
import ad7 from '../static/images/ad7.gif'
import ad8 from '../static/images/ad8.gif'
import ad9 from '../static/images/ad9.gif'

import autodoge_ref_200 from '../static/images/autodoge_ref_200.gif'
import autodoge_ref_300 from '../static/images/autodoge_ref_300.gif'
import autodoge_ref_468 from '../static/images/autodoge_ref_468.gif'
import autodoge_ref_728 from '../static/images/autodoge_ref_728.gif'

const refererLinkImgArr = [{
  size_200 : ad6,
  size_300 : ad7,
  size_468 : ad8,
  size_728 : ad9,
},{
  size_200 : ad6,
  size_300 : ad7,
  size_468 : ad8,
  size_728 : ad9,
},{
  size_200 : ad6,
  size_300 : ad7,
  size_468 : ad8,
  size_728 : ad9,
},{
  size_200 : ad6,
  size_300 : ad7,
  size_468 : ad8,
  size_728 : ad9,
},{
  size_200 : ad6,
  size_300 : ad7,
  size_468 : ad8,
  size_728 : ad9,
},{
  size_200 : autodoge_ref_200,
  size_300 : autodoge_ref_300,
  size_468 : autodoge_ref_468,
  size_728 : autodoge_ref_728,
}]

// logo array
const logoArr = [logoImg,SoleLTC,soledash,SoleDoKC,newbtclogo,autodogelogo]

const apiArr = [
  'https://solebtc.com/api/v1',
  'https://soleltc.com/api/v1',
  'https://soledash.net/api/v1',
  'https://soledoges.com/api/v1',
  'https://solemoon.com/api/v1',
  'https://autodoge.com/api/v1',
]

const socketApiArr = [
  'wss://solebtc.com/api/v1/websocket',
  'wss://soleltc.com/api/v1/websocket',
  'wss://soledash.net/api/v1/websocket',
  'wss://soledoges.com/api/v1/websocket',
  'wss://solemoon.com/api/v1/websocket',
  'wss://autodoge.com/api/v1/websocket',
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
},{
  'at': 'English',
},
]

// 语言简写
const langs = [
  ['en', 'cn' , 'ft'  , 'ru', 'fy','pt' , 'de' , 'sp'],
  ['lt'],
  ['ds'],
  ['gb'],
  ['me'],
  ['at']
]

export default {
    api : apiArr[process.env.TYPE-1],
    socketApi : socketApiArr[process.env.TYPE-1],
    language : language,
    langs : langs,
    logo : logoArr[process.env.TYPE-1],
    show_btc_home_top_adv : process.env.TYPE == 1 ? true : false,
    show_auto_home_top_adv : process.env.TYPE == 6 ? true : false,
    show_auto_home_content_right_adv : process.env.TYPE == 6 ? true : false,
    show_home_top_adv : process.env.TYPE == 4 ? true : false,
    show_google_adv : process.env.TYPE != 5 ? true : false,
    show_coinad_adv : process.env.TYPE != 5 && process.env.TYPE != 6  ? true : false,
    show_moon_adv : process.env.TYPE == 5 ? true : false,
    show_btc_task : process.env.TYPE == 1 ? true : false,
    show_moon_task : process.env.TYPE == 5 ? true : false,
    show_Lottery_link : process.env.TYPE == 4 || process.env.TYPE == 6? true : false,
    show_btc_Lottery_link : process.env.TYPE == 1 ? true : false,
    refererObj : {
      size_200 : refererLinkImgArr[process.env.TYPE-1].size_200,
      size_300 : refererLinkImgArr[process.env.TYPE-1].size_300,
      size_468 : refererLinkImgArr[process.env.TYPE-1].size_468,
      size_728 : refererLinkImgArr[process.env.TYPE-1].size_728,
    }
}
