const db = require("./module/db");
const tools = require("./module/tools");
const express = require("express");
const mongodb = require("mongodb");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/userInfo",async function(req,res){
    const {phoneNum,loginPassword} = req.query;
    console.log(req.query)
    console.log(phoneNum)
    console.log(loginPassword)
    const results = await db.findOne("userInfo",{
        phoneNum,
        loginPassword:loginPassword/1
    })
    console.log(222222,results)
    if(results){
        console.log(11111111)
        res.json({
            ok:1,
            results
        })
    }else{
        tools.json(res,-1,"账户或密码错误")
    }
})

app.post("/code",async function(req,res){
    const code = Math.floor(Math.random()*8999+1000);
    console.log(code)
    await db.removeAll("code");
    await db.insertOne("code",{
        code,
        time:Date.now()
    })
})
app.post("/userInfo",async function(req,res){
    const {phoneNum,code} = req.body.params;
    const oldCode = await db.findOne("code");
    // console.log(11111111,oldCode)
    // console.log(2222222,code)
    // console.log(33333333,phoneNum)
    console.log(11111,code.code)
    console.log(11111,oldCode.code)

    if(code.code/1 === oldCode.code){
        console.log(111111)
        if(code.time-oldCode.time>1000*60*5){
            tools.json(res,-1,"验证码过期了")
        }else{
            // console.log(phoneNum)
            const loginPassword = Math.floor(Math.random()*89999999+10000000);
            const userId = Math.floor(Math.random()*899999+100000);
            const results = await db.insertOne("userInfo",{
                // 账户ID
                userId,
                // 用户名
                userName:"小橙子",
                // 头像
                userHeadPhoto:"",
                // 手机号
                phoneNum,
                // 邮箱
                mailbox:"",
                // 生日
                birthdayInfo:"",
                // 登录密码
                loginPassword,
                // 支付密码
                payPassword:"",
                // 账户信息
                userCount:{
                    // 余额
                    accountBalances:"0",
                    // 积分
                    integral:"0",
                    // 优惠券
                    coupon:"0",
                    // 订单
                    order:[],
                    // 票夹
                    ticketHolder:[],
                    // 卡包
                    cardBag:[],
                    // 收货地址
                    receivingAddress:[],
                    // 实名信息
                    realName:{
                        // 姓名
                        name:"",
                        // 身份证
                        idCard:""
                    }
                }
                
            })
            if(results){
                res.json({
                    ok:1,
                    loginPassword
                })
            }else{
                tools.json(res,-1,"账户创建失败")
            }
        }
    }else{
        tools.json(res,-2,"验证码错误")
    }
})

app.listen(8090,function(){
    console.log("OK")
})