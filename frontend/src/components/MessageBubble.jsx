// src/components/MessageBubble.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MessageBubble = ({ message }) => {
  if (message.isUser) {
    return (
      <motion.div className="flex flex-col gap-1">
        <div className="text-sm text-blue-600 font-medium ml-2">You</div>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-blue-50 text-gray-800 p-4 rounded-lg max-w-[80%]"
        >
          {message.text}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div className="flex flex-col gap-1">
      <div className="text-sm text-gray-600 font-medium ml-2">Assistant</div>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="text-gray-800 max-w-[80%]"
      >
        {message.text}
      </motion.div>
    </motion.div>
  );
};

export default MessageBubble;
