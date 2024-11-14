// src/components/ChatWindow.jsx
import React from 'react';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';

const ChatWindow = ({ messages, onSendMessage }) => (
  <div className="fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-4 overflow-y-auto flex flex-col space-y-2 h-4/5">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
    </div>
    <InputBar onSend={onSendMessage} />
  </div>
);

export default ChatWindow;
