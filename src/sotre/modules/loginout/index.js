import Global from '@/Global'
import axios from 'axios'
import * as types from '../mutations_type'
import router from '@/router'
// npm i --save crypto-js
const CryptoJS = require('crypto-js')
import secret from '../../../utils/secret'
const state = {
  token: '',
  usp: '',
}

const actions = {
  userLogin({commit}, data) {
    const usn1 = '62'
    const usn2 = '42'
    const usn3 = '02'
    const usn4 = '38'
    let usp = usn1 + usn2 + usn3 + usn4
    let user = usp
      .split('')
      .reverse()
      .join('')
    // console.log('usp:', usp, user)
    // console.log('actionsData', data.password, secret.Decrypt(data.password))
    if (secret.Decrypt(data.password) == user) {
      //   console.log('OK')
      commit(types.SETTOKEN, data)
      window.sessionStorage.setItem('user', data.user)

      // 要打開(暫時)
      router.push('/waitingtask')
    } else {
      console.log('err')
    }
    // let encryptPw = secret.Encrypt(data.password);

    // console.log(encryptPw, encryptUsp)
    // if (data.user == 'demo' && secret.Decrypt(encryptPw) === secret.Decrypt(encryptUsp)) {
    //             console.log('OK')
    //             commit(types.SETTOKEN, data)
    //             window.sessionStorage.setItem('user', data.user)

    //             // 要打開(暫時)
    //             //   router.push("/dashboard");
    //         } else {
    //             console.log('err')
    //         }
    // if (data.password) {

    // // axios.post().then(res => {

    // // }).catch(error => {

    // // })
    // } else {
    //     console.log('err')
    // }

    // window.location.assign("/");
  },
  userLogout({commit}) {
    commit(types.DELTOKEN)
  },
}

const mutations = {
  [types.SETTOKEN](state, token) {
    state.token = token

    // window.location.assign("/dashboard#");
  },
  [types.DELTOKEN](state) {
    state.token = ''
    sessionStorage.removeItem('token')
    window.location.assign('/Login')
  },
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
}
