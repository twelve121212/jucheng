import React from "react";
import{
    bindActionCreators
}from "redux";
import homeCreactor from "../store/actionCreator/home";
import {connect} from "react-redux";

import IScroll from 'iscroll';
import {Link} from "react-router-dom"
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
                <div className="header">
                    <Link className="position" to={"/citychose"}>
                        <i id="container" className="iconfont icon-location"></i>全国
                    </Link>
                    <div className="search">
                        <i className="iconfont icon-soushuo"></i>
                        <span>搜索热门演出</span>
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
                {/* <div className="priority">
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
                                </div>
                                <div className="remind">开售提醒</div>
                            </div>
                        </div>
                    </div> */}

                {/* 热门演出 */}
                <div className="hotShow">
                    <div className="hotShow-title">
                        <span>热门演出</span>
                        <i className="iconfont icon-dayuhao"></i>
                    </div>
                    <div id="abc">
                    <div className="hotShow-center" >
                        {
                            this.props.hots_show_list.map(v=>(
                                <div className="hotShow-context" key={v.schedular_url}>
                                    <img src={v.pic} alt=""/>
                                    <div className="hotShow-headline">{v.show_name}</div>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                </div>
                {/* 巡回演出 */}
                <div className="tourShow">
                    <div className="tourShow-title">
                        <span>巡回演出</span>
                        <Link to={"/tourdetail"}>
                            <i className="iconfont icon-dayuhao"></i>
                        </Link>
                    </div>
                    <div className="tourShow-center">
                        {
                            this.props.tour_show_list.map(v=>(
                                <div className="tourShow-context" key={v.tour_show_url}>
                                    <img src={v.pic} alt=""/>
                                    <div className="tourShow-headline">{v.show_name}</div>
                                    <span>{v.schedular_num}场巡演</span>
                                </div>
                            ))
                        }
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
                                {
                                    this.props.allList.map(v=>(
                                        <div className="ticket-context" key={v.pic}>
                                            <img src={v.pic} alt=""/>
                                            <div className="ticket-price">
                                                <span>¥{v.fixed_price}</span>
                                                <i>{v.price}</i>
                                            </div>
                                        </div>
                                    ))
                                }
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
                                {
                                    this.props.discountList.map(v=>(
                                        <div className="discount-context" key={v.pic}>
                                            <img src={v.pic} alt=""/>
                                            <div className="discount-dis">
                                                <span>{v.min_discount}</span>
                                                <i>折</i>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* 演出类型 */}
                <div>{
                this.props.showTypeList.map(v=>(
                    <div className="show" key={v.title}>
                    <div className="show-title">
                        <span>{v.title}</span>
                        <i className="iconfont icon-dayuhao"></i>
                    </div>
                    <div className="show-center">
                        <div className="show-center-left">
                            <img src={v.list[0].pic}/>
                        </div>
                        <div className="show-center-right">
                            <div className="show-date">
                                <span>2019/{v.list[0].date}</span>
                                <i>{v.list[0].week}</i>
                            </div>
                            <div className="show-headline">{v.list[0].schedular_name}</div>
                            <div className="show-address">{v.list[0].city_name} | {v.list[0].venue_name}</div>
                        </div>
                    </div>
                    {
                        console.log(v.list.shift())
                    }
                    <div className="show-context">{ 
                    v.list.map(a=>(
                        <div className="show-context-one" key={a.sche_id}>
                            <img src={a.pic} alt=""/>
                            <div className="show-context-title">{a.schedular_name}</div>
                            <div className="show-context-price">
                                <span>¥{a.low_price}</span>
                                <i>起</i>
                            </div>
                        </div> 
                    ))
                    }</div>
                </div>
                ))
                }
                </div>    
            </div>
        )
    }
    componentDidMount(){
        this.props.getPriority.call(this);
        this.props.getHostShow.call(this);
        this.props.getTourList.call(this);
        this.props.getVipDiscount.call(this);
        this.props.getShowTypeList.call(this);
    }
}
function mapStateToProps({home}){
    console.log(home.showTypeList)
    return{
        referer:home.referer,
        version:home.version,
        priorList:home.priorList.pop(),
        hots_show_list:home.hots_show_list.slice(0,10),
        tour_show_list:home.tour_show_list,
        allList:home.allList.slice(0,2),
        discountList:home.discountList.slice(0,1),
        showType:home.showTypeList.list,
        showTypeList:home.showTypeList,
    }   
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(homeCreactor,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
