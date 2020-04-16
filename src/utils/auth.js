const TOKEN_NAME = 'formAppToken';
const FIRST_NAME = 'firstName';


export const clearToken = () => {
  localStorage.removeItem(TOKEN_NAME);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME);
}

export const setToken = (tokenValue) => {
  localStorage.setItem(TOKEN_NAME, tokenValue);
};
export const clearName = () => {
  localStorage.removeItem(FIRST_NAME);
};

export const getName = () => {
  return localStorage.getItem(FIRST_NAME);
}

export const setName = (name) => {
  localStorage.setItem(FIRST_NAME, name);
};
