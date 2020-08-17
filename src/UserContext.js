import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function userLogin(username, password) {
    const user = window.localStorage.getItem('adminLogin');

    setData(user);
    setLogin(true);
  }

  return (
    <UserContext.Provider value={{ user: 'Admin' }}>
      {children}
    </UserContext.Provider>
  );
};
