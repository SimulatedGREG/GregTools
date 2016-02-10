<style lang="scss">
  .mdl-navigation__link.active { background-color: #e0e0e0; }
</style>

<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">GregTools</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-link="{ path: '/dash', activeClass: 'active' }">Dash</a>
        <a class="mdl-navigation__link" v-link="{ path: '/chat', activeClass: 'active' }">Chat</a>
        <a class="mdl-navigation__link" v-link="{ path: '/poll', activeClass: 'active' }">Poll</a>
        <a class="mdl-navigation__link" v-link="{ path: '/alert', activeClass: 'active' }">Alerts</a>
        <a class="mdl-navigation__link" v-link="{ path: '/bot', activeClass: 'active' }">Bot</a>
        <a class="mdl-navigation__link" v-link="{ path: '/song', activeClass: 'active' }">Song</a>
      </nav>
      <profile-status></profile-status>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
        <snack-bar></snack-bar>
      </div>
    </main>
  </div>
</template>

<script>
  import ProfileStatus from './NavDrawer/ProfileStatus.vue';
  import SnackBar from './NavDrawer/SnackBar.vue';

  export default {
    data() {
      return { }
    },
    components: {
      ProfileStatus,
      SnackBar
    }
  }
</script>
