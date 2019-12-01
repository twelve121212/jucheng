import React from 'react';
import router from './router';
import './App.css';
import './assets/iconfont/iconfont.css';
import {
  Route,
  Switch,
} from "react-router-dom";
import HaveNav from "./views/HaveNav";

function App() {
  return (
    <div className="App">
      <Switch>
        {
            router.config.map(v=>(
              v.linkName?null:<Route key={v.path} path={v.path} component={v.component}></Route>
            )) 
        }
        <Route key={'/'} path={'/'} component={HaveNav}></Route>
      </Switch>
    </div>
  );
}

export default App;
