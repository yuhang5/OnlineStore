<template>
    <div id="index">
      <!-- 轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                <img class='banner' :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
      <!-- 滚动 -->
        <cube-slide ref="slidelists" :auto-play="false" :data="lists" >
            <cube-slide-item v-for="(list, index) in lists" :key="index" @click.native="clickHandler2(list, index)" >
              <ul class="listul">
                  <li class="listli" v-for="(item,index1) in list" :key="index1">
                      <a :href="item.url"> </a>
                        <img :src="item.image">
                        <p>{{item.label}}</p>
                  </li>
              </ul>
            </cube-slide-item>
        </cube-slide>

    </div>     
</template>




<script>
export default {
  data() {
    return {
      items: [],//轮播数组
      lists: [] //滚动分类数组
    }
  },
  methods: {
    changePage() {
      //console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    },
    clickHandler2(list, index) {
      console.log(list, index)
    }
  },
  async created(){
      try{
        //获取轮番图数据
        const items=await this.$http.get('/api/banner')
        this.items=items.data
         //获取滚动数据
        const lists=await this.$http.get('/api/rollinglist')
        this.lists=lists.data
      }catch(err){
          console.log(err)
      } 
      }
  }

</script>

<style lang='stylus' scoped>
    #index
      a
        .banner
            display block
            width 100%
            height 150px
      .listul
        display flex
        flex-wrap wrap
      .listli 
        width 20%
        justify-content center
        img 
            width 50px
            height 50px
            border-radius 50%
            padding 5px 0
        p 
          font-size 10px
          padding-bottom 10px

</style>