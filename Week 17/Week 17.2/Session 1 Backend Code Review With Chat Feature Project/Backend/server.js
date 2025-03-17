const app = require('./src/app');
const connectDB = require('./src/db/db');


connectDB(); // Connect to MongoDB database


// Socket Io Setup
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors : {
        origin: '*'
    }
});
io.on('connection', socket =>{
    const projectId = socket.handshake.query.projectId

    socket.join(projectId)

    console.log('New client connected');

    socket.on("message", msg => {
        console.log(msg)
        socket.to(projectId).emit('message', msg)
    })
})


app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});