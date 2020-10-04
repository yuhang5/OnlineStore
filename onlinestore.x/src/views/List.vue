<template>
    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul> <!-- ds> v-for: 循环，写循环时要有个key（项目优化的作用，一个唯一值）， @click 声明一个动作<-->
                <li v-for="(list,index) in tabslabel" @click='selectlist(index)' :class="list.active? 'active':''" :key='index'>
                    {{list.label}}
        
                </li>
            </ul>
        </cube-scroll>
        <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index"> 
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}}</p> <i class="cubeic-add" @click="addcart($event,tag)"></i>
                    
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>
<script>
export default {
    data () {
        return{
            tags:[
                {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/116429/35/16248/2817/5f485fa4E326bdf8f/b7d19a346c4e45de.jpg",
                    label:'XiaoMi'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t2989/240/151377693/3895/30ad9044/574d36dbN262ef26d.jpg",
                    label:'Apple'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/22465/2/10288/3283/5c860ac9E1bbb5da9/33ffbca794e7b965.jpg",
                    label:'OPPO'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/115757/4/9851/3464/5ee0af9bEc6576114/0dfceda9f7809bb5.jpg",
                    label:'Vivo'
                  },
                {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/1534/38/9873/3556/5bc93df2E73c40121/74dc92d16e483509.jpg",
                    label:'SAMUNG'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/1035/26/11181/2858/5bce7321E51f2c59e/0c685f39d86436dd.jpg",
                    label:'Nokia'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/5932/28/11176/6002/5bce822bE4be57b0c/162d6a5b24eb2ab7.jpg",
                    label:'Philips'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/133214/12/9311/1768/5f560d4bE4d1f1612/69675650fd2c0038.png",
                    label:'Meizu'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t24682/107/1373450238/16268/2827346f/5baddd0eN1b9a7b91.jpg",
                    label:'Motorola'
                  },
                {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/116429/35/16248/2817/5f485fa4E326bdf8f/b7d19a346c4e45de.jpg",
                    label:'XiaoMi'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t2989/240/151377693/3895/30ad9044/574d36dbN262ef26d.jpg",
                    label:'Apple'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/22465/2/10288/3283/5c860ac9E1bbb5da9/33ffbca794e7b965.jpg",
                    label:'OPPO'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/115757/4/9851/3464/5ee0af9bEc6576114/0dfceda9f7809bb5.jpg",
                    label:'Vivo'
                  },
                {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/1534/38/9873/3556/5bc93df2E73c40121/74dc92d16e483509.jpg",
                    label:'SAMUNG'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/1035/26/11181/2858/5bce7321E51f2c59e/0c685f39d86436dd.jpg",
                    label:'Nokia'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/5932/28/11176/6002/5bce822bE4be57b0c/162d6a5b24eb2ab7.jpg",
                    label:'Philips'
                  },
                  {
                    image:"//img20.360buyimg.com/popshop/jfs/t1/133214/12/9311/1768/5f560d4bE4d1f1612/69675650fd2c0038.png",
                    label:'Meizu'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t24682/107/1373450238/16268/2827346f/5baddd0eN1b9a7b91.jpg",
                    label:'Motorola'
                  }
            ],
            tabslabel:[
                {
                    label: 'Popular Items',
                    active: true
                },
                {
                    label: 'Mobile Phone',
                    active: false
                },
                {
                    label: 'Camera Products',
                    active: false
                },
                {
                    label: 'Household Appliances',
                    active: false
                },
                {
                    label: 'Computer Equipment',
                    active: false
                },
                {
                    label: 'Makeup Products',
                    active: false
                },
                {
                    label: 'Watch Jewelry',
                    active: false
                },
                {
                    label: 'Discount Items',
                    active: true
                },
                {
                    label: 'Lady Bags',
                    active: false
                },
                {
                    label: 'Men Bags',
                    active: false
                },
                {
                    label: 'Childs Bags',
                    active: false
                },
                {
                    label: 'Adult Products',
                    active: false
                }
            ]
        }
    },
    methods:{
        //点击左侧分类
        selectlist(index){
            this.tabslabel.forEach((val,ind)=>{
                if(index==ind){
                    val.active=true
                }else{
                    val.active=false
                }
                })
                this.getclassify(index)
        },
        async getclassify(index){
            //获取分类
            const result=await this.$http.get('/api/classify',{pramas: {type:index}})
            this.tags=result.data

        },
        //添加商品到购物车
        addcart(e,tag){
            this.$store.commit('tocart',tag)

        }
    },
    created() {
        //获取默认的分类数据
        this.getclassify(0)

    },
    mounted(){ // 生命周期
    // 设置滚动盒子的高度,拖到列表
        const leftpanels=document.querySelector('.leftpanels')
        const rightpanels=document.querySelector('.rightpanels')
        const bodyheight=document.documentElement.clientHeight
        leftpanels.style.height=bodyheight-57+'px'
        rightpanels.style.height=bodyheight-57+'px'


    }
}
</script>

<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 40%
            li
                height 50px
                line-height 20px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size 12px
            .active 
                background-color #fff
                color #e93b3d
        .rightpanels
            width 60%
            ul  
                display flex
                flex-wrap wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 10px
                    img
                        margin-top 15px
                        width 70px
                        height 40px
                    .cubeic-add
                        font-size 15px
</style>