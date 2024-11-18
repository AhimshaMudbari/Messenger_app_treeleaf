import { saveMessage, getMessages } from '../../utils/storage';

export const fetchMessages = (userId) => (dispatch) => {
  dispatch({ type: 'MESSAGES_LOADING' });
  try {
    const messages = getMessages(userId);
    dispatch({
      type: 'MESSAGES_SUCCESS',
      payload: {
        data: messages,
        pagination: { page: 1, pages: 1 },
      },
    });
  } catch (error) {
    dispatch({ type: 'MESSAGES_ERROR', error: error.message });
  }
};

export const sendMessage = (userId, content, userStatus) => (dispatch) => {
  const newMessage = {
    id: Date.now(),
    content,
    dateSent: new Date().toISOString(),
    status: userStatus === 'active' ? 'delivered' : 'sent',
  };

  saveMessage(userId, newMessage);

  dispatch({
    type: 'ADD_MESSAGE',
    payload: newMessage,
  });
};
