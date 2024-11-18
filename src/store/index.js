import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    users: usersReducer,
  },
});

export default store;