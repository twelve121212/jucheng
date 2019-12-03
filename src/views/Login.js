import React from "react";
import "../assets/Y_sass/Login.scss"
import "../assets/iconfont/iconfont.css"
import {connect} from "react-redux"
// import {bindActionCreators} from "redux"
// import getUserInfo from "../store/actionCreator/user/index"
class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            num:Math.floor(Math.random()*8999+1000)
        }
    }
    render(){
        return (
            <div class="login" ref="login">
                <div class="login_top">
                    <i class="iconfont icon-dayuhao1" onClick={()=>{this.props.history.push("/")} }></i>
                </div>
                <div class="login_main">
                    <h1>欢迎来到聚橙网</h1>
                    <from>
                        <input type="text" placeholder="请输入手机号/邮箱" class="num_user num veris" ref="phone" onBlur={()=>{
                            


                        }}/>
                        <input type="text" placeholder="请输入手机号" class="register num_user num veri" ref="phoneNum" placeholder="+86" style={{"display":"none"}}/>
                        <p style={{
                            "text-align":"left",
                            "font-size":"13px",
                            "display":"none"
                            }} class="veri">
                            未注册的手机号登录后自动注册</p>
                        <input  type="password" placeholder="请输入密码" class="num_pass num veris" ref="password" />
                        <input  type="text" placeholder="请输入验证码" class="num_pass num veri" ref="indent" style={{
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
                        }} class="veri" onClick={()=>{                           
                            var numn = Math.floor(Math.random()*8999+1000)
                            console.log(numn)
                            this.setState({
                                num:numn
                            })
                        }}>
                            {this.state.num}
                        </div>
                    </from>
                </div>
                <div class="login_btn">
                    <button class="btn veris" ref="btn" onClick={
                        ()=>{
                            this.props.getUserInfo.bind(this,this.refs.phone.value,this.refs.password.value)();
                            if(this.props.userId){
                                this.props.history.push("/my")
                            }
                        }
                            }>登录</button>
                    <button class="btn veri" style={{"display":"none"}} onClick={()=>{
                        var reg = /^1[345789]\d{9}$/
                        var res = reg.test(this.refs.phoneNum.value)
                        console.log(res)
                        console.log(this.refs.phoneNum.value)
                        if(res){
                            this.$axios.post("/l/code");
                            if(this.state.num === parseInt(this.refs.indent.value)){
                                // console.log(1111)
                                let body = document.body;
                                let showDom = document.createElement("div");
                                showDom.style.position = 'absolute';
                                showDom.style.top = '220px';
                                showDom.style.left = '26px';
                                showDom.style.background = '#ffdead';
                                showDom.style.width = "320px";
                                showDom.style.height = "120px";
                                showDom.style.borderRadius = "20px"
                                this.refs.login.style.opacity = "0.1"
                                body.appendChild(showDom);
                                let showDomInput = showDom.appendChild(document.createElement("input")) ;
                                let confirm = showDom.appendChild(document.createElement("button")) ;
                                let cancle = showDom.appendChild(document.createElement("button")) ;
                                showDomInput.style.border = "none"
                                showDomInput.style.background = "#fff"
                                showDomInput.style.fontSize = "14px"
                                showDomInput.placeholder = "请输入短信验证码"
                                showDomInput.style.outline = "none"
                                showDomInput.style.display = "block"
                                showDomInput.style.textIndent = "20px"
                                showDomInput.style.margin = "20px auto"
                                showDomInput.style.height = "40px"
                                showDomInput.style.width = "280px"
                                showDomInput.style.borderRadius = "5px"
                                confirm.style.border = "none"
                                cancle.style.border = "none"                           
                                confirm.style.outline = "none"
                                cancle.style.outline = "none"
                                confirm.style.height = "30px"
                                confirm.style.width = "70px"
                                confirm.style.background = "#fff"
                                cancle.style.background = "#fff"
                                cancle.style.height = "30px"
                                cancle.style.width = "70px"
                                cancle.style.marginLeft = "20px"  
                                confirm.style.borderRadius = "5px"
                                cancle.style.borderRadius = "5px"
                                confirm.innerHTML = "确定"
                                cancle.innerHTML = "取消"
                                confirm.style.marginLeft = "140px"
                                cancle.onclick = () => {
                                    body.removeChild(showDom);
                                    this.refs.login.style.opacity = "1"
                                }
                                let phoneNum = this.refs.phoneNum.value
                                // console.log(showDomInput)

                                let code = {
                                    code:showDomInput.value,
                                    time:Date.now()
                                }
                                confirm.onclick = () => {
                                    console.log(phoneNum)
                                    console.log(111111111111,showDomInput.value)

                                    this.$axios.post("/l/userInfo",{
                                        params:{
                                            phoneNum,
                                            code:{
                                                code:showDomInput.value,
                                                time:Date.now()
                                            }
                                        }
                                    }).then(({data})=>{
                                        if(data.ok === 1){
                                            this.props.history.push("/login")
                                            alert("注册成功,您的临时密码是："+data.loginPassword+",请尽快修改")   
                                        }else{
                                            // console.log(data)
                                            alert(data.msg)
                                        }
                                    })
                                    body.removeChild(showDom);
                                    this.refs.login.style.opacity = "1"
                                }
                             
                            }else{
                                alert("验证码错误")
                            }
                        }else{
                            alert("无效的手机号")
                        }
                    }}>注册</button>
                </div>
                <div class="login_forget">
                    <p class="login_forget_left">忘记密码</p>
                    <p class="login_forget_right"
                        onClick={()=>{
                            veri = !veri;
                            const v = document.querySelectorAll(".veri");
                            const vs = document.querySelectorAll(".veris");
                            if(veri){
                                // document.querySelector(".btn").innerHTML = "登录"
                                for(var i = 0; i < v.length; i++){
                                    v[i].style.display = "none"
                                }
                                for(var i = 0; i < vs.length; i++){
                                    vs[i].style.display = "block"
                                }
                            }else{
                                // document.querySelector(".btn").innerHTML = "注册"
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
            // console.log(111,phoneNumm)
            var reg = /^1[345789]\d{9}$/
            var res = reg.test(phoneNum)
            if(res){
                this.$axios.get("/l/userInfo",{
                    params:{
                        phoneNum,
                        loginPassword
                    }
                }).then(({data})=>{
                    console.log(data)
                    if(data.ok != 1){
                        alert("用户名或密码错误")
                    }else{
                        dispatch({type:"UP_USERINFO",payload:data.results})
                    }
                    
                })
            }else{
                alert("无效的手机号")
            }
                
            
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
