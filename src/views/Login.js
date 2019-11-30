import React from "react";
import "../assets/Y_sass/Login.scss"
import "../assets/iconfont/iconfont.css"
import {connect} from "react-redux"
// import {bindActionCreators} from "redux"
// import getUserInfo from "../store/actionCreator/user/index"
class Login extends React.Component{
    render(){
        return (
            <div class="login">
                <div class="login_top">
                    <i class="iconfont icon-dayuhao1"></i>
                </div>
                <div class="login_main">
                    <h1>欢迎来到聚橙网</h1>
                    <from>
                        <input type="text" placeholder="请输入手机号/邮箱" class="num_user num veris" ref="phone" />
                        <input type="text" placeholder="请输入手机号" class="register num_user num veri" ref="" value="+86" style={{"display":"none"}}/>
                        <p style={{
                            "text-align":"left",
                            "font-size":"13px",
                            "display":"none"
                            }} class="veri">
                            未注册的手机号登录后自动注册</p>
                        <input  type="password" placeholder="请输入密码" class="num_pass num veris" ref="password"/>
                        <input  type="password" placeholder="请输入验证码" class="num_pass num veri" ref="password" style={{
                            "width":"200px",
                            "margin-top":"20px",
                            "display":"none"
                            }}/>
                        
                        <div style={{
                            "float":"right",
                            "background":"#f5f5dc",
                            "width":"100px",
                            "margin-top":"-55px",
                            "height":"40px",
                            "line-height":"40px",
                            "letter-spacing":"10px",
                            "font-size":"20px",
                            "color":"#800000",
                            "display":"none"
                        }} class="veri">1234</div>
                    </from>
                </div>
                <div class="login_btn">
                    <button class="btn" onClick={
                        ()=>{
                            this.props.getUserInfo.bind(this,this.refs.phone.value,this.refs.phone.value)();
                            // console.log( localStorage.userInfo)
                            if(this.props.userId){
                                this.props.history.push("/my")
                            }
                        }
                            }>登录</button>
                </div>
                <div class="login_forget">
                    <p class="login_forget_left">忘记密码</p>
                    <p class="login_forget_right"
                        onClick={()=>{
                            veri = !veri;
                            const v = document.querySelectorAll(".veri");
                            const vs = document.querySelectorAll(".veris");
                            if(veri){
                                document.querySelector(".btn").innerHTML = "登录"
                                for(var i = 0; i < v.length; i++){
                                    v[i].style.display = "none"
                                }
                                for(var i = 0; i < vs.length; i++){
                                    vs[i].style.display = "block"
                                }
                            }else{
                                document.querySelector(".btn").innerHTML = "注册"
                                for(var i = 0; i < v.length; i++){
                                    v[i].style.display = "block"
                                }
                                for(var i = 0; i < vs.length; i++){
                                    vs[i].style.display = "none"
                                }
                            }
                        }}
                    
                    >验证码登录/注册</p>
                </div>
                <div class="login_footer">
                    <p class="login_footer_other">其他登录方式</p>
                    <div class="empty"></div>
                    <div class="login_footer_core">
                        <i class="icon-QQ iconfont"></i>
                        <i class="icon-weibo- iconfont"></i>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        localStorage.userInfo = JSON.stringify(this.props.userInfo);
        
    }
    componentWillUnmount(){

        // this.props.getUserInfo.bind(this,this.refs.phone.value,this.refs.phone.value)()
    }
}
let veri = false;









function mapStateToProps(state){
    // console.log(state)
    return{
      userInfo:state.userInfo,
      userId:state.userInfo.userId,
    //   phoneNum:state.userInfo.phoneNum,
    //   loginPassword:state.userInfo.loginPassword
    }
}
function mapDispatchToProps(dispatch){
    return {
        getUserInfo(phoneNum,loginPassword){
            this.$axios.get("/userInfo",{
                params:{
                    phoneNum,
                    loginPassword
                }
            }).then(({data})=>{
                // console.log(data)
                dispatch({type:"UP_USERINFO",payload:data.results})
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);