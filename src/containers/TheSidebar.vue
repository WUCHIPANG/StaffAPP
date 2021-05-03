<template>
  <CSidebar fixed :minimize="minimize" :show="show" @update:show="(value) => $store.commit('set', ['sidebarShow', value])" style="font-size:18px;">
    <CSidebarBrand class="d-md-down-none" to="/">
      <!-- 網頁版LOGO -->
      <!-- <CIcon class="c-sidebar-brand-full" name="logo" size="custom-size" :height="35" viewBox="0 0 556 134" /> -->
      <!-- <CIcon class="c-sidebar-brand-minimized" name="logo" size="custom-size" :height="35" viewBox="0 0 110 134" /> -->
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="nav" />
    <!-- <CSidebarMinimizer class="d-md-down-none" @click.native="$store.commit('set', ['sidebarMinimize', !minimize])" /> -->
  </CSidebar>
</template>

<script>
// import nav from './_nav';

export default {
  name: 'TheSidebar',
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
    nav() {
      return [
        {
          _name: 'CSidebarNav',
          _children: [
            {
              _name: 'CSidebarNavTitle',
              _children: ['傳送人員'],
            },
            {
              _name: 'CSidebarNavItem',
              name: '帳號資訊',
              to: '/account',
              icon: 'cil-user',
            },
            {
              _name: 'CSidebarNavItem',
              name: '待接派單',
              to: '/waitingtask',
              icon: 'cilList',
            },

            {
              _name: 'CSidebarNavItem',
              name: '歷史接單',
              to: '/historytask',
              icon: 'cilHistory',
            },
            {
              _name: 'CSidebarNavItem',
              name: '出勤紀錄',
              to: '/attendance',
              icon: 'cilCalendar',
            },
            {
              _name: 'CSidebarNavItem',
              name: '異常通報',
              to: '/notice',
              icon: 'cilBellExclamation',
            },
          ],
        },
      ];
    },
  },
};
</script>
