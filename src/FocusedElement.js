import React, { useContext, useRef, useEffect } from 'react';
import { NavContext } from './navContext';

const FocusedElement = ({
  isInSelectedStripe,
  type,
  index,
  imageUrl,
  name,
  price,
}) => {
  const { activeElement } = useContext(NavContext);
  const focusedElement = useRef();

  useEffect(() => {
    if (isInSelectedStripe) {
      if (activeElement === index) {
        focusedElement.current.focus();
      }
    }
  });

  // nån slags metod för att lagra vilken knapp som hade fokus
  // om användaren t ex öppnar en modal
  const setFocusManually = () => {
    //focusedElement.current.focus();
  };

  return (
    <>
      {type === 'button' && (
        <button onClick={setFocusManually} ref={focusedElement} type="button">
          <img src={imageUrl} alt="en bild" width="70" height="70" />
          <span>{name}</span>
          <span>{price}</span>
        </button>
      )}

      {type === 'link' && (
        <a onClick={setFocusManually} ref={focusedElement} href="www.google.se">
          <span>
            {name} {index}
          </span>
        </a>
      )}
    </>
  );
};

export default FocusedElement;
