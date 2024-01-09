const http = require('http')
// const PORT =1000
const server = http.createServer((req, res) => {
    // console.log('Request made')
    res.setHeader('Content-Type', 'text/plain')
    // console.log(req.url)
    switch (req.url) {
        case '/':
            res.writeHead(200)
            res.write('Homepage')
            res.end()
            break;
        case '/Login':
            res.writeHead(200)
            res.write('Login page')
            res.end()
            break;
        case '/Signup':
            res.writeHead(200)
            res.write('SignUp page')
            res.end()
            break;
        case 'Profile':
            res.writeHead(200)
            res.write('Profile Page')
            res.end()
            break
        
        default:
            res.writeHead(404)
            res.write('404 page not found')
            res.end()
    }
})


server.listen( 1000, 'localhost', () => {
    console.log('listening on port 1000')
})