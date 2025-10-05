const TOKEN_KEY = "auth_token";
const USER_KEY = "user_details";

export const loadToken = (): string | null => localStorage.getItem(TOKEN_KEY);
export const saveToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const loadUser = (): any | null => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse : null;
};
export const saveUser = (user: any) =>
  localStorage.setItem(USER_KEY, JSON.stringify(user));
export const removeUser = () => localStorage.removeItem(USER_KEY);
