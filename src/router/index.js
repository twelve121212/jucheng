import Home from "../views/Home";
import Theater from "../views/Theater";
import TicketBag from "../views/TicketBag";
<<<<<<< HEAD
import My from "../views/My"
import Login from "../views/Login"
import React from "react"
import Setting from "../views/my/setting"
=======
import My from "../views/My";
import Login from "../views/Login";
import ShowDetail from "../views/ShowDetail";
import ShowType from "../views/ShowType";
import TourDetail from "../views/TourDetail";
import Venue from "../views/Venue";
import CityChose from "../views/CityChose";



>>>>>>> 7c325ba0de718de7b1fbddeb7ed865d1bd8a9684
export default {
    className:"footer_one",
    activeClassName:"App-active",
    config: [
        {
            path: '/',
            name: 'index',
            component: Home,
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
            path:"/ticketbag",
            linkName:"票夹",
            component:TicketBag,
            className:"iconfont icon-piaojia"
        },
        {
            path:"/my",
            linkName:"我的",
            component:My,
            className:"iconfont icon-wode",
            exact: true,
        },
        {
            path:"/my/setting",
            // linkName:"用户设置",
            component:Setting
        },
        {
            path:"/login",
            // linkName:"登陆",
            component:Login
        },
        {
<<<<<<< HEAD
            path:"*",
            // linkName:"404",
            component:()=><div>404,页面不存在</div>
=======
            path:"/login",
            component:Login
        },
        {
            path:'/showtype',
            component:ShowType
        },
        {
            path:'/showdetail',
            component:ShowDetail
        },
        {
            path:'/tourdetail',
            component:TourDetail
        },
        {
            path:'/venue/:type',
            component:Venue
        },
        {
            path:'/citychose',
            component:CityChose
>>>>>>> 7c325ba0de718de7b1fbddeb7ed865d1bd8a9684
        }
        // {
        //     path:"*",
        //     // linkName:"404",
        //     component:()=><div>404,页面不存在</div>
        // }
    ]
}