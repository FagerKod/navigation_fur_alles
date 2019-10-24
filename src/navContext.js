import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // for later use with router

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [activeStripe, setActiveStripe] = useState(1);
  const [activeElement, setActiveElement] = useState(0);
  const history = useHistory();

  const navigationHandler = e => {
    let key = e.keyCode;
    // disable scroll on arrow use and space bar
    if ([32, 37, 38, 39, 40].indexOf(key) > -1) {
      e.preventDefault();
    }

    //upp
    if (key === 38) {
      setActiveStripe(prevStripe => prevStripe - 1);
    }
    //ner
    if (key === 40) {
      setActiveStripe(prevStripe => prevStripe + 1);
    }

    //höger
    if (key === 39) {
      setActiveElement(prevElement => prevElement + 1);
    }

    //vänster
    if (key === 37) {
      setActiveElement(prevElement => prevElement - 1);
    }

    //bakåt
    if (key === 10009) {
      history.goBack();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', e => navigationHandler(e));
    console.log('render');

    /*     return () =>
      document.removeEventListener('keyup', e => navigationHandler(e)); */
  }, []);
  return (
    <NavContext.Provider
      value={{ navigationHandler, activeStripe, activeElement }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
