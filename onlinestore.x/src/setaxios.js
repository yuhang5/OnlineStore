import axios from 'axios'
import store from './store'
import router from './router'

//http全局拦截
//token要放在我们请求的header上，带回去给后端

export default function setAxios(){
    //添加请求拦截器. 每次的请求有返回的，都是先经过这个拦截器
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token=store.state.token
            }
            //在发送请求之前做某事
            return config
        }
    )
    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                const data=response.data
                if(data==-1){
                    //登录过期，需要重新登录。清空vuex的token和local storage的token
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    //跳转到login
                    router.replace({path:'./login'})
                }
                return data
            }
            return response
        }
    )
}