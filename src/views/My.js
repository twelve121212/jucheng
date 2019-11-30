import React from "react";
import "../assets/Y_sass/My.scss"
import "../assets/iconfont/iconfont.css"
import headportrait from "../assets/Y_images/headportrait.jpg"
import vipPic from "../assets/images/vip.png"
// import {connect} from "react-redux"
export default class My extends React.Component{
    constructor(){
        super()
        this.state = {
            userInfo:{
                userId:"",
                userName:"",
                userHeadPhoto:"",
                phoneNum:"",
                mailbox:"",
                birthdayInfo:"",
                loginPassword:"",
                payPassword:"",
                userCount:{
                    accountBalances:"",
                    integral:"",
                    coupon:"",
                    order:[],
                    ticketHolder:[],
                    cardBag:[],
                    receivingAddress:[],
                    realName:{
                        name:"",
                        idCard:""
                    }
                }
                
            }
        }
    }
    render(){
        return (
            <div class="my">
                <div class="bg-top"></div>
                <div class="setup">
                    <i class="iconfont icon-shezhi" onClick={()=>{
                        this.props.history.push("/my/setting")
                    }}></i>
                </div>
                <div class="my-info-wrap">
                    <div class="my-info-header">
                        <span class="my-info-username">{this.state.userInfo.userName}</span>
                        <span class="my-info-id">ID:{this.state.userInfo.userId}</span>
                    </div>
                    <div class="my-info-ordinarymember">
                        普通会员
                    </div>
                    <div class="my-info-count">
                        <div class="my-info-count-content">
                            <li class="my-info-count-data">{this.state.userInfo.userCount.accountBalances}</li>
                            <li class="my-info-count-item">账户余额</li>
                        </div>
                        <span class="split"></span>
                        <div class="my-info-count-content">
                            <li class="my-info-count-data">{this.state.userInfo.userCount.integral}</li>
                            <li class="my-info-count-item">积分</li>
                        </div>
                        <span class="split"></span>
                        <div class="my-info-count-content">
                            <li class="my-info-count-data">{this.state.userInfo.userCount.coupon}</li>
                            <li class="my-info-count-item">优惠券</li>
                        </div>
                        <span class="split split-thin"></span>
                        <div class="my-info-count-content">
                            <li class="my-info-count-data open">立即开通</li>
                            <li class="my-info-count-item">橙PLUS卡</li>
                        </div>
                    </div>
                </div>
                <img class="headcard" src={headportrait} />
                <a  href="https://m.juooo.com/shop/vip/buy" class="my-vip">
                    <img  src={vipPic} alt="" class="my-vip-pic" />
                </a>
                <div class="my-info-other">
                    <ul class="my-info-other-first">
                        <li class="my-info-other-first-main">
                            <i class="iconfont icon-icon--copy"></i>
                            <span class="my-info-other-explain">我的订单</span>
                        </li>
                        <li class="my-info-other-first-main">
                            <i class="iconfont icon-piaojia"></i>
                            <span class="my-info-other-explain">我的票夹</span>
                        </li>
                        <li class="my-info-other-first-main">
                            <i class="iconfont icon-qiabao"></i>
                            <span class="my-info-other-explain">我的卡包</span>
                        </li>
                    </ul >
                    <ul class="my-info-other-first">
                        <li class="my-info-other-first-main">
                            <i class="iconfont icon-shiming"></i>
                            <span class="my-info-other-explain">实名购票人</span>
                        </li>
                        <li class="my-info-other-first-main">
                            <i class="iconfont icon-location1"></i>
                            <span class="my-info-other-explain">收货地址</span>
                        </li>
                        <li class="my-info-other-first-main">
                            <i class="iconfont icon-yijian"></i>
                            <span class="my-info-other-explain">意见反馈</span>
                        </li>
                        <li class="my-info-other-first-main">
                            <i class="iconfont icon-kefu"></i>
                            <span class="my-info-other-explain">客服帮助</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    componentWillMount(){
        if(!localStorage.userInfo){
            this.props.history.push("/login")
        }else{
            this.state.userInfo = JSON.parse(localStorage.userInfo)
        }
        
    }
}
