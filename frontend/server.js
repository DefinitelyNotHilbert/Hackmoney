// Here is the custom server.js file where we are using http-proxy-middleware to proxy all the calls with context path /api. 
// We are proxying only if it is a development environment and all other requests will be redirected to Next.js router.
const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiPaths = {
    '/defi': {
        target: 'http://localhost:8000',
        pathRewrite: {
            '^/defi': '/defi'
        },
        changeOrigin: true
    },
    '/daos': {
        target: 'http://localhost:8000',
        pathRewrite: {
            '^/daos': '/daos'
        },
        changeOrigin: true
    }
}

const isDevelopment = process.env.NODE_ENV !== 'production'

app.prepare().then(() => {
    const server = express()

    if (isDevelopment) {
        server.use('/defi', createProxyMiddleware(apiPaths['/defi']));
        server.use('/daos', createProxyMiddleware(apiPaths['/daos']));
    }

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
}).catch(err => {
    console.log('Error:::::', err)
})