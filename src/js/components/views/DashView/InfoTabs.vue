<style lang="scss">
</style>

<template>
  <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
    <div class="mdl-tabs__tab-bar">
        <a href="#starks-panel" class="mdl-tabs__tab is-active">Followers</a>
        <a href="#lannisters-panel" class="mdl-tabs__tab">Hosts</a>
        <a href="#targaryens-panel" class="mdl-tabs__tab">Subscribers</a>
    </div>

    <div class="mdl-tabs__panel is-active" id="starks-panel">
      <tab-followers></tab-followers>
    </div>
    <div class="mdl-tabs__panel" id="lannisters-panel">
      <tab-hosts></tab-hosts>
    </div>
    <div class="mdl-tabs__panel" id="targaryens-panel">
      <tab-subscribers></tab-subscribers>
    </div>
  </div>
</template>

<script>
  import TabFollowers from './InfoTabs/TabFollowers.vue';
  export default {
    data() {
      return {}
    },
    components: {
      TabFollowers
    }
  }
</script>
