import React from "react";
import {Link} from "react-router-dom";
import '../assets/css/reset.css';
import '../assets/html/zhouyimin/z-css/TicketBag.css';
// import i_ticket_empty from '../assets/html/zhouyimin/z-images/ticket_empty.png';
export default class TicketBag extends React.Component{
    render(){
        return (
            <div id='TicketBag'>
                <header>
                    <span>票夹</span>
                    <Link className="iconfont icon-dayuhao1" to={'/'}></Link>
                    <i className="iconfont icon-sandian"></i>
                </header>

<<<<<<< HEAD
                <section>
                    {/* <img src={i_ticket_empty} alt=""/> */}
=======
                 <section>
                     <img src={i_ticket_empty} alt=""/>
>>>>>>> 7c325ba0de718de7b1fbddeb7ed865d1bd8a9684
                    <h3>暂无电子票</h3>
                </section>
             </div>
        )
    }
}