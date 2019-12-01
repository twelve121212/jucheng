const proxy = require('http-proxy-middleware');
module.exports = function(app){
    app.use("/m",proxy({
            target:"https://m.juooo.com",
            changeOrigin: true,
            pathRewrite:{
                "^/m":""
            }
        })    
    )
    app.use("/n",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/n":""
        }
    }))
}