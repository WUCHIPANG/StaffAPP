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
                    <input type="hidden" id="device_id" value="" />

                    <div class="col-md-5 unbind" style="">
                      <label for="username" class="form-label">綁定名稱：</label><input type="text" id="username" class="form-control" placeholder="請輸入名稱" />
                    </div>
                    <input id="device_id" type="hidden" />
                    <div class="col-md-5 unbind" style="">
                      <button type="button" id="bind" class="btn btn-warning" @click="testbtn()">
                        綁定
                      </button>
                    </div>
                    <div class="col-md-5 bind" style="display: none;">
                      <label for="username" class="form-label"
                        >已綁定名稱：
                        <p id="bind_name"></p>
                      </label>
                    </div>
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
                          @click="
                            login(username, password);
                            testbtn();
                          "
                          >登入</CButton
                        >
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
      darkModal: false,
       inject: ['messaging'],
    };
  },
  setup() {
    const messaging = inject('messaging')

    console.log('Firebase cloud messaging object', messaging)
  },
  mounted() {

      console.log('Firebase cloud messaging object', this.$messaging)
      messaging.getToken({ vapidKey: 'BFAWhU1AnnjtL2WHMzsay0zhi7XLLFMoOhxpY4_tmtOt7Ze_KwVwasd2CAa6S5FKUYaCKtif58Ft4-eiBAAUEok' })
    
    app.messaging().getToken({ vapidKey: 'BFAWhU1AnnjtL2WHMzsay0zhi7XLLFMoOhxpY4_tmtOt7Ze_KwVwasd2CAa6S5FKUYaCKtif58Ft4-eiBAAUEok' })
.then((currentToken) => {
  if (currentToken) {
    console.log('client token', currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
})
    //  
    // console.log('123');
    // $('.bind').hide();
    // $('.unbind').hide();
    // setTimeout(function() {
    // //   var device_id = $('#device_id').val();
    //   console.log('device_id', device_id);
    //   $.post(
    //     'https://porter-alpha.dynacloud.co/ajax.php',
    //     {
    //       device_id: device_id,
    //       action: 'check',
    //     },
    //     function(result) {
    //       if (result.status == true) {
    //         $('#bind_name').html(result.message);
    //         $('#send_user')
    //           .find('option[value="' + result.id + '"]')
    //           .attr('selected', true);
    //         $('.bind').show();
    //       } else {
    //         $('.unbind').show();
    //       }
    //     },
    //     'json'
    //   );
    // }, 1000);
  },
  methods: {
    login() {},
    testbtn(event) {
      console.log('測試');
      $('#bind').click(function(event) {
        console.log('綁定');
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          event.returnValue = false;
        }
        var username = $('#username').val();
        var device_id = $('#device_id').val();
        var msg = '';
        if (username == '') {
          msg = msg + '請輸入名稱\n';
        }
        if (device_id == '') {
          msg = msg + '請先允許瀏覽器取得通知權限\n';
        }
        if (msg == '') {
          $.post(
            'https://porter-alpha.dynacloud.co/ajax.php',
            {
              username: username,
              device_id: device_id,
              action: 'bind',
            },
            function(result) {
              if (result.status == true) {
                window.location.reload();
              } else {
                alert(result.message);
              }
            },
            'json'
          );
        } else {
          alert(msg);
        }
      });
      setTimeout(() => {
        let data = {
          user: this.username,
          password: secret.Encrypt(this.password),
        };

        this.$store.dispatch('userLogin', data);
      }, 1000);
    },
    unbind(event) {
      console.log('解除');
      //解除綁定
      $('#unbind').click(function(event) {
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          event.returnValue = false;
        }
        var device_id = $('#device_id').val();
        var msg = '';
        if (device_id == '') {
          msg = msg + '請輸入要解綁的Token\n';
        }
        if (msg == '') {
          $.post(
            'https://porter-alpha.dynacloud.co/ajax.php',
            {
              device_id: device_id,
              action: 'unbind',
            },
            function(result) {
              console.log(result);
              if (result.status == true) {
                alert(result.message);
                window.location.reload();
              } else {
                alert(result.message);
              }
            },
            'json'
          );
        } else {
          alert(msg);
        }
      });
    },
  },
};
</script>
<style>
input::placeholder {
  font-size: 20px;
}
</style>
