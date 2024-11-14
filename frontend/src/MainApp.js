// src/MainApp.js
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';

const MainApp = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I help you?", isUser: false }
  ]);

  const handleSendMessage = (text) => {
    const userMessage = { text, isUser: true };
    const botResponse = { text: `I'm looking up information on "${text}"...`, isUser: false };

    setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
  };

  return <ChatWindow messages={messages} onSendMessage={handleSendMessage} />;
};

export default MainApp;
