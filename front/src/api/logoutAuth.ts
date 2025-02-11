export const useLogoutAuth = () => {
  const logout = () => {
    localStorage.removeItem('token');
  };

  return logout;
};
