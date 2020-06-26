module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: 'http://192.168.1.23',
                ws: true,
                changeOrigin: true
            }
        },
    }
}