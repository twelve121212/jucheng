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
<<<<<<< HEAD
      <div className="certain">
           <MyRoute></MyRoute>
      </div>

      <footer className="nav">         
          <MyNavLink></MyNavLink>
      </footer>
      
=======
      <Switch>
        {
            router.config.map(v=>(
              v.linkName?null:<Route key={v.path} path={v.path} component={v.component}></Route>
            )) 
        }
        <Route key={'/'} path={'/'} component={HaveNav}></Route>
      </Switch>
>>>>>>> 7c325ba0de718de7b1fbddeb7ed865d1bd8a9684
    </div>
  );
}

export default App;
