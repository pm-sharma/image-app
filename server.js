var http = require('http');
var app = require('./app')

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server running on ${port}`)
})