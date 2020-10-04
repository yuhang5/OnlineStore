module.exports = {
  configureWebpack: {
    devServer: {
      //Mock 端口编写的地方
      //每次做更改这个配置文件的时候，都必须重启项目才能实现
      before(app) {
        // app.get('请求地址',(req,res) => {
        //   res.json({
        //     xinxi
        //   })
        //})
        //注册接口
        //用户信息池
        let userpool=[
          {username:'Ap10',password:'1234'},
          {username:'Ergou',password:'1234'}
        ]
        app.get('/api/register',(req,res) =>{
          const {username,password}=req.query
          const userlength=userpool.filter(v=>v.username==username).length
          if(userlength>0){
            res.json({
              success: false,
              message: 'Username already exist'
            })
          }else{
            res.json({
              success: true,
              message: 'Register Successed'
            })
          }
          })
          //登录接口
        let tokenKey='Ap10'
        app.get('/api/login',(req,res)=>{
          const {username,password}=req.query
          if (username=='Ap10' && password=='1234' || username=='Ergou' && password=='1234'){
            res.json({
              code: 0,
              message: 'log in success',
              token: tokenKey + '-' +username + '-'+(new Date().getTime()+60*60*1000)
            })
          }else{
            res.json({
              code: 1,
              message: 'username or password wrong'
            })
          }
        })
        //首页轮播图的接口
        app.get('/api/banner',(req,res)=>{
          res.json({
            data:[ {
              url:'http://www.google.com',
              image:  'https://dpubstatic.udache.com/static/dpubimg/XsZT-Ium9K/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg'
            },
            {
              url:'http://www.google.com',
              image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'
            },
            {
              url:'http://www.google.com',
              image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg'
            }
          ]
          })
        }),
        //滑动分类接口
        app.get('/api/rollinglist',(req,res)=>{
          res.json({
            data:[
            [
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/uesDMLn8ho/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                label: 'classify1'
              }
            ],
            [
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              },
              {
                url:'http://www.google.com',
                image: 'https://dpubstatic.udache.com/static/dpubimg/jM0pARr01R/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                label: 'classify2'
              }
              
            ]
            ]
          })
        })
        //获取分类页的分类接口
        app.get('/api/classify',(req,res)=>{
          switch (req.query.type) {
              case '0':
              res.json({
                data:[
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  }
                ]
              });
              break;
              case '1':
              res.json({
                data:[
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  }
                ]
              });
              break;
              case '2':
              res.json({
                data:[
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  }
                ]
              });
              break;
              case '3':
              res.json({
                data:[
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  }
                ]
              });
              break;
              case '4':
              res.json({
                data:[
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  }
                ]
              });
              break;
              case '5':
              res.json({
                data:[
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  }
                ]
              });
              break;
              case '6':
              res.json({
                data:[
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  },
                  {
                    image:"//img30.360buyimg.com/popshop/jfs/t1/132808/6/8420/2045/5f486e43E8ff5f3a1/62b97e5188766c42.png",
                    label:'HuaWei'
                  }
                ]
              });
              break;
          }
        })
        }
      }
    
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
