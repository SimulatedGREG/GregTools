<style lang="scss">

</style>

<template>
  <nav-drawer></nav-drawer>
</template>

<script>
  import Twitch from './vendor/twitch';
  import NavDrawer from './components/NavDrawer.vue';

  export default {
    data() {
      return {
        Twitch: {
          authenticated: false,
          channel: null
        }
      }
    },
    methods: {
      auth(status) {
        if(status) {
          this.Twitch.authenticated = true;
          /**
           * Get Channel info
           */
          Twitch.api({ method: 'channel' }, (err, channel) => {
            this.Twitch.channel = channel;
            let delay = this.Twitch.channel.delay;
            this.Twitch.channel.delay = (delay === null) ? 0 : delay;
            /**
             * Broadcast `auth` to listening child components
             */
            this.$broadcast('auth');
          });
        } else {
          this.Twitch = {
            authenticated: false,
            channel: null
          };
        }
      },
      toast(message) {
        var notification = document.querySelector('.mdl-js-snackbar');
        notification.MaterialSnackbar.showSnackbar({ message });
      }
    },
    components: { NavDrawer }
  }
</script>
