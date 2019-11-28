import React from "react";
import {NavLink} from "react-router-dom";
import router from "../router"
function MyNavLink() {
    return (
        <nav className="footer">
            {
                router.config.map(v=>(
                    v.linkName?v.children.map(value=>(
                        <NavLink
                        className={router.className}
                        activeClassName={router.activeClassName}
                        key={value.path} to={value.path} exact={value.exact}>
                            
                                <i className={value.className}></i>
                                <p>{value.linkName}</p > 
                        </NavLink>
                    )):
                    <NavLink
                    key={v.path} to={v.path} exact={v.exact}>
                        
                            <i className={v.className}></i>
                            <p>{v.linkName}</p>
                               
                    </NavLink>
                ))

            }
        </nav>
    )
}
export default MyNavLink