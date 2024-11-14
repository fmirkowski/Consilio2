// src/components/MessageBubble.jsx
import React from 'react';

const MessageBubble = ({ message }) => (
  <div className={`p-2 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
    {message.text}
  </div>
);

export default MessageBubble;
