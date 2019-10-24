import React, { useContext, useState, useEffect } from 'react';
import FocusContainerHorizontal from './FocusContainerHorizontal';
import FocusedElement from './FocusedElement';
import { NavContext } from './navContext';

const Stripe = ({ name, pos }) => {
  const { activeStripe } = useContext(NavContext);
  const [selectedStripe, setSelectedStripe] = useState(false);
  const items = [
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
    },
    {
      id: 2,
      name: 'Blue Beanie',
      imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
      price: 18,
    },
    {
      id: 3,
      name: 'Brown Cowboy',
      imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      price: 35,
    },
  ];

  useEffect(() => {
    setSelectedStripe(pos === activeStripe);
  }, [pos, activeStripe]);
  return (
    <>
      <h2>{name}</h2>
      <FocusContainerHorizontal pos={pos} isActive={selectedStripe}>
        <ul>
          {items.map(({ id, name, imageUrl, price }, index) => (
            <li key={id}>
              <FocusedElement
                type={'button'}
                isInSelectedStripe={selectedStripe}
                index={index}
                name={name}
                imageUrl={imageUrl}
                price={price}></FocusedElement>
            </li>
          ))}
        </ul>
      </FocusContainerHorizontal>
    </>
  );
};

export default Stripe;
