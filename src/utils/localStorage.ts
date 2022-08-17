import { LocalStorageKeys } from "../enums/localStorageKeys";


export const addUserLoginToLocalStorage = (
  isLoggedIn: string,
  accessToken: string,
  userId: string
) => {
  localStorage.setItem(LocalStorageKeys.IS_LOGGED_IN, isLoggedIn);
  localStorage.setItem(LocalStorageKeys.accessToken, accessToken);
  localStorage.setItem(LocalStorageKeys.userId, userId);
};


export const getUserTokensFromLocalStorage = () => {
  return {
    accessToken: localStorage.getItem(LocalStorageKeys.accessToken),
  };
};

export const getUserIdFromLocalStorage = () => {
  return localStorage.getItem(LocalStorageKeys.userId);
};


export const getUserLoginFromLocalStorage = (): boolean => {
  const loggedInStatus = localStorage.getItem(LocalStorageKeys.IS_LOGGED_IN);
  if (loggedInStatus === null) {
    return false;
  } else {
    if (`${loggedInStatus}` === "true") {
      return true;
    } else {
      return false;
    }
  }
};


export const clearUserLoginFromLocalStorage = () => {
  localStorage.removeItem(LocalStorageKeys.IS_LOGGED_IN);
  localStorage.removeItem(LocalStorageKeys.accessToken);
};
