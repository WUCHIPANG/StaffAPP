<template>
  <CCard>
    <CCardBody>
      <CDataTable :items="items" :fields="fields" table-filter items-per-page-select :items-per-page="10" hover sorter pagination> </CDataTable>
    </CCardBody>
  </CCard>
</template>
<script>
const items = [
  { date: '2021/4/29', start: '08:25', complete: '18:29' },
  { date: '2021/4/28', start: '08:30', complete: '18:40' },
  { date: '2021/4/25', start: '08:22', complete: '18:32' },
  { date: '2021/4/24', start: '08:26', complete: '18:33' },
  { date: '2021/4/23', start: '08:30', complete: '18:38' },
  { date: '2021/4/20', start: '08:25', complete: '18:27' },
  { date: '2021/4/18', start: '08:28', complete: '18:38' },
  { date: '2021/4/17', start: '08:19', complete: '18:33' },
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
        { key: 'date', label: '日期' },
        { key: 'start', label: '上班時間' },
        { key: 'complete', label: '下班時間' },
        // { key: 'task', label: '任務內容' },
        // {
        //   key: 'show_details',
        //   label: '',
        //   _style: 'width:1%',
        //   sorter: false,
        //   filter: false,
        // },
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
