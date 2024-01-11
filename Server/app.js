const http = require('http')
http.createServer((req,res) =>{
    res.setHeader('Content-Type' , 'test/plain')
    res.writeHead(200)
    res.write('Home page')
    res.end()
})

const 