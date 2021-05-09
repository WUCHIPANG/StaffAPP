<script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"></script>
<script>
console.log('hello')
</script>
<template>
  <div>
    <div class="c-app flex-row align-items-center">
      <CContainer>
        <CRow class="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard class="p-4">
                <CCardBody>
                  <CForm>
                    <h1>傳送人員登入</h1>
                  
                    <div class="col-md-5 bind" style="display: none;"><button type="button" id="unbind" class="btn btn-warning" @click="unbind()">解除綁定</button></div>

                    <CInput placeholder="帳號" autocomplete="username" v-model="username">
                      <template #prepend-content><CIcon name="cil-user"/></template>
                    </CInput>
                    <input id="device_id" type="hidden" />
                    <CInput placeholder="密碼" type="password" autocomplete="curent-password" v-model="password">
                      <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                    </CInput>
                    <CRow>
                      <CCol col="6" class="text-left">
                        <CButton
                          color="primary"
                          id="bind"
                          size="lg"
                          class="px-4"
                          @click="login(username, password); ">登入</CButton
                        >
                        <button @click="registeFCM">Register</button>
                      </CCol>
                      <CCol col="6" class="text-right">
                        <CButton color="link" class="px-0" @click="darkModal = true" size="lg">忘記密碼?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    <div>
      <CModal :show.sync="darkModal" :no-close-on-backdrop="true" :centered="true" title="Modal title 2" size="lg" color="dark" style="font-size:28px;">
        您目前接獲一個指定傳送工作,請在此單完成後，執行指定派單<br />
        查看傳送內容
        <template #header>
          <h5 class="modal-title">派單通知</h5>
          <CButtonClose @click="darkModal = false" class="text-white" />
        </template>
        <template #footer>
          <!-- <CButton @click="darkModal = false" color="danger">確定</CButton> -->
          <CButton @click="darkModal = false" color="success" size="lg">接收</CButton>
        </template>
      </CModal>
    </div>
  </div>
</template>



<script> 
import 'firebase/messaging'
import Global from '@/Global';
const CryptoJS = require('crypto-js');
import secret from '../utils/secret';

export default {

  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      darkModal: false,
    };
  },
mounted () {
    console.log('hello')
    this.initFCM()
  },
    methods: {
           login() {
        let data = {
          user: this.username,
          password: secret.Encrypt(this.password),
        };

        this.$store.dispatch('userLogin', data);
    },
    initFCM () {
        console.log('initFCM')
      this.$messaging.onTokenRefresh(() => {
        this.$messaging.getToken().then((refreshedToken) => {
          console.log('Token refreshed.')
          this.setTokenSentToServer(false)
          this.sendTokenToServer(refreshedToken)
        })
      })
    },
    registeFCM () {
      this.$messaging.requestPermission().then(() => {
        console.log('Notification permission granted.')
        this.getToken()
      }).catch((err) => {
        console.log('Unable to get permission to notify.', err)
      })
    },
    getToken () {
      this.$messaging.getToken().then((currentToken) => {
        if (currentToken) {
          this.sendTokenToServer(currentToken)
        } else {
          console.log('No Instance ID token available. Request permission to generate one.')
          // Show permission UI.
          this.setTokenSentToServer(false)
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
        this.setTokenSentToServer(false)
      })
    },
    sendTokenToServer (token) {
      // TODO: Send Token To Your Server
    },
    setTokenSentToServer (type) {
      if (type) return
      // TODO: Delete Register Token From Your Server
    }

  }

};
</script>
<style>
input::placeholder {
  font-size: 20px;
}
</style>
