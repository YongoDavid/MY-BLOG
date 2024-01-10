const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200)
    res.write('Welcome to home page')
    res.end()
})

server.listen(2000, 'localhost', () => {
    console.log('listening on port 2000')
})