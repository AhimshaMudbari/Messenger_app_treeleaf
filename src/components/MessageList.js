import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../store/actions/messagesActions';
import './styles/messageList.css';

const MessageList = ({ userId }) => {
  const dispatch = useDispatch();
  const { data: messages, loading } = useSelector((state) => state.messages);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const listRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMessages(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageClick = (messageId) => {
    setSelectedMessageId((prevId) => (prevId === messageId ? null : messageId));
  };

  return (
    <div className="message-list" ref={listRef}>
      {messages.map((msg) => (
        <>
        <div
          key={msg.id}
          className={`message-item ${msg.status === 'delivered' ? 'sent' : 'received'}`}
          onClick={() => handleMessageClick(msg.id)}
          >
          <p>{msg.content}</p>
         
        </div>
        {selectedMessageId === msg.id && (
            <div className="message-details">
              <small>
                {msg.status} - {new Date(msg.dateSent).toLocaleTimeString()}
              </small>
            </div>
          )}
            </>
      ))}
      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default MessageList;
