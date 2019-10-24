import React from 'react';

const FocusContainerHorizontal = ({ children, name, isActive }) => {
  return (
    <div className="focus-container__horizontal">
      {isActive && <p>AKTIV</p>}
      <h1>{name}</h1>
      {children}
    </div>
  );
};

export default FocusContainerHorizontal;
