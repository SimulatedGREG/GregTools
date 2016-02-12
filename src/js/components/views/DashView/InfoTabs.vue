<style lang="scss">
  .mdl-tabs__panel {
    border-bottom: 1px solid rgba(0, 0, 0, .12);
    border-top: 1px solid rgba(0, 0, 0, .12);
    height: calc(100vh - 235px);
    margin-top: -1px;
    overflow: auto;
  }
</style>

<template>
  <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
    <div class="mdl-tabs__tab-bar">
        <a href="#starks-panel" class="mdl-tabs__tab is-active">Follows</a>
        <a href="#lannisters-panel" class="mdl-tabs__tab">Hosts</a>
        <a href="#targaryens-panel" class="mdl-tabs__tab">Subscribers</a>
    </div>

    <div class="mdl-tabs__panel is-active">
      <tab-follows></tab-follows>
    </div>
    <div class="mdl-tabs__panel">
      <tab-hosts></tab-hosts>
    </div>
    <div class="mdl-tabs__panel">
      <tab-subscribers></tab-subscribers>
    </div>
  </div>
</template>

<script>
  import TabFollows from './InfoTabs/TabFollows.vue';
  export default {
    data() {
      return {}
    },
    components: {
      TabFollows
    }
  }
</script>
