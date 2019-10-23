import React from 'react';
import FocusContainerHorizontal from './FocusContainerHorizontal';
import FocusedElement from './FocusedElement';

const Stripe = ({ name }) => {
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
  return (
    <>
      <h2>{name}</h2>
      <FocusContainerHorizontal>
        <ul>
          {items.map(({ id, name, imageUrl, price }) => (
            <li key={id}>
              <FocusedElement>
                <button type="button">
                  <img src={imageUrl} alt="en bild" width="70" height="70" />
                  <span>{name}</span>
                  <span>{price}</span>
                </button>
              </FocusedElement>
            </li>
          ))}
        </ul>
      </FocusContainerHorizontal>
    </>
  );
};

export default Stripe;
