import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import CodeEditor from "../components/CodeEditor";
import CodeReview from "../components/CodeReview";

const Project = () => {
  const { projectId } = useParams();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]); // Store chat messages

  useEffect(() => {
    const tempSocket = io("https://sznv9rj7-3000.inc1.devtunnels.ms/", {
      query: { projectId }
    });

    tempSocket.on("chacha", (msg) => {
      console.log("Received:", msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    setSocket(tempSocket);

    return () => tempSocket.disconnect(); // Cleanup on unmount
  }, [projectId]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-950 text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <Chat socket={socket} messages={messages} setMessages={setMessages} />
        <CodeEditor />
        <CodeReview />
      </div>
    </>
  );
};

export default Project;
