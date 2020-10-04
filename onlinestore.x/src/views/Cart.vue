<template>
    <div>
        <div class="goods" v-for="(item,index) in cartatt" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
            
        </div>    
        <cube-button style="margin:10px 0">Order</cube-button>
        <cube-button>Clean</cube-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
        }
    },
    computed:{
        ...mapState({
            cartatt:state=>state.cartarry
        })

    },
    methods: {
        removeCart(index){
            console.log(index)

        },
        addCart(index){
            console.log(index)

        }
    }
}
</script>
<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left 
        .goodsright
            float right 
        i 
            font-size 18px

</style>