<template>
  <div style="font-size:26px;">
    <CCard>
      <CCardHeader>待接派單</CCardHeader>
      <CCardBody>
        <CAlert color="secondary" :show.sync="alert1" class="alert-dismissible">
          <CRow>
            <CCol>編號:120210420164</CCol>
          </CRow>
          <CRow>
            <CCol>時間:4/20 17:40:40</CCol>
          </CRow>
          <CRow>
            <CCol>起始地點:2F藥局</CCol>
          </CRow>
          <CRow>
            <CCol>目的地:10F護理站</CCol>
          </CRow>
          <!-- <CButton
            class="position-absolute"
            color="secondary"
            style="right:10px;top: 50%;transform: translateY(-50%);"
            @click="
              alert1 = false;
              currently('120210420165534');
            "
          >
            接受
          </CButton> -->
          <div class="dragVerify">
            <drag-verify
              ref="dragVerify"
              :width="300"
              :isPassing.sync="isPassing1"
              text="接單請滑動"
              successText="完成派單"
              background="#ccc"
              completedBg="rgb(0, 102, 204)"
              progressBarBg="#00BB00"
              handlerIcon="fa fa-angle-double-right"
              successIcon="fa fa-check"
              radius="8px"
             
              @passcallback="passcallback"
            >
            </drag-verify>
          </div>
        </CAlert>
        <CAlert color="secondary" :show.sync="alert2" class="alert-dismissible">
          <CRow>
            <CCol>編號:202104259582</CCol>
          </CRow>
          <CRow>
            <CCol>時間:4/20 17:43:29</CCol>
          </CRow>
          <CRow>
            <CCol>起始地點:12F藥局</CCol>
          </CRow>
          <CRow>
            <CCol>目的地:8F護理站</CCol>
          </CRow>
          <!-- <CButton
            class="position-absolute"
            color="secondary"
            style="right:10px;top: 50%;transform: translateY(-50%);"
            @click="
              alert2 = false;
              currently('120210420165534');
            "
          >
            接受
          </CButton> -->
          <div class="dragVerify">
            <drag-verify
              ref="dragVerify"
              :width="300"
              :isPassing.sync="isPassing1"
              text="接單請滑動"
              successText="完成派單"
              background="#ccc"
              completedBg="rgb(0, 102, 204)"
              progressBarBg="#00BB00"
              handlerIcon="fa fa-angle-double-right"
              successIcon="fa fa-check"
              radius="8px"
              @passcallback="passcallback1(120210420165534)"
            >
            </drag-verify>
          </div>
        </CAlert>
      </CCardBody>
    </CCard>
     <div>
      <CModal :show.sync="darkModal" :no-close-on-backdrop="true" :centered="true" title="Modal title 2" size="lg" color="dark" style="font-size:28px;">
        負責區域:A棟8樓B區(A08B)<br />
        型態:固定駐點
        <template #header>
          <h5 class="modal-title">今日負責</h5>
          <CButtonClose @click="darkModal = false" class="text-white" />
        </template>
        <template #footer>
          <!-- <CButton @click="darkModal = false" color="danger">確定</CButton> -->
          <CButton @click="darkModal = false" color="success" size="lg">確認</CButton>
        </template>
      </CModal>
    </div>
  </div>
</template>
<script>
import dragVerify from 'vue-drag-verify2';
import 'font-awesome/css/font-awesome.min.css';
export default {
  name: 'TaskList',
  data() {
    return {
      alert1: true,
      alert2: true,
      isPassing1: false,
      isPassing2: false,
       darkModal: true,

    };
  },
  components: { dragVerify },
  methods: {
    showDismissibleAlerts() {
      ['alert1', 'alert2'].forEach((alert) => (this[alert] = true));
    },
    currently(num) {
      this.$router.push('/CurrentlyTask' + '/' + num);
    },
    passcallback(num) {
      this.$router.push('/CurrentlyTask' + '/' + num);
    },
    passcallback1(num) {
      this.$router.push('/CurrentlyTask' + '/' + num);
    },
  },
};
</script>
