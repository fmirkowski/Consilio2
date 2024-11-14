// src/components/ChatWindow.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';

const ChatWindow = ({ messages, onSendMessage }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden"
  >
    <div className="h-[600px] overflow-y-auto p-6 space-y-6">
      <AnimatePresence>
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <MessageBubble message={msg} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    <InputBar onSend={onSendMessage} />
  </motion.div>
);

export default ChatWindow;
