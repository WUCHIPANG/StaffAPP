<template>
  <div style="font-size:28px;">
    <CCard>
      <CCardBody>
        <CForm>
          <div class="positionR">
            <CButton block color="dark" type="submit" variant="outline" class="sendButton" @click="passcallback1()" size="lg">派單中斷回報</CButton>
          </div>
          <CRow>
            <CCol sm="3">派單編號</CCol>
            <CCol sm="9" class="contentFont">{{ this.$route.params.num }}</CCol>
          </CRow>

          <CRow>
            <CCol sm="3">時間</CCol>
            <CCol sm="9" class="contentFont">2021/04/09 10:52:16</CCol>
          </CRow>
          <CInput label="任務內容" placeholder="領藥" horizontal disabled />
          <CTextarea label="" placeholder="藥品名稱A,藥品名稱C" horizontal rows="9" disabled />
          <CInput label="起始地點" placeholder="2F藥局" horizontal disabled />
          <CInput label="目的地" placeholder="10F護理站" horizontal disabled />

          <CTextarea label="備註" placeholder="" horizontal rows="9" disabled />
        </CForm>
      </CCardBody>
      <CCardFooter style="margin:auto;">
        <div class="dragVerify">
          <drag-verify
            ref="dragVerify"
            :width="300"
            :isPassing.sync="isPassing1"
            text="完成請滑動"
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
        <!-- <div class="dragVerify">
          <drag-verify
            ref="dragVerify"
            :width="300"
            :isPassing.sync="isPassing2"
            text="派單中斷回報"
            successText="回報"
            background="#ccc"
            completedBg="rgb(0, 102, 204)"
            progressBarBg="#00BB00"
            handlerIcon="fa fa-angle-double-right"
            successIcon="fa fa-check"
            radius="8px"
            @passcallback="passcallback1"
          >
          </drag-verify>
        </div> -->
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import dragVerify from 'vue-drag-verify2';
import 'font-awesome/css/font-awesome.min.css';
export default {
  data() {
    return {
      isPassing1: false,
      isPassing2: false,
    };
  },
  components: { dragVerify },
  methods: {
    passcallback() {
      this.$router.push('/WaitingTask');
    },
    passcallback1() {
      this.$router.push('/Interrupt');
    },
  },
};
</script>
<style scoped>
/* >>> .dv_handler {
  height: 30px !important;
} */
</style>
