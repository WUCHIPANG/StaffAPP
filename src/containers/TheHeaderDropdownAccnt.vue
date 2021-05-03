<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar ">
          <img src="img/avatars/user.png" class="c-avatar-img userBorder" />
        </div>
      </CHeaderNavLink>
      <!-- <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge> -->
    </template>

    <CDropdownHeader tag="div" class="text-center" color="light">
      <!-- <strong>Settings</strong> -->
    </CDropdownHeader>

    <!-- <CDropdownDivider /> -->

    <CDropdownItem @click="logout()"> <CIcon name="cil-lock-locked" /> 登出 </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data() {
    return {
      itemsCount: 42,
    };
  },
  methods: {
    logout() {
      console.log('hi');
      this.$store.dispatch('userLogout');
    },
  },
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
