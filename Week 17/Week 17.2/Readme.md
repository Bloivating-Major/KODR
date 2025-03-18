Here’s your **Week 17 Day 2 Session 1 Backend** README, covering **Socket.io integration, message handling, and creating rooms** 🚀  

---

# 📡 **WebSockets with Socket.io - Real-time Communication**  

In this session, we implemented **real-time communication** using **Socket.io**. This allows instant message transfer between the frontend and backend. We also covered **creating rooms**, **handling messages**, and **forwarding ports**.  

---

## 🎯 **Topics Covered**
✅ **Socket.io Client Setup**  
✅ **Connecting Frontend to Backend using Socket.io**  
✅ **Sending & Receiving Messages**  
✅ **Creating and Managing Rooms**  
✅ **Port Forwarding for Local Development**  

---

## 🔗 **Socket.io Client (Frontend) Setup**  

1️⃣ Install **Socket.io Client**  
```bash
npm install socket.io-client
```

2️⃣ **Connect to Backend using useEffect**  
```javascript
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatComponent = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    // Connect to the backend WebSocket
    const tempSocket = io("http://localhost:3000");

    setSocket(tempSocket);

    // Listen for messages from the backend
    tempSocket.on("message", (msg) => {
      setReceivedMessage(msg);
    });

    return () => tempSocket.disconnect();
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      socket.emit("message", message);
    }
  };

  return (
    <div>
      <h2>Real-time Chat</h2>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>

      <h3>Received Message: {receivedMessage}</h3>
    </div>
  );
};

export default ChatComponent;
```

🔹 **Key Points:**  
- **`io("http://localhost:3000")`** → Connects frontend to backend WebSocket.  
- **`socket.emit("message", message)`** → Sends message to the backend.  
- **`socket.on("message", callback)`** → Listens for messages from the backend.  

---

## 🖥️ **Socket.io Server (Backend) Setup**  

1️⃣ Install **Socket.io**  
```bash
npm install socket.io
```

2️⃣ **Setup WebSocket Server**  
📌 **File:** `server.js`
```javascript
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("🔌 A user connected:", socket.id);

  // Receiving a message from frontend
  socket.on("message", (msg) => {
    console.log("📩 Message Received:", msg);
    
    // Sending message back to frontend
    io.emit("message", msg);
  });

  // Handling Disconnection
  socket.on("disconnect", () => {
    console.log("❌ User Disconnected");
  });
});

// Start the Server
server.listen(3000, () => {
  console.log("🚀 WebSocket Server running on port 3000");
});
```

🔹 **Key Points:**  
- **`io.on("connection", callback)`** → Handles new connections.  
- **`socket.on("message", callback)`** → Listens for messages from clients.  
- **`io.emit("message", msg)`** → Broadcasts messages to all clients.  

---

## 🏠 **Creating a Room in Socket.io**  

1️⃣ **Join a Room from Frontend**  
```javascript
const projectId = "12345"; // Unique project ID

const tempSocket = io("http://localhost:3000", {
  query: { projectId },
});

tempSocket.emit("joinRoom", projectId);
```

2️⃣ **Handle Room Creation in Backend**  
📌 **File:** `server.js`
```javascript
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Extract Project ID from Query
  const projectId = socket.handshake.query.projectId;
  if (projectId) {
    socket.join(projectId);
    console.log(`User joined room: ${projectId}`);
  }

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});
```

🔹 **Key Points:**  
- **Rooms ensure users only receive messages relevant to them.**  
- **`socket.join(roomId)`** → User joins a specific room.  
- **`socket.to(roomId).emit("event", data)`** → Sends data only to users in that room.  

---

## 🌍 **Port Forwarding for Local Development**  

🔹 **Why?**  
- To **expose local servers** to the public internet.  
- Useful when testing WebSocket connections across different devices.  

🔹 **Steps:**  
1. **Forward Port 3000** (Backend)  
   - This will generate a **public link** for WebSocket connections.  
2. **Forward Port 5173** (Frontend - Vite)  
   - This makes the React app accessible over the internet.  

📌 Use **tools like**:  
- **ngrok**  
- **LocalTunnel** (`lt --port 3000`)  
- **Cloudflare Tunnel**  

---

## 🚀 **Final Thoughts**  
🎯 **Now we have:**  
✅ **Real-time communication between frontend & backend.**  
✅ **Rooms for better message management.**  
✅ **Port forwarding for easy testing.**  

🔜 **Next Steps:**  
- Implement **private rooms** for messaging.  
- Add **typing indicators** for real-time feedback.  
- Store messages in a **database** (MongoDB).  

---

🚀 **Great Work! Now Keep Building More Real-Time Features!** 🎉