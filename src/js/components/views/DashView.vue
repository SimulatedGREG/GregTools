<style lang="sass">

</style>

<template>
  <h1>hello {{ view }}</h1>
  <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" @click="login()" class="twitch-connect" href="#" />
  <h6 @click="logout()">logout</h6><br>
  <h6 @click="status()">status</h6><br>
  <h6 @click="init()">init</h6>
</template>

<script>
  import $ from 'jquery';
  import Twitch from '../../vendor/twitch';

  export default {
    data() {
      return {
        view: 'dash'
      }
    },
    methods: {
      init() {
        Twitch.init({
          clientId: 'fkk3fkefezb58675yxpxu4ggh5ydgoq',
          electron: true
        }, function(error, status) {
          if (error) {
            console.log(error);
          }
        });
      },
      login() {
        Twitch.login({
          scope: ['user_read', 'channel_read']
        });
      },
      logout() {
        Twitch.logout((err) => {
          console.log(err);
        });
      },
      status() {
        Twitch.getStatus({}, function(err, status) {
          if (status.authenticated) {
            console.log('authenticated!');
          }
          console.log(status);
        });
      }
    }
  }
</script>
