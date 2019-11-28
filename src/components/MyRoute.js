import React from "react";
import {Route} from "react-router-dom";
import router from "../router";
function MyRoute() {
    return (
        <fragment>
            {
                 router.config.map(v=>(
                   v.linkName?<Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>:null
                )) 
            }
        </fragment>
    )
}
export default MyRoute