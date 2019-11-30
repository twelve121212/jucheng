import React from "react";
import {Switch,Route} from "react-router-dom";
import router from "../router"
function MyRoute() {
    return (
        <fragment>
            <Switch>
            {
                router.config.map(v=>(
                    <Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>
                ))
                
                
            }
            
          </Switch>
        </fragment>
    )
}
export default MyRoute
/**
 *  
 * 
 * 
 *  
    
    const routes = router.config.map(v=>v.children)
    routes?routes.map(v=>(<Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>)):
                    








 */