export const fetchUsers = (page = 1) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });

  try {
    const response = await fetch(`https://gorest.co.in/public/v1/users?page=${page}`);
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const existingUsers = getState().users.data;
      const deduplicatedUsers = (users) => {
        const seen = new Set(existingUsers.map((user) => user.id));
        return users.filter((user) => !seen.has(user.id));
      };

      dispatch({
        type: 'FETCH_USERS_SUCCESS',
        payload: [...existingUsers, ...deduplicatedUsers(data.data)],
      });

      return data.meta.pagination.page < data.meta.pagination.pages;
    } else {
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: [] });
      return false;
    }
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};
