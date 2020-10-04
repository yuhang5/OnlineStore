<template>
    <div>
        <img class="headerimg" src="../assets/logo2.png" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"></cube-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: {
                username: '',
                password: ''
            },
            schema: {
                fields: [
                    // 用户名配置
                    {
                        type: 'input',
                        modelKey: 'username',
                        label: 'Username',
                        props: {
                            placeholder: 'Please Enter Username'
                        },
                        rules: {
                            required: true,
                            typr: 'string',
                            min: '3',
                            max: '15'
                        },
                        trigger: 'blur',
                        message: {
                            required: 'Username cannot be empty',
                            min: 'Username cannot be less than 3',
                            max: 'Username cannot be more than 15'
                        }

                    },
                    {
                        //密码配置
                        type: 'input',
                        modelKey: 'password',
                        label: 'Password',
                        props: {
                            placeholder: 'Please Enter Password',
                            type: 'password',
                            eye: {
                                open: 'false'
                            }
                        },
                        rules: {
                            required: 'true'
                        },
                        trigger: 'blur'
                    },
                    {
                        type: 'submit',
                        label: 'Log In'
                    }
                ]
            }    }
    },
    methods: {
        async submitHandler(e) {
            e.preventDefault()
            try{
                const result= await this.$http.get('/api/login',{params:this.model})
                if (result.code=='0'){
                    this.$store.commit('settoken',result.token)
                    window.localStorage.setItem('token',result.token)
                    alert(result.message)
                    this.$router.replace({path:'/index'})
                    // 判断路由是否带参，带参数就去到重定向参数地址，否则就去首页
                    if (this.$router.query.redirect){
                        this.$router.replace({path:'/index'})
                    }else{
                        this.$router.replace({path:'/index'})
                    }
                }else{
                    alert(result.message)
                }
            }catch(err){
                console.log(err)
            }
            
        }
    }    
}
</script>
<style lang="stylus" >
            .headerimg
                height 150px
                width  60%
            .cube-form
                height 150px
                
    
</style>
