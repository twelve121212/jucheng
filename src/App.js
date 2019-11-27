import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import MyNavLink from "./components/MyNavLink"
import router from "./router";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavLink></MyNavLink>
         <Switch>
          {
              router.config.map(v=>(
                  <Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>
              ))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
