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
      <div class="mdl-cell mdl-cell--8-col">
        <fieldset>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{ 'is-dirty': Twitch.channel.status }">
            <input class="mdl-textfield__input" type="text" id="stream-title" v-model="Twitch.channel.status">
            <label class="mdl-textfield__label" for="stream-title">Title</label>
          </div>

          <games-typeahead></games-typeahead>

          <p class="mdl-slider-wrapper">
            <label for="stream-delay">
              Delay
              <span>{{ Twitch.channel.delay }} seconds</span>
            </label>
            <input class="mdl-slider mdl-js-slider" id="stream-delay" type="range" min="0" max="60" v-model="Twitch.channel.delay">
          </p>

          <button class="mdl-button mdl-js-button mdl-button--raised" @click="updateChannel">
            Update
          </button>

      </fieldset>
    </div>

    <div class="mdl-cell mdl-cell--4-col">
      <!-- <iframe src="http://www.twitch.tv/simulatedgreg/chat?popout=" frameborder="0" scrolling="no"></iframe> -->
    </div>
  </div>
</template>

<script>
  import ViewHeader from '../ViewHeader.vue';
  import GamesTypeahead from './DashView/GamesTypeahead.vue';

  export default {
    data() {
      return {
        Twitch: this.$root.Twitch
      }
    },
    methods: {
      updateChannel() {
        console.log(this.channelSettings);
      }
    },
    events: {
      'auth': function() {
        this.Twitch = this.$root.Twitch;
      }
    },
    components: {
      ViewHeader,
      GamesTypeahead
    }
  }
</script>
