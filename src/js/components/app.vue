<style lang="scss">
  @import 'vars';
  p { color: $blue; }
</style>

<template>
  <p>hello there, {{somefunction()}}</p>
</template>

<script>
  export default {
    data() {
      return {
        name: 'greg'
      }
    },

    methods: {
      somefunction () {
        return 'fired';
      }
    }
  }
</script>
