import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Typewriter } from 'react-simple-typewriter';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import MessageList from './components/MessageList';
import ProfileNav from './components/ProfileNav';
import ProfileDetails from './components/ProfileDetails';
import MessageInput from './components/MessageInput';
import './App.css';
function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userStatus, setUserStatus] = useState('');
  const [selectedUserName, setSelectedUserName] = useState('');
  const [selectedUserEmail, setSelectedUserEmail] = useState('');

  const handleUserSelect = (userId, status, name, email) => {
    setSelectedUser(userId);
    setUserStatus(status);
    setSelectedUserName(name);
    setSelectedUserEmail(email);
  };

  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 user-list-column border-end">
            <UserList onSelectUser={handleUserSelect} />
          </div>

          <div className="col-md-6 middle-column">
            {selectedUser ? (
              <>
                <ProfileNav userId={selectedUser} userStatus={userStatus} userName={selectedUserName} />
                <MessageList userId={selectedUser} />
                <MessageInput userId={selectedUser} userStatus={userStatus} />
              </>
            ) : (
              <div className="no-user-selected">
                <div className="blur-overlay"></div>
                <h2>
                  <Typewriter words={['Welcome to Messenger App']} loop={1} cursor cursorStyle="|" />
                </h2>
                <p className='tap-on-user'>Tap on a User to start a conversation</p>
              </div>
            )}
          </div>

          <div className="col-md-3 third-column border-start">
            {selectedUser && <ProfileDetails userName={selectedUserName} userStatus={userStatus} />}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
