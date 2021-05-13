<template>
  <div style="font-size:28px;">
    <CCard>
      <CCardBody>
        <CForm>
          <CSelect label="中斷/異常 通報" horizontal :options="['暫停目前派單', '終止目前派單','異常通報']" placeholder="" />
          <CTextarea label="備註" placeholder="" horizontal rows="9" />
          <!-- <div class="form-group form-actions positionR">
            <CButton block color="dark" type="submit" variant="outline" class="sendButton">送出</CButton>
          </div> -->
          <div class="dragVerify" style="margin-left:20px;">
            <drag-verify
              ref="dragVerify"
              :width="300"
              :isPassing.sync="isPassing2"
              text="回報"
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
          </div>
        </CForm>
      </CCardBody>
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
