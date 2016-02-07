<style lang="sass">

</style>

<template>
  <view-header title="Dash"></view-header>
  <div class="mdl-grid">
    <fieldset>
      <div class="mdl-cell mdl-cell--8-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="stream-title">
          <label class="mdl-textfield__label" for="stream-title">Title</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="stream-game">
          <label class="mdl-textfield__label" for="stream-game">Game</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="stream-lang">
          <label class="mdl-textfield__label" for="stream-lang">Language</label>
        </div>
      </div>
      <button class="mdl-button mdl-js-button mdl-button--raised">
        Update
      </button>
    </fieldset>
    <div class="mdl-cell mdl-cell--4-col">
      <!-- <iframe src="http://www.twitch.tv/simulatedgreg/chat?popout=" frameborder="0" scrolling="no"></iframe> -->
    </div>
  </div>
</template>

<script>
  import ViewHeader from '../ViewHeader.vue';

  export default {
    data() {
      return { }
    },
    components: { ViewHeader }
  }
</script>
