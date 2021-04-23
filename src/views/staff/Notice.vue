<template>
  <div>
    <CCard>
      <CCardBody>
        <CForm>
          <CSelect label="異常通報" horizontal :options="options" placeholder="Please select" />

          <CTextarea label="備註" placeholder="Content..." horizontal rows="9" />
          <div class="form-group form-actions positionR">
            <CButton block color="dark" type="submit" variant="outline" class="sendButton">送出</CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>
