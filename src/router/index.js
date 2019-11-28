import Home from "../views/Home";
import Theater from "../views/Theater";
import TicketBag from "../views/TicketBag";
import My from "../views/My"
import ShowType from "../views/ShowType";
import Swiper from "../views/Swiper"
// import Login from "../views/Login"
import React from "react"
export default {
    className:"footer_one",
    activeClassName:"App-active",
    config: [
        {
            path: '/',
            name: 'index',
            component: Home,
            exact:true,
            children:[
                {
                    path:"/",
                    exact:true,
                    linkName:"首页",
                    component:Home,
                    className:"iconfont icon-chengzi"
                },
                {
                    path:"/theater",
                    linkName:"剧院",
                    component:Theater,
                    className:"iconfont icon-gejuyuan"
                },
                {
                    path:"/ticketBag",
                    linkName:"票夹",
                    component:TicketBag,
                    className:"iconfont icon-piaojia"
                },
                {
                    path:"/my",
                    linkName:"我的",
                    component:My,
                    className:"iconfont icon-wode"
                },
            ]
          },
          {
            path: '/showType',
            name: 'showType',
            exact:true,
            component: ShowType,
          },
          {
            path: '/swiper',
            name: 'swiper',
            exact:true,
            component: Swiper,
          },
        
        
        // {
        //     path:"/login",
        //     linkName:"登陆",
        //     component:Login
        // },
        {
            path:"*",
            // linkName:"404",
            component:()=><div>404,页面不存在</div>
        }
    ]
}