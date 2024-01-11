const http = require('http')

const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type' , 'Text/plain')
    res.writeHead(200)
    res.write('welcome')
    res.end()
})

server.listen(4000 , 'localhost' ,() =>{
    console.log('listeing on port 4000')
})
