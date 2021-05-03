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

                    <CInput placeholder="帳號" autocomplete="username" v-model="username">
                      <template #prepend-content><CIcon name="cil-user"/></template>
                    </CInput>
                    <CInput placeholder="密碼" type="password" autocomplete="curent-password" v-model="password">
                      <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                    </CInput>
                    <CRow>
                      <CCol col="6" class="text-left">
                        <CButton color="primary" size="lg" class="px-4" @click="login(username, password)">登入</CButton>
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
import Global from '@/Global';
const CryptoJS = require('crypto-js');
import secret from '../utils/secret';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      darkModal: true,
    };
  },
  methods: {
    login() {
      let data = {
        user: this.username,
        password: secret.Encrypt(this.password),
      };

      //  console.log('login:',data.password,secret.Decrypt(data.password))
      this.$store.dispatch('userLogin', data);
    },
  },
};
</script>
<style>
input::placeholder {
  font-size: 20px;
}
</style>
