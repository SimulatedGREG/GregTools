<style lang="scss">

</style>

<template>
  <nav-drawer></nav-drawer>
</template>

<script>
  import NavDrawer from './components/NavDrawer.vue';

  export default {
    data() {
      return {
        authenticated: false
      }
    },
    methods: {
      auth(status) {
        this.$broadcast('auth-update', status);
      }
    },
    components: { NavDrawer }
  }
</script>
