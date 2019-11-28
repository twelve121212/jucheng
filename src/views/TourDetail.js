import React from "react";
import "../assets/css/reset.css";
import '../assets/iconfont/iconfont.css';
import xunyan from '../assets/Y_images/xunyan.jpg'
export default class extends React.Component{
    render(){
        return(
            <div id="tourDetail">
                巡回详情
                <img src="" alt=""/>
                <div className="tour-right">
                    <div className="tour-date">
                        2019.11.30-12.01
                    </div>
                    <div className="tour-title">
                        聚成制作|百老汇摇滚音乐剧《》
                    </div>
                    <div className="tour-address">
                        北京|中国人民大学
                    </div>
                    <div className="tour-price">
                        ¥100<span>起</span>
                    </div>
                </div>
            </div>
        )
    }
}