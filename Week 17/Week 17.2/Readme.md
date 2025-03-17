- socket io client is a package used to setup socket io connection on frontend
- setup connection through url of backend in useEffect of socket
- then save the connection in a temp variable.
- then send a message to the backend
    - use socket.emit to send a message to the backend
    socket.emit('message', currentMessage); 
    - receive that message with the same name in backend
    - on frontend you can receive a message from backend
        - tempSocket.on('message)

- setting socket io in backend

- Creating a Room 
    - name of a room should always be unique so we will pass id of a project to backend to create a Room
    - you have to send data from frontend using query and then use it in backend using socket.handshake.query.projectId
    - socket.join(projectId);

- ports 
    - forward a port 
    - open port 3000 it will provide you a link
        - by default it is private you can make it public
    - open port 5173 
        - make it public
    