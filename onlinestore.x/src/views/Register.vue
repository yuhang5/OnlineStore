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
                        label: 'Sign Up'
                    }
                ]
            }    }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault()
            this.$http.get('/api/register',{params:this.model}).then(res=>
            {
                console.log(res.success)
            }).catch(err=>{
                console.log(err)
            })
            
        }
    }    
}
</script>
<style lang="stylus" scoped>
    .headerimg
        height 150px
        width  60%
</style>
