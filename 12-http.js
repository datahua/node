const http = require('http')

const server = http.createServer((req, res) => {
    // req: incoming request
    // res: sending back
    if (req.url === '/') {
        res.end('this is the response, welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back Home</a>`)
})

server.listen(5000)