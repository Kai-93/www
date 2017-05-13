<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div id="popout" style="display: none">
      <h1>popout</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      count: function () {
        console.log(this.$store)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    width: 7.5rem;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
