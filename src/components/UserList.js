import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/actions/usersActions';
import './styles/userList.css';

const UserList = ({ onSelectUser }) => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);

  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  useEffect(() => {
    setFilteredUsers(
      (users || []).filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const lastUserRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-list-container">
      <div className="chat-header mb-3">
        <strong>Chats</strong>
        <div className="community-video-options">
          <button className="btn btn-link">
            <i className="fas fa-users"></i>
          </button>
          <button className="btn btn-link">
            <i className="fas fa-video"></i>
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Users"
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="list-group">
        {filteredUsers.map((user, index) => {
          const messageType =
            index % 2 === 0 ? 'outgoing-message' : 'incoming-message';
          const userStatusMessage =
            index % 2 === 0
              ? 'Ongoing Conversation'
              : 'Tap to start a conversation';

          return (
            <li
              key={user.id}
              className={`list-group-item ${messageType}`}
              ref={
                index === filteredUsers.length - 1 ? lastUserRef : null
              }
              onClick={() =>
                onSelectUser(user.id, user.status, user.name, user.email)
              }
            >
              <div className="d-flex align-items-center">
                <div className="user-profile-circle mr-3 position-relative">
                  {user.name.split(' ')[0].slice(0, 2).toUpperCase()}
                  {user.status === 'active' && (
                    <span className="active-status-dot"></span>
                  )}
                </div>
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.username}</p>
                  <small className="text-muted">{userStatusMessage}</small>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {loading && <div className="loading-indicator">Loading...</div>}
    </div>
  );
};

export default UserList;
