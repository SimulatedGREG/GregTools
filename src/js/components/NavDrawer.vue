<style lang="scss">

</style>

<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">GregTools</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-link="{ path: '/dash' }">Dash</a>
        <a class="mdl-navigation__link" v-link="{ path: '/chat' }">Chat</a>
        <a class="mdl-navigation__link" v-link="{ path: '/poll' }">Poll</a>
        <a class="mdl-navigation__link" v-link="{ path: '/alert' }">Alerts</a>
        <a class="mdl-navigation__link" v-link="{ path: '/bot' }">Bot</a>
        <a class="mdl-navigation__link" v-link="{ path: '/song' }">Song</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return { }
    }
  }
</script>
