import React from 'react';
import './App.css';
import './assets/iconfont/iconfont.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import MyNavLink from "./components/MyNavLink";
import MyRoute from "./components/MyRoute";

function App() {
  return (
    <div className="App">
      <div className="certain">
           <MyRoute></MyRoute>
      </div>

      <footer className="nav">         
          <MyNavLink></MyNavLink>
      </footer>
      
    </div>
  );
}

export default App;
