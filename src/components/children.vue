<template>
  <div>
    <v-touch class="children" v-on:tap="vue_touch_event">children</v-touch>
    <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
      <div v-show="bolIsShow" class="red"></div>
    </transition>
    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false">
      <div v-show="bolIsShow" class="red"></div>
    </transition>
    <transition
        appear
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
      <div v-show="!bolIsShow" class="red"></div>
    </transition>
    <transition
        appear
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false">
      <div v-show="!bolIsShow" class="red"></div>
    </transition>
  </div>
</template>
<script>
  /* eslint-disable */
  export default {
    data () {
      return {
        msg: 'btn Vue Counter',
        bolIsShow: false
      }
    },
    methods: {
      vue_touch_event () {
        let vm = this
        vm.bolIsShow = !vm.bolIsShow
        vm.$nextTick(function () {
          console.log(0)
        })
      },

      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
        Velocity(el, {fontSize: '1em'}, {complete: done})
      },
      leave: function (el, done) {
        Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
        Velocity(el, {rotateZ: '100deg'}, {loop: 2})
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, {complete: done})
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .children {
    text-align: center;
    font-size: .5rem;
    color: red;
    width: 40%;
    height: 30%;
    background: #c0c0c0;
  }

  .red {
    width: 100px;
    height: 100px;
    background: red;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s, width .5s, height .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-out .5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
