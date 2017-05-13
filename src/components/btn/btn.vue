<template>
  <div>
    <a href="javascript:;" @click="btn_click">{{data}}</a>
    <a href="javascript:;" @click="btn_click_2">{{msg}}</a>
  </div>
</template>
<script>
  export default{
    props: ['data'],
    data () {
      return {
        msg: 'btn vue'
      }
    },
    methods: {
      btn_click () {
        this.$emit('click', function () {
          console.log('callback')
        })
      },
      btn_click_2 () {
        console.log('btn inner event')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
