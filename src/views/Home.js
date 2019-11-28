import React from "react";
import {Link} from "react-router-dom"
import "../assets/css/reset.css"
import '../assets/iconfont/iconfont.css';
import "../assets/css/home.css"
import lunbo from "../assets/Y_images/lunbo.jpg"
import fenxiang from "../assets/Y_images/fenxiang.png"
import yanchu from "../assets/Y_images/yanchu.jpg"
export default class Home extends React.Component {
    render() {
        return (
            <div id="home">
                {/* 网页头部 */}
                <div className="header">
                    <div className="position">
                        <i className="iconfont icon-location"></i>全国
                    </div>
                    <div className="search">
                        <i className="iconfont icon-soushuo"></i>
                        <input type="text" placeholder="搜索热门演出"/>
                    </div>
                    <div className="date">
                        <i className="iconfont icon-riqi"></i>
                    </div>
                    <div className="share">
                        <img src={fenxiang} alt=""/>
                    </div>
                </div>
                {/* 轮播图 */}
                <div className="swiper">
                    <img src={lunbo} alt="" />
                </div>
                {/* 图形中部导航 */}
                <div className="picNav">
                    <Link className="picnav vocol" to={"/showtype/1"}>
                        <i className="iconfont icon-huatongKTVmaikefengchanggemianxing"></i>
                        <div>演唱会</div>
                    </Link>

                    <Link className="picnav music" to={"/showtype/2"}>
                        <i className="iconfont icon-yinfu"></i>
                        <div>音乐剧</div>
                    </Link>

                    <Link className="picnav stage" to={"/showtype/3"}>
                        <i className="iconfont icon-xiaoji"></i>
                        <div>舞台剧</div>
                    </Link>

                    <Link className="picnav children" to={"/showtype/4"}>
                        <i className="iconfont icon-baobao"></i>
                        <div>儿童剧</div>
                    </Link>

                    <Link className="picnav concert" to={"/showtype/5"}>
                        <i className="iconfont icon-gangqin"></i>
                        <div>音乐会</div>
                    </Link>

                    <div className="picnav happy">
                        <i className="iconfont icon-qiabao"></i>
                        <div>欢聚橙卡</div>
                    </div>
                    <div className="picnav orange">
                        <i className="iconfont icon-xinbaniconshangchuan-"></i>
                        <div>橙PLUS卡</div>
                    </div>
                    <div className="picnav vip">
                        <i className="iconfont icon-zuanshi1"></i>
                        <div>vip+专区</div>
                    </div>
                    <div className="picnav integral">
                        <i className="iconfont icon-dianpushouquanxiaofangzi"></i>
                        <div>积分兑换</div>
                    </div>
                    <div className="picnav joint">
                        <i className="iconfont icon-pengyou1"></i>
                        <div>拼团</div>
                    </div>
                </div>
                {/* 优先购票 */}
                <div className="priority">
                    <div className="priority-header">
                        <div className="priority-header-left">
                            <span>优先购票</span>
                            <i>VIP+会员尊享权益</i>
                        </div>
                        <div className="priority-header-right">
                            <i>99元/年</i>
                            <i className="iconfont icon-dayuhao"></i>
                        </div>
                    </div>
                    <div className="priority-center">
                        <img src={yanchu} alt=""/>
                            <div className="priority-center-right">
                                <div className="priority-title">南京市政府南京市文化消费政府南京市文化消费政府南京市文化消费政府</div>
                                <div className="priority-address">
                                    <span>南京</span>|
                                    <span>江苏大剧院</span>
                                </div>
                                <div className="priority-footer">
                                    <div className="priority-footer-left">
                                        <div className="date">
                                            <span>11/28</span>
                                            <span>12:00</span>
                                            <span className="start">开始</span>
                                        </div>
                                    </div>
                                    <div className="remind">开售提醒</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}