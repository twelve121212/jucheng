const db = require("./module/db");
const tools = require("./module/tools");
const express = require("express");
const mongodb = require("mongodb");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/userInfo",async function(req,res){
    const {phoneNum,loginPasswwword} = req.query;
    const results = await db.findOne("userInfo",{
        phoneNum,
        loginPasswwword
    })
    if(results){
        res.json({
            ok:1,
            results
        })
    }else{
        tools.json(res,-1,"账户或密码错误")
    }
})


app.listen(8090,function(){
    console.log("OK")
})