<style lang="scss">
  
</style>

<template>
  <view-header title="Dash"></view-header>

  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col">
      <stream-editor></stream-editor>
    </div>

    <div class="mdl-cell mdl-cell--6-col">
      <info-tabs></info-tabs>
    </div>
  </div>
</template>

<script>
  import Twitch from '../../vendor/twitch';
  import ViewHeader from '../ViewHeader.vue';
  import StreamEditor from './DashView/StreamEditor.vue';
  import InfoTabs from './DashView/InfoTabs.vue';

  export default {
    data() {
      return {}
    },
    components: {
      ViewHeader,
      StreamEditor,
      InfoTabs
    }
  }
</script>
