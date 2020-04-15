const TOKEN_NAME = 'formAppToken';

export const clearToken = () => {
  localStorage.removeItem(TOKEN_NAME);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME);
}

export const setToken = (tokenValue) => {
  localStorage.setItem(TOKEN_NAME, tokenValue);
};
