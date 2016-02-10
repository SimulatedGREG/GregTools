<template>
  <div class="typeahead">
    <i class="fa fa-spinner fa-spin" v-if="loading"></i>
    <template v-else>
      <i class="fa fa-search" v-show="isEmpty"></i>
      <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
    </template>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-bind:class="{ 'is-dirty': $parent.Twitch.channel.game }">
      <input type="text"
             autocomplete="off"
             id="stream-game"
             class="mdl-textfield__input"
             v-model="query"
             @keydown.down="down"
             @keydown.up="up"
             @keydown.enter="hit"
             @keydown.esc="reset"
             @blur="reset"
             @input="update"/>
      <label class="mdl-textfield__label" for="stream-game">Game</label>
   </div>
    <ul v-show="hasItems">
      <li v-for="item in items" :class="activeClass($index)" @mousedown="hit" @mousemove="setActive($index)">
        <span class="name" v-text="item.name"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Typeahead from 'vue-typeahead';

  export default {
    mixins: [Typeahead],
    data() {
      return {
        limit: 5,
        src: 'https://api.twitch.tv/kraken/search/games?type=suggest',
        query: this.$parent.Twitch.channel.game,
        onHit (item) {
          this.query = item.name;
          this.$parent.Twitch.channel.game = item.name;
          this.reset();
        },
        prepareResponseData(data) {
          return data.games;
        }
      }
    },
    methods: {
      reset() {
        this.items = [];
        this.loading = false;
      }
    }
  }
</script>
