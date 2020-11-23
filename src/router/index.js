import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      component:()=>import("../pages/login/login")
    },
    {
      path:"/",
      component:()=>import("../pages/index/index"),
      children:[
        {
          path:"",
          component:()=>import("../pages/home/home")
        },
        {
          path:"menu",
          component:()=>import("../pages/menu/menu"),
          name:"菜单管理"
        },
        {
          path:"role",
          component:()=>import("../pages/role/role"),
          name:"角色管理"
        },
        {
          path:"manage",
          component:()=>import("../pages/manage/manage"),
          name:"管理员管理"
        },
        {
          path:"cate",
          component:()=>import("../pages/cate/cate"),
          name:"商品分类"
        },
        {
          path:"specs",
          component:()=>import("../pages/specs/specs"),
          name:"商品规格"
        },{
          path:"goods",
          component:()=>import("../pages/goods/goods"),
          name:"商品管理"
        },
        {
          path:"vip",
          component:()=>import("../pages/vip/vip"),
          name:"会员管理"
        },
        {
          path:"banner",
          component:()=>import("../pages/banner/banner"),
          name:"轮播图管理"
        },
        {
          path:"seckill",
          component:()=>import("../pages/seckill/seckill"),
          name:"秒杀活动"
        },
      ]
    },
  ]
})
