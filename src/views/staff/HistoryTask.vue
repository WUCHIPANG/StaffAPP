<template>
  <CCard style="font-size:24px;">
    <CCardBody>
      <CDataTable :items="items" :fields="fields" table-filter column-filter hover sorter pagination>
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">
              {{ item.status }}
            </CBadge>
          </td>
        </template>
        <template #show_details="{item, index}">
          <td class="py-2">
            <CButton color="primary" variant="outline" square size="sm" @click="toggleDetails(item, index)">
              {{ Boolean(item._toggled) ? '隱藏' : '詳細' }}
            </CButton>
          </td>
        </template>
        <template #details="{item}">
          <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
            <CCardBody>
              <div>開始時間: <br />2021/04/19 21:06:53</div>
              <div>結束時間: <br />2021/04/19 21:26:53</div>
              <!-- <div style="visibility: hidden;">11</div> -->
              <div style="width:100%; text-align:right; margin-top:2px;">共花費 20分鐘</div>
            </CCardBody>
          </CCollapse>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>
<script>
const items = [
  { number: '202104192', start: '2021/01/01 10:08', complete: '2021/01/01 14:25', task: '檢體運送' },
  { number: '202104154', start: '2021/01/01 10:08', complete: '2021/01/01 10:23', task: '藥物傳送' },
  { number: '202104121', start: '2021/01/01 10:08', complete: '2021/01/01 10:23', task: '病人檢查' },
  { number: '202104096', start: '2021/01/01 10:08', complete: '2021/01/01 10:23', task: '領藥' },
  { number: '202104198', start: '2021/01/01 10:08', complete: '2021/01/01 14:25', task: '檢體運送' },
  { number: '202104191', start: '2021/01/01 10:08', complete: '2021/01/01 10:23', task: '藥物傳送' },
  { number: '202104121', start: '2021/01/01 10:08', complete: '2021/01/01 10:23', task: '病人檢查' },
  { number: '202104090', start: '2021/01/01 10:08', complete: '2021/01/01 10:23', task: '領藥' },
];

export default {
  name: 'AdvancedTables',
  data() {
    return {
      items: items.map((item, id) => {
        return { ...item, id };
      }),
      // fields,
      details: [],
      collapseDuration: 0,
    };
  },
  computed: {
    // items() {
    //   items.map((item, id) => {
    //     console.log('item:', item, id);
    //     return { ...item, id };
    //   });
    // },
    fields() {
      return [
        { key: 'number', label: '派單編號' },
        // { key: 'start', label: '開始時間' },
        // { key: 'complete', label: '完成時間' },
        { key: 'task', label: '內容' },
        {
          key: 'show_details',
          label: '',
          _style: 'width:25%',
          sorter: false,
          filter: false,
        },
      ];
    },
  },
  mounted() {
    console.log('fields', fields, 'items', items);
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case 'Active':
          return 'success';
        case 'Inactive':
          return 'secondary';
        case 'Pending':
          return 'warning';
        case 'Banned':
          return 'danger';
        default:
          'primary';
      }
    },
    toggleDetails(item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
  },
};
</script>
