import React from "react";
import {NavLink} from "react-router-dom";
import router from "../router"
function MyNavLink() {
    return (
        <nav className="footer">
            {
                router.config.map(v=>(
                    v.linkName?<NavLink
                        className={router.className}
                        activeClassName={router.activeClassName}
                        key={v.path} to={v.path} exact={v.exact}>
                            
                                <i className={v.className}></i>
                                <p>{v.linkName}</p >
                            
                        </NavLink>:null
                ))
            }
        </nav>
    )
}
export default MyNavLink