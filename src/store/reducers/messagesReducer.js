const initialState = {
    data: [],
    pagination: {},
    loading: false,
  };
  
  const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MESSAGES_LOADING':
        return { ...state, loading: true };
      case 'MESSAGES_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
          pagination: action.payload.pagination,
        };
      case 'ADD_MESSAGE':
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case 'MESSAGES_ERROR':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default messagesReducer;
  