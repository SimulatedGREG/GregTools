<style lang="scss">
  .mdl-slider-wrapper {
    color: rgba(0, 0, 0, .5);
    width: 300px;

    span {
      color: rgba(0, 0, 0, .5);
      float: right;
    }
  }
</style>

<template>
  <view-header title="Dash"></view-header>

  <div class="mdl-grid">
    <stream-editor></stream-editor>

    <div class="mdl-cell mdl-cell--4-col">
      <!-- <iframe src="http://www.twitch.tv/simulatedgreg/chat?popout=" frameborder="0" scrolling="no"></iframe> -->
    </div>
  </div>
</template>

<script>
  import Twitch from '../../vendor/twitch';
  import ViewHeader from '../ViewHeader.vue';
  import StreamEditor from './DashView/StreamEditor.vue';

  export default {
    data() {
      return {}
    },
    components: {
      ViewHeader,
      StreamEditor
    }
  }
</script>
