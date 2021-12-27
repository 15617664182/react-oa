const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        // 开发环境配置反响代理
        '/api',
        createProxyMiddleware({
            target:'https://i.maoyan.com',
            changeOrigin:true
        })
    )
}