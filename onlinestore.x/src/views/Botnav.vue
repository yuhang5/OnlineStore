<template>
    <div> 
        <transition :name="transitionName">
            <router-view class="Router"></router-view>
        </transition>
        
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @change="changeHandler"
            class="bot">
        
    </cube-tab-bar>
    <span class="cartsum">{{cartsum}}</span>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      transitionName:'slide-right',
      selectedLabelDefault: 'Home',
      tabs: [
      {
        label: 'Home',
        icon: 'cubeic-home'
      }, 
      {
        label: 'Category',
        icon: 'cubeic-tag'
      }, 
      {
        label: 'Search',
        icon: 'cubeic-search'
      }, 
      {
        label: 'Cart',
        icon: 'cubeic-mall'
      },
      {
        label: 'Me',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {

    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
          case 'Home':
          this.$router.push({path:'/index'});
          break;
          case 'Category':
          this.$router.push({path:'/botnav/list'});
          break;
          case 'Search':
          this.$router.push({path:'/botnav/search'});
          break;
          case 'Cart':
          this.$router.push({path:'/botnav/cart'});
          break;
          case 'Me':
          this.$router.push({path:'/botnav/me'});
          break;
      }
    }
  },
  computed:{
    ...mapGetters({
      cartsum:'cartsum'
    })
  },
  created(){
    switch(this.$router.path){
      case '/index':
        this.selectedLabelDefault='Home';
      break;
      case '/botnav/list':
        this.selectedLabelDefault='list';
      break;
      case '/botnav/search':
        this.selectedLabelDefault='search';
      break;
      case '/botnav/cart':
        this.selectedLabelDefault='cart';
      break;
      case '/botnav/me':
        this.selectedLabelDefault='me';
      break;
    }
  }
  
}
</script>

<style lang='stylus' >
    .cube-tab-bar.bot
        position fixed
        bottom 0
        left 0
        z-index 1000
        width 100%
        background #fff
        .cube-tab
            font-size 14px
            padding-top 3px
        i
            font-size 20px
    .Router
      position absolute
      width 100%
      transition all 0.8s ease 
    .slide-right-enter,.slide-left-leave-active
      opacity 0 //透明
      -webkit-transform translate(100%,0) //兼容
      transform translate(100%,0)
    .slide-right-leave-active,.slide-left-enter
      opacity 0
      -webkit-transform translate(-100%,0)
      transform translate(-100%,0)
    .cartsum 
      position fixed
      bottom 33px
      right 23%
      z-index 1001
      width 18px
      height 18px
      line-height 18px
      border-radius 50%
      font-size 14px
      background red
      color #fff
</style>