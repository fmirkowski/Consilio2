// src/components/InputBar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InputBar = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-100">
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Message..."
          className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          className="px-4 py-2 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
        >
          Send
        </motion.button>
      </div>
    </div>
  );
};

export default InputBar;
