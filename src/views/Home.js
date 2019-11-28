import React from "react";
import{
    bindActionCreators
}from "redux";
import homeCreactor from "../store/actionCreator/home";
import {connect} from "react-redux";

import IScroll from 'iscroll';
import "../assets/css/reset.css"
import '../assets/iconfont/iconfont.css';
import "../assets/css/home.css"
import lunbo from "../assets/Y_images/lunbo.jpg"
import fenxiang from "../assets/Y_images/fenxiang.png"
import yanchu from "../assets/Y_images/yanchu.jpg"
import xunyan from "../assets/Y_images/xunyan.jpg"
class Home extends React.Component {
    render() {
        return (
            <div id="home">
                {/* 网页头部 */}
                <div class="header">
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
                    <div className="picnav vocol">
                        <i className="iconfont icon-huatongKTVmaikefengchanggemianxing"></i>
                        <div>演唱会</div>
                    </div>
                    <div className="picnav music">
                        <i className="iconfont icon-yinfu"></i>
                        <div>音乐剧</div>
                    </div>
                    <div className="picnav stage">
                        <i className="iconfont icon-xiaoji"></i>
                        <div>舞台剧</div>
                    </div>
                    <div className="picnav children">
                        <i className="iconfont icon-baobao"></i>
                        <div>儿童剧</div>
                    </div>
                    <div className="picnav concert">
                        <i className="iconfont icon-gangqin"></i>
                        <div>音乐会</div>
                    </div>
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
                        <img src={this.props.priorList.pic} alt=""/>
                            <div className="priority-center-right">
        <div className="priority-title">{this.props.priorList.schedular_name}</div>
                                <div className="priority-address">
        <span>{this.props.priorList.city_name}</span>|
        <span>{this.props.priorList.venue_name}</span>
                                </div>
                                <div className="priority-footer">
                                    <div className="priority-footer-left">
                                        <div className="date">
                                            <span>{this.props.priorList.pre_time}</span>
                                            
                                            <span className="start">开始</span>
                                        </div>
                                    </div>
                                    <div className="remind">开售提醒</div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* 热门演出 */}
                
                <div className="hotShow">
                    <div className="hotShow-title">
                        <span>热门演出</span>
                        <i className="iconfont icon-dayuhao"></i>
                    </div>
                    <div id="abc">
                    <div className="hotShow-center" >
                        <div className="hotShow-context">
                            <img src={yanchu} alt=""/>
                            <div class="hotShow-headline">万有系万有音乐有音乐系</div>
                        </div>
                        <div className="hotShow-context">
                            <img src={yanchu} alt=""/>
                            <div class="hotShow-headline">万有系万有音乐有音乐系</div>
                        </div>
                        <div className="hotShow-context">
                            <img src={yanchu} alt=""/>
                            <div class="hotShow-headline">万有系万有音乐有音乐系</div>
                        </div>
                        <div className="hotShow-context">
                            <img src={yanchu} alt=""/>
                            <div class="hotShow-headline">万有系万有音乐有音乐系</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="tourShow">
                    <div className="tourShow-title">
                        <span>巡回演出</span>
                        <i className="iconfont icon-dayuhao"></i>
                    </div>
                    <div className="tourShow-center">
                        <div className="tourShow-context">
                            <img src={xunyan} alt=""/>
                            <div class="tourShow-headline">万有系万有音乐有音乐系</div>
                            <span>28场巡演</span>
                        </div>
                        <div className="tourShow-context">
                            <img src={xunyan} alt=""/>
                            <div class="tourShow-headline">万有系万有音乐有音乐系</div>
                            <span>28场巡演</span>
                        </div>

                    </div>
                </div>
                {/* 会员尊享权益 */}
                <div className="memberShip">
                    <div className="memberShip-title">
                        <div className="memberShip-title-left">
                            <i className="iconfont icon-zuanshi1"></i>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div className="memberShip-title-right">
                            <span>99元/年</span>
                            <i className="iconfont icon-dayuhao"></i>
                        </div>
                    </div>
                    <div className="memberShip-center">
                        <div className="ticket">
                            <div className="ticket-title">
                                <div className="ticket-title-left">专属票价</div>
                                <div className="ticket-title-right">
                                    <b>3天</b>
                                    <span>05</span>:
                                    <span>29</span>:
                                    <span>33</span>
                                    <i className="iconfont icon-dayuhao"></i>
                                </div>
                            </div>
                            <div className="ticket-center">
                                <div className="ticket-context">
                                    <img src={yanchu} alt=""/>
                                    <div className="ticket-price">
                                          <span>¥99</span>
                                        <i>¥180</i>
                                    </div>
                                </div>
                                <div className="ticket-context">
                                    <img src={yanchu} alt=""/>
                                    <div className="ticket-price">
                                          <span>¥99</span>
                                        <i>¥180</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="discount"> 
                            <div className="discount-title">
                                    <div className="discount-title-left">专享折扣</div>
                                    <div className="discount-title-right">
                                        <i className="iconfont icon-dayuhao"></i>
                                    </div>
                            </div>
                            <div className="discount-center">
                                <div className="discount-context">
                                    <img src={yanchu} alt=""/>
                                    <div className="discount-dis">
                                        <span>8.5</span>
                                        <i>折</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 演出类型 */}
                <div className="show">
                    <div className="show-title">
                        <span>演唱会</span>
                        <i className="iconfont icon-dayuhao"></i>
                    </div>
                    <div className="show-center">
                        <div className="show-center-left">
                            <img src={yanchu}/>
                        </div>
                        <div className="show-center-right">
                            <div className="show-date">
                                <span>2019.12.16</span>
                                <i>周日 20:00</i>
                            </div>
                            <div className="show-headline">万有音乐系万有音乐系</div>
                            <div className="show-address">深圳|深圳剧院</div>
                        </div>
                    </div>
                    <div className="show-context">
                        <div className="show-context-one">
                            <img src={yanchu} alt=""/>
                            <div className="show-context-title">3科幻舞台剧3科幻舞台剧</div>
                            <div className="show-context-price">
                                <span>180¥</span>
                                <i>起</i>
                            </div>
                        </div>
                        <div className="show-context-one">
                            <img src={yanchu} alt=""/>
                            <div className="show-context-title">3科幻舞台剧3科幻舞台剧</div>
                            <div className="show-context-price">
                                <span>180¥</span>
                                <i>起</i>
                            </div>
                        </div>
                        <div className="show-context-one">
                            <img src={yanchu} alt=""/>
                            <div className="show-context-title">3科幻舞台剧3科幻舞台剧</div>
                            <div className="show-context-price">
                                <span>180¥</span>
                                <i>起</i>
                            </div>
                        </div>
                        <div className="show-context-one">
                            <img src={yanchu} alt=""/>
                            <div className="show-context-title">3科幻舞台剧3科幻舞台剧</div>
                            <div className="show-context-price">
                                <span>180¥</span>
                                <i>起</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getPriority.call(this);
        this.myscroll = new IScroll('#abc',{
                mouseWheel: true,
                scrollX: true
                
        })
    }
}
function mapStateToProps({home}){
    return{
        referer:home.referer,
        version:home.version,
        priorList:home.priorList.pop(),
    }   
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(homeCreactor,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);