import React, { useState } from "react";

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    if (!currentMessage.trim()) return;
    socket.emit("message", currentMessage);
    setMessages([...messages, currentMessage]);
    setCurrentMessage("");
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-bold">Chat</h2>
      <div className="h-64 overflow-y-auto border border-gray-700 p-2">
        {messages.map((msg, index) => (
          <p key={index} className="text-gray-300">{msg}</p>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Type a message..." 
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        className="w-full p-2 mt-2 bg-gray-700 rounded"
      />
      <button 
        onClick={sendMessage}
        className="w-full mt-2 bg-blue-600 p-2 rounded">
        Send
      </button>
    </div>
  );
};

export default Chat;
