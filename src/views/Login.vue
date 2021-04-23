<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Staff APP Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <!-- <CSelect :options="['護理站', '接單人員', '派遣公司']" placeholder="Please select" /> -->
                  <CInput placeholder="Username" autocomplete="username" v-model="username">
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput placeholder="Password" type="password" autocomplete="curent-password" v-model="password">
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="login(username, password)">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none">Register now!</CButton>
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
