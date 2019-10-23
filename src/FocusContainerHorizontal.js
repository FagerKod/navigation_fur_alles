import React from 'react';

const FocusContainerHorizontal = ({ children, name }) => {
  return (
    <div className="focus-container__horizontal">
      <h1>{name}</h1>
      {children}
    </div>
  );
};

export default FocusContainerHorizontal;
