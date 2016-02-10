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
      return {
        Twitch: this.$root.Twitch
      }
    },
    methods: {
      putChannel() {
        Twitch.api({
          method: 'channels/' + this.Twitch.channel.name,
          params: {
            channel: {
              status: this.Twitch.channel.status,
              game: this.Twitch.channel.game,
              delay: this.Twitch.channel.delay
            }
          },
          verb: 'PUT'
        }, () => { this.$root.auth(true); });
      }
    },
    events: {
      'auth': function() {
        this.Twitch = this.$root.Twitch;
      }
    },
    components: {
      ViewHeader,
      StreamEditor
    }
  }
</script>
