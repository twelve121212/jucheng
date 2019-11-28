import React from "react";
import MyNavLink from "../components/MyNavLink";
import MyRoute from "../components/MyRoute";
import '../assets/html/zhouyimin/z-css/HaveNav.css';
import '../assets/css/reset.css';

export default class HaveNav extends React.Component{
    render(){
        return (
            <div id="HaveNav">
                    <div className="certain">
                        <MyRoute></MyRoute>
                    </div>
                    <MyNavLink></MyNavLink>
            </div>
        )
    }
}