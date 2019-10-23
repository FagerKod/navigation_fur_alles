import React, { createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const navigationHandler = e => {
    let key = e.keyCode;
    console.log(key);
  };

  const history = useHistory();

  console.log(history);

  useEffect(() => {
    document.addEventListener('keydown', e => navigationHandler(e));

    return () => document.removeEventListener(navigationHandler());
  });
  return (
    <NavContext.Provider value={{ navigationHandler }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
