import React from "react";
import "../assets/css/Venue/Vence.css"
export default class Venue extends React.Component{
    render(){
        return (
            <div>
                <div id="header">
                    <div class="header_left">
                        <i class="iconfont icon-dayuhao1"></i>
                    </div>
                    <h3 class="header_center">
                        雅乐居海上艺术中心  
                    </h3>
                    <div class="header_right">
                        <i class="iconfont icon-sandian"></i>
                    </div>
                </div>
                <div class="section">
                    <img src="" alt=""/>
                    <div class="venue_nav">
                        <div class="nav_one">
                            <i class="iconfont icon-juchangjuyuanxinxi"></i>
                            <p>演出</p>
                        </div>
                        <div class="nav_one">
                            <i class="iconfont icon-juchangjuyuanxinxi"></i>
                            <p>演出</p>
                        </div>
                        <div class="nav_one">
                            <i class="iconfont icon-juchangjuyuanxinxi"></i>
                            <p>演出</p>
                        </div>
                        <div class="nav_one">
                            <i class="iconfont icon-juchangjuyuanxinxi"></i>
                            <p>演出</p>
                        </div>
                    </div>
                    <div class="context">
                        <h2>热门演出</h2>
                        <div class="context_one">
                            <div class="img">
                                <img src="" alt=""/>
                            </div>
                            <div class="detail">
                                <h4 class="name">上海越剧院《红楼梦》-陵水上海越剧院《红楼梦》-陵水</h4>
                                <p class="time">2019.12.20 - 2019.12.19</p>
                                <p class="position">雅乐居海上艺术中心</p>
                                <h5 class="price">￥68起</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}