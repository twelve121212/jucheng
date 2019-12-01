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
    app.use("/l",proxy({
        target:"http://127.0.0.1:8090",
        changeOrigin: true,
        pathRewrite:{
            "^/l":""
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