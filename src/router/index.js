import Home from "../views/Home";
import Theater from "../views/Theater";
import TicketBag from "../views/TicketBag";
import My from "../views/My"
import Login from "../views/Login"
import React from "react"
import Setting from "../views/my/setting"
export default {
    className:"footer_one",
    activeClassName:"App-active",
    config: [
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
            path:"*",
            // linkName:"404",
            component:()=><div>404,页面不存在</div>
        }
    ]
}