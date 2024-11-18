export const saveMessage = (userId, message) => {
    const messages = JSON.parse(localStorage.getItem(`messages_${userId}`)) || [];
    messages.push(message);
    localStorage.setItem(`messages_${userId}`, JSON.stringify(messages));
  };
  
  export const getMessages = (userId) => {
    return JSON.parse(localStorage.getItem(`messages_${userId}`)) || [];
  };
  