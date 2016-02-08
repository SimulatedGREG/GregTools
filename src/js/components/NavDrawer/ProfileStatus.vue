<style lang="scss">
  .mdl-list {
    bottom: 0;
    position: absolute;
    width: 100%;
  }
</style>

<template>

  <div class="mdl-list">
    <div class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <span>Bob Odenkirk</span>
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
  export default {
    data() { return {} },
    methods: {
      login() {
        Twitch.login({
          scope: ['user_read', 'channel_read']
        });
        setTimeout(() => {
          Twitch.api({ method: 'channel' }, (err, channel) => {
            // console.log(channel);
          });
        },4000);
      }
    }
  }
</script>
