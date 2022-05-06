const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' })
	fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.port || 3000)