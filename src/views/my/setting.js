// 用户设置
import React from "react";
import "../../assets/iconfont/iconfont.css";
import "../../assets/Y_sass/setting.scss"
export default class Setting extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div class="setting">
                <div class="setting-header">
                    <i class="iconfont icon-dayuhao1" onClick={()=>{this.props.history.push("/my")}}></i>
                    <span class="setting-title">账户设置</span>
                    <i class="iconfont icon-sandian"></i>
                </div>
                <div class="setting-main">
                    <div class="setting-main-top">
                        <li>
                            <span>头像</span>
                            <i></i>
                        </li>
                        <li class="space">
                            <span>昵称</span>
                            <i></i>
                        </li>
                    </div>
                    <div class="setting-main-bottom">
                        <li>
                            <span>手机号</span>
                            <i></i>
                        </li>
                        <li>
                            <span>生日信息</span>
                            <i></i>
                        </li>
                        <li>
                            <span>登录密码</span>
                            <i></i>
                        </li>
                        <li>
                            <span>支付密码</span>
                            <i></i>
                        </li>
                        <li>
                            <span>实名认证</span>
                            <i></i> 
                        </li>
                        <li>
                            <span>用户协议</span>
                            <i></i>
                        </li>
                        <li class="last">
                            <span>头像</span>
                            <i></i>
                        </li>
                    </div>
                </div>
                <button class="setting-footer">退出登录</button>
            </div>
        )
    }
        
    
}