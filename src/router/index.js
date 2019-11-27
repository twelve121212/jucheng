import Home from "../views/Home";
import Theater from "../views/Theater";
import TicketBag from "../views/TicketBag";
import My from "../views/My"
// import Login from "../views/Login"
import React from "react"
export default {
    className:"App-link",
    activeClassName:"App-active",
    config: [
        {
            path:"/",
            exact:true,
            linkName:"首页",
            component:Home
        },
        {
            path:"/theater",
            linkName:"剧院",
            component:Theater
        },
        {
            path:"/ticketBag",
            linkName:"票夹",
            component:TicketBag
        },
        {
            path:"/my",
            linkName:"我的",
            component:My
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