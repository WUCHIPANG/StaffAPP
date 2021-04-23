<template>
  <div>
    <CCard>
      <CCardHeader>待接派單</CCardHeader>
      <CCardBody>
        <CAlert color="secondary" :show.sync="alert1" class="alert-dismissible">
          <CRow>
            <CCol>編號:120210420165534</CCol>
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
          <CButton
            class="position-absolute"
            color="secondary"
            style="right:10px;top: 50%;transform: translateY(-50%);"
            @click="
              alert1 = false;
              currently('120210420165534');
            "
          >
            接受
          </CButton>
        </CAlert>
        <CAlert color="secondary" :show.sync="alert2" class="alert-dismissible">
          <CRow>
            <CCol>編號:120210420165534</CCol>
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
          <CButton
            class="position-absolute"
            color="secondary"
            style="right:10px;top: 50%;transform: translateY(-50%);"
            @click="
              alert2 = false;
              currently('120210420165534');
            "
          >
            接受
          </CButton>
        </CAlert>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
export default {
  name: 'TaskList',
  data() {
    return {
      alert1: true,
      alert2: true,
    };
  },
  computed: {},
  methods: {
    showDismissibleAlerts() {
      ['alert1', 'alert2'].forEach((alert) => (this[alert] = true));
    },
    currently(num) {
      this.$router.push('/CurrentlyTask' + '/' + num);
    },
  },
};
</script>
