<style lang="scss">
  .mdl-list {
    bottom: 0;
    position: absolute;
    width: 100%;

    .mdl-list__item-primary-content span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 103px;
    }
  }
</style>

<template>

  <div class="mdl-list">

    <div class="mdl-list__item" v-if="Twitch">
      <span class="mdl-list__item-primary-content">
        <img v-bind:src="Twitch.channel.logo" class="mdl-list__item-avatar">
        <span>{{ Twitch.channel.display_name }}</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">settings</i>
        </button>
      </span>
    </div>

    <div class="mdl-list__item" v-else>
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <span>Login...</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <button class="mdl-button mdl-js-button mdl-button--icon" @click="login">
          <i class="material-icons">exit_to_app</i>
        </button>
      </span>
    </div>

  </div>

</template>

<script>
  import Twitch from '../../vendor/twitch';

  export default {
    data() {
      return {
        Twitch: false
      }
    },
    methods: {
      login() {
        Twitch.login({
          scope: ['user_read', 'channel_read']
        });
      }
    },
    events: {
      'auth': function(status) {
        this.Twitch = this.$root.Twitch;
      }
    }
  }
</script>
