import React from "react";
import {Route} from "react-router-dom";
import router from "../router";
function MyRoute() {
    return (
        <fragment>
            {
<<<<<<< HEAD
                router.config.map(v=>(
                    <Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>
                ))
                
                
            }
            
          </Switch>
=======
                 router.config.map(v=>(
                   v.linkName?<Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>:null
                )) 
            }
>>>>>>> 7c325ba0de718de7b1fbddeb7ed865d1bd8a9684
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