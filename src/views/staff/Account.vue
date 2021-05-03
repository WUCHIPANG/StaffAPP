<template>
  <div style="font-size:28px;">
    <CRow>
      <template>
        <CCol md="3" sm="6">
          <div data-v-0df02b34="" class="card">
            <div class="card-header content-center text-white p-0 bg-warning">
              <CIcon name="cil-calendar" height="40" class="my-3" />
            </div>

            <div class="card-body row text-center">
              <div class="col">
                <CButton block color="dark" type="submit" variant="outline">上班</CButton>
              </div>
              <div class="c-vr"></div>
              <div class="col">
                <CButton block color="dark" type="submit" variant="outline">下班</CButton>
              </div>
            </div>
          </div>
        </CCol>
      </template>
    </CRow>
    <CRow>
      <template>
        <CCol md="3" sm="6">
          <div data-v-0df02b34="" class="card">
            <div class="card-header content-center text-white p-0 bg-info">
              <CIcon name="cilMug" height="40" class="my-2" />
            </div>

            <div class="card-body row text-center">
              <div class="col">
                <CButton block color="dark" type="submit" variant="outline">繼續接單</CButton>
              </div>
              <!-- <div class="c-vr"></div>
              <div class="col">
                <CButton block color="dark" type="submit" variant="outline">下班</CButton>
              </div> -->
            </div>
          </div>
        </CCol>
      </template>
    </CRow>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol> <CInput label="帳號" placeholder="" autocomplete="username" v-model="username" horizontal disabled/></CCol>
        </CRow>
        <CRow>
          <CCol> <CInput label="密碼" type="password" autocomplete="curent-password" v-model="password" horizontal/></CCol>
        </CRow>
        <CRow>
          <CCol>
            <CInputFile label="上傳頭像" horizontal />
          </CCol>
          <!-- <CCol style="margin-left:15px;margin-right:15px;">
            <input id="uid-eks96atd1j" type="file" class="custom-file-input" />
            <label for="uid-8tpbgr962h3" class="custom-file-label"> 選擇頭像檔案 </label>
            </CCol> -->
        </CRow>
        <div class="form-group form-actions positionR" style="height:50px;">
          <CButton block color="dark" type="submit" variant="outline" class="sendButton" style="left:160px">送出</CButton>
        </div>
        <div>
          <strong>業務範圍:</strong>
          A棟8FB區(A08-B)
        </div>

        <div style="margin-top:10px;">
          <CCard>
            <CCardHeader>
              任務內容
            </CCardHeader>
            <CCardBody>
              <CTabs variant="pills">
                <CTab active>
                  <template slot="title"> {{ tabs[0] }} </template>
                  <!-- 推床 -->
                </CTab>
                <CTab>
                  <template slot="title"> {{ tabs[1] }} </template>
                  <!-- 檢查 -->
                </CTab>
                <CTab>
                  <template slot="title"> {{ tabs[2] }} </template>
                  <!-- 半套 -->
                </CTab>
                <CTab>
                  <template slot="title"> {{ tabs[3] }} </template>
                  <!-- 回病房 -->
                </CTab>
              </CTabs>
            </CCardBody>
          </CCard>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import { CChartLineSimple } from '../charts/index.js';
export default {
  name: 'AddTask',
  components: {
    CChartLineSimple,
  },
  props: {
    noCharts: Boolean,
  },
  data() {
    return {
      username: 'demo',
      password: '83202426',
      tabs1: ['清床'],
      tabs: ['領藥', '推床', '血庫', '檢體'],
      // tabs: ['OR', '檢查', 'x光', '半套', '回病房', '物件遞送', '治療', '會診', '送藥', '血庫', '檢體', '轉床', '支援急診', '支援99', '演習', '傳送', '檢體', '掃藥'],
      activeTab: 1,
    };
  },
};
</script>
<style scoped>
.c-chart-brand {
  position: absolute;
  width: 100%;
  height: 100px;
}
</style>
