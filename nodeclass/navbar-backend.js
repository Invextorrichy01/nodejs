const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('./navbar/navbar.html')
const homeStyles = fs.readFileSync('./navbar/navbar.css')
const homeJs = fs.readFileSync('./navbar/navbar.js')
const contact = fs.readFileSync('./navbar/contact.html')
const contactStyle= fs.readFileSync('./navbar/contact.css')
const about = fs.readFileSync('./navbar/about.html')
const aboutStyle = fs.readFileSync('./navbar/about.css')
const home = fs.readFileSync('./navbar/homePage.html')
const homeDecor = fs.readFileSync('./navbar/homePage.css')
const project = fs.readFileSync('./navbar/projects.html')
const projectStyle = fs.readFileSync('./navbar/projects.css')


const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(homePage)
        res.end();
    } else if (url === '/navbar.css') {
        res.writeHead(200, {"Content-Type": "text/css"})
        res.write(homeStyles)
        res.end();
    } else if (url === '/navbar.js') {
        res.writeHead(200, {"Content-Type": "text/js"})
        res.write(homeJs)
        res.end();
    } else if (url === '/contact.html') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(contact)
        res.end();
    } else if (url === '/contact.css') {
        res.writeHead(200, {"Content-Type": "text/css"})
        res.write(contactStyle)
        res.end();
    } else if (url === '/about.html') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(about)
        res.end();
    } else if (url === '/about.css') {
        res.writeHead(200, {"Content-Type": "text/css"})
        res.write(aboutStyle)
        res.end();
    } else if (url === '/index.html') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(home)
        res.end();
    } else if (url === '/homePage.css') {
        res.writeHead(200, {"Content-Type": "text/css"})
        res.write(homeDecor)
        res.end();
    } else if (url === '/projects\.html') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(project)
        res.end();
    } else if (url === '/projects\.css') {
        res.writeHead(200, {"Content-Type": "text/css"})
        res.write(projectStyle)
        res.end();
    } else {
        res.writeHead(404, {"Content-Type": 'text/html'})
        res.end('<h1>Error Page</h1>')
    }
})

port = 5000

server.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})