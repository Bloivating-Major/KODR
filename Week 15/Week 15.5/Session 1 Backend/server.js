const app = require('./src/app');

//  npm socket.io 
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', socket => {
    console.log("User Connected");
});
server.listen(3000, ()=>{
    console.log("Server started on port 3000");
});