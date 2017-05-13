<template>
  <v-touch class="children" v-on:swipe="onSwipeLeft">children</v-touch>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'btn Vue Counter'
      }
    },
    methods: {
      onSwipeLeft () {
        alert('children')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .children {
    font-size: .5rem;
    color: red;
    width: 100%;
    height: 100vh;
    background: #c0c0c0;
  }
</style>
