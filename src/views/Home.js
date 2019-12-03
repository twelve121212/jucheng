import React from "react";
import{
    bindActionCreators
}from "redux";
// import Slide from "./Slide";
import homeCreactor from "../store/actionCreator/home";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import "../assets/css/reset.css"
import '../assets/iconfont/iconfont.css';
import "../assets/css/home.css"
import lunbo from "../assets/Y_images/lunbo.jpg"
import fenxiang from "../assets/Y_images/fenxiang.png"
import Swiper from 'swiper/js/swiper.js' 
import 'swiper/css/swiper.css'  
class Home extends React.Component {
    render() {
        return (
            <div id="home">
                {/* 网页头部 */}
                <div className="header">
                    <Link className="position"  to={{pathname:"citychose",state:{city: localStorage.city||this.props.city}}}>
                        <i id="container" className="iconfont icon-location"></i>{localStorage.city||this.props.city}
                    </Link>
                    <Link className="search" to="/search"> 
                        <i className="iconfont icon-soushuo"></i>
                        <span>搜索热门演出</span>
                    </Link>
                    <Link className="date" to={"/calendar"}>
                        <i className="iconfont icon-riqi"></i>
                    </Link>
                    <div className="share">
                        <img src={fenxiang} alt=""/>
                    </div>
                </div>
                {/* 轮播图 */}
                <div className="swiper">
                    <div className="swiper-container">
                        <div className="swiper-wrapper" >
                            {
                                this.props.slide_list.map(v=>(
                                    <div className="swiper-slide">
                                        <img src={v.image_url} alt=""/>
                                    </div>
                                    ))
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>

                {/* 图形中部导航 */}
                <div className="picNav">
                    {
                        this.props.classify_list.map((v,i)=>(
                            <Link className="picnav vocol" key={i} to={{pathname:'/showtype',query:{cid:0,caid:v.category_id}}}>
                                <img src={v.pic} alt=""/>
                                <div>{v.name}</div>
                            </Link>
                        ))
                    }
                </div>
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
                 {(this.props.showTypeList.length>0)?
                    <div>{
                        this.props.showTypeList.map((v,i)=>(
                            (v.list.length>0)?
                            <div className="show" key={i}>
                            <div className="show-title">
                                <span>{v.title}</span>
                                <i className="iconfont icon-dayuhao"></i>
                            </div>
                            <div className="show-center">
                                
                                {/* {console.log(v.list[0])} */}
                                {(v.list.length>0)?
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
                                </div>:null
                                }
                            </div>
                            {
                                // console.log(v.list.shift())
                            }
                            <div className="show-context">{
                                v.list.map((a,k)=>(
                                    <div className="show-context-one" key={k}>
                                        <img src={a.pic} alt=""/>
                                        <div className="show-context-title">{a.schedular_name}</div>
                                        <div className="show-context-price">
                                            <span>¥{a.low_price}</span>
                                            <i>起</i>
                                        </div>
                                    </div> 
                                ))
                                }</div>
                        </div>:null
                        ))
                        }
                    </div>:null  
                }
                {/* 为你推荐 */}
                <div className="recommend">
                    <div className="recommend-header">为你推荐</div>
                    <div className='context'>
                        {
                            this.props.list.map((v,i)=>{
                            return <div key={i}>
                                < img src={v.pic} alt='' />
                                <div>
                                    {
                                        v.show_time_bottom?<h3>
                                        {v.start_show_time}
                                        <span>{v.show_time_bottom}</span>
                                        </h3>:<h3>2019.{v.show_time_top}</h3>
                                    }
                                <h2>{v.name}</h2>
                                <h5>
                                <span>{v.city_name}</span> | <span>{v.venue_name}</span>
                                </h5>
                                <h4>￥{v.min_price}<span>起</span></h4>
                                </div>
                                </div>
                            })
                        } 
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getPriority.call(this,city_id);
        this.props.getHostShow.call(this,city_id);
        this.props.getTourList.call(this,city_id);
        this.props.getVipDiscount.call(this,city_id);
        this.props.getShowTypeList.call(this,city_id); 
        this.props.getPicNav.call(this,city_id);
        this.props.getShowList.call(this,city_id);
        // if(this.props.location.state !== undefined){
        //     this.setState({
        //         city:this.props.location.state.city
        //     })
        // }
        saveCity(this)
        new Swiper('.swiper-container',{
            loop:true,
            pagination:{
                el:'.swiper-pagination',
                clickable: true, 
            },
            autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 2000,
                disableOnInteraction:false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            observer:true,
            // observerParents:true,
            });
    }
}
function mapStateToProps({home}){
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
        city:home.city,
        classify_list:home.classify_list,
        slide_list:home.slide_list,
        list:home.list,
    } 
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(homeCreactor,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
let city_id=0;
function saveCity(that){
    if(that.props.location.state !== undefined && that.props.location.state !== null){
        localStorage.city = that.props.location.state.city;
        localStorage.city_id=city_id=that.props.location.state.city_id
    } 
}
