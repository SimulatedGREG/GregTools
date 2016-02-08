<style lang="scss">
  .mdl-list {
    bottom: 0;
    position: absolute;
    width: 100%;
  }
</style>

<template>

  <div class="mdl-list">
    <div class="mdl-list__item" v-if="!authenticated">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <span>Login...</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <button class="mdl-button mdl-js-button mdl-button--icon" @click="auth">
          <i class="material-icons">exit_to_app</i>
        </button>
      </span>
    </div>

    <div class="mdl-list__item" v-if="authenticated">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <span>Bob Odenkirk</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">exit_to_app</i>
        </button>
      </span>
    </div>
  </div>

  {{test}}

</template>

<script>
  import Twitch from '../../vendor/twitch';

  export default {
    data() {
      return {
        authenticated: false
      }
    },
    methods: {
      auth() {
        Twitch.login({
          scope: ['user_read', 'channel_read']
        });
      }
    },
    events: {
      'auth-update': function(status) {
        this.authenticated = status;
      }
    }
  }
</script>
