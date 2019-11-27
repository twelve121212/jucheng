import React from "react";
import '../assets/css/reset.css';
import '../assets/html/zhouyimin/z-css/TicketBag.css'
export default class TicketBag extends React.Component{
    render(){
        return (
            <div id='TicketBag'>
                <header>
                    <span>票夹</span>
                    <i></i>
                    <i></i>
                </header>

                <section>
                    <div>
                        <img src="../assets/html/zhouyimin/z-images/ticket_empty.png" alt=""/>
                    </div>
                </section>

                <footer>
                    <ul>
                        <a><li>
                            <i></i>
                            <span></span>
                        </li></a>
                        <a><li>
                            <i></i>
                            <span></span>
                        </li></a>
                        <a><li>
                            <i></i>
                            <span></span>
                        </li></a>
                        <a><li>
                            <i></i>
                            <span></span>
                        </li></a>
                    </ul>
                </footer>
            </div>
        )
    }
}