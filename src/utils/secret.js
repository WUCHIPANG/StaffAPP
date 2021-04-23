import Global from '../Global.vue'
const CryptoJS = require('crypto-js')
const KEY = Global.$API_AES_KEY
const IV = Global.$API_IV

function Encrypt(data) {
  //加密
  let key_hash = CryptoJS.MD5(KEY).toString()
  let key = CryptoJS.enc.Utf8.parse(key_hash)
  let iv = CryptoJS.enc.Utf8.parse(IV)
  let encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.toString() //返回的是base64格式的密文
}
function Decrypt(encrypted) {
  //   console.log('secret Decrypt', encrypted)
  //解密
  let key_hash = CryptoJS.MD5(KEY).toString()
  let key = CryptoJS.enc.Utf8.parse(key_hash)
  let iv = CryptoJS.enc.Utf8.parse(IV)
  let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}

export default {
  Decrypt,
  Encrypt,
}
