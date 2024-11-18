import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPaperclip, FaCamera, FaMicrophone, FaSmile, FaPaperPlane } from 'react-icons/fa';
import { sendMessage } from '../store/actions/messagesActions';
import './styles/messageInput.css';

const MessageInput = ({ userId, userStatus }) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (content.trim()) {
      dispatch(sendMessage(userId, content, userStatus));
      setContent('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="message-input-container">
      <button className="icon-btn">
        <FaPaperclip />
      </button>
      <button className="icon-btn">
        <FaCamera />
      </button>
      <button className="icon-btn">
        <FaMicrophone />
      </button>

      <input
        type="text"
        className="message-input"
        placeholder="Enter a message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyPress={handleKeyPress} // Handle Enter key press
      />

      <button className="icon-btn">
        <FaSmile />
      </button>

      <button className="send-btn" onClick={handleSend}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default MessageInput;
