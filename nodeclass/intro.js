// You can create a server

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!')
})

port = 3000
server.listen(port, () => {
    console.log(`server is running at port ${port}`);
});