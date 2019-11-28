import React from "react";
import {Switch,Route} from "react-router-dom";
import router from "../router"

function MyRoute() {
    return (
        <fragment>
            <Switch>
            {
                router.config.map(v=>(
                    v.name==="index"?v.children.map(value=>(
                    <Route key={value.path} exact={value.exact} path={value.path} component={value.component}></Route>
                    )):<Route key={v.path} exact={v.exact} path={v.path} component={v.component}>
                    </Route>
                ))
            }
          </Switch>
        </fragment>
    )
}
export default MyRoute