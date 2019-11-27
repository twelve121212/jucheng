import React from "react";
import {NavLink} from "react-router-dom";
import router from "../router"
function MyNavLink() {
    return (
        <nav>
            {
                router.config.map(v=>(
                    v.linkName?<NavLink
                        className={router.className}
                        activeClassName={router.activeClassName}
                        key={v.path} to={v.path} exact={v.exact}>{v.linkName}</NavLink>:null
                ))
            }
        </nav>
    )
}
export default MyNavLink