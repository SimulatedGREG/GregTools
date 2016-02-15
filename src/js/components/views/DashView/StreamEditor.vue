<style lang="scss">
  .mdl-slider-wrapper {
    color: rgba(0,0,0,.26);

    span { float: right; }
  }

  fieldset {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 1.5rem;

    .mdl-textfield,
    .mdl-slider-wrapper { width: 100%; }

    .mdl-button { float: right; }
  }

  legend {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
  }
</style>

<template>
  <fieldset>
    <legend>Stream Settings</legend>

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

    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="putChannel">
      Update
    </button>

  </fieldset>
</template>

<script>
  import Twitch from '../../../vendor/twitch';
  import Typeahead from 'vue-typeahead';
  import GamesTypeahead from './StreamEditor/GamesTypeahead.vue';

  export default {
    components: { GamesTypeahead },
    data() {
      return {
        Twitch: this.$root.Twitch
      }
    },
    methods: {
      putChannel() {
        this.$root.progressBar('show');
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
        }, () => {
          this.$root.auth(true);
          this.$root.toast('Channel Updated!');
          this.$root.progressBar('hide');
        });
      }
    },
    events: {
      'auth': function() {
        this.Twitch = this.$root.Twitch;
      }
    }
  }
</script>
