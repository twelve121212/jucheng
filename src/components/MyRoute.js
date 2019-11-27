import React from "react";
import {Switch,Route} from "react-router-dom";
import router from "../router"
function MyRoute() {
    return (
        <div>
            <Switch>
            {
                router.config.map(v=>(
                    <Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>
                ))
            }
          </Switch>
        </div>
    )
}
export default MyRoute