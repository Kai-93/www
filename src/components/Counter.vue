<template>
  <div class="counter">
    <p>Value: {{ getCount }}</p>
    <button @click="counterAdd">+</button>
    <button @click="counterSub">-</button>
    <br>
    <a href="javascript:;" @click="counter">counter</a>
    <br>
    <my-btn @click="btnClick" :data="msg">base</my-btn>
    <router-view></router-view>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import btn from './btn/btn.vue'
  export default {
    data () {
      return {
        msg: 'btn Vue Counter'
      }
    },
    components: {
      'my-btn': btn
    },
    computed: mapGetters([
      'getCount'
    ]),
    methods: {
      ...mapActions([
        'counterAdd',
        'counterSub'
      ]),
      counter: function () {
        console.log(btn)
      },
      btnClick (callback) {
        console.log('btnClick: ')
        callback()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .counter {
    background: #fff;
    font-size: .5rem;
    p {
      color: green;
    }
    a {
      color: red;
    }
    button {
      width: 1rem;
      height: 1rem;
      font-size: .5rem;
    }
  }
</style>
