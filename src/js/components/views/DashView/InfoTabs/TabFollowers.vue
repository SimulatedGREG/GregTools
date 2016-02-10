<style lang="scss">
  .mdl-data-table .user-logo {
    border-radius: 50%;
  }
</style>

<template>
  <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th></th>
        <th>Username</th>
        <th>Followed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="follow in follows">
        <td>
          <span class="mdl-list__item-primary-content">
            <img class="mdl-list__item-avatar" v-if="follow.user.logo" :src="follow.user.logo" />
            <i v-else class="material-icons mdl-list__item-avatar">person</i>
          </span>
        </td>
        <td>{{ follow.user.display_name }}</td>
        <td>{{ fuzzyTime(follow.created_at) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import Twitch from '../../../../vendor/twitch';
  import VagueTime from 'vague-time';

  export default {
    data() {
      return {
        follows: []
      }
    },
    methods: {
      getFollows() {
        /**
         * Get Recent Follower list
         */
        Twitch.api({ method: 'channels/' + this.$root.Twitch.channel.name + '/follows'}, (err, {follows}) => {
          this.follows = follows;
        });
      },
      fuzzyTime(time) {
        return VagueTime.get({
              to: new Date(time).getTime(),
              from: Date.now(),
              units: 'ms'
          });
      }
    },
    ready() {
      this.getFollows();
    }
  }
</script>
