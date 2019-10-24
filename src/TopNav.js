import React, { useContext, useState, useEffect } from 'react';
import FocusContainerHorizontal from './FocusContainerHorizontal';
import FocusedElement from './FocusedElement';
import { NavContext } from './navContext';

const TopNav = ({ pos }) => {
  const { activeStripe } = useContext(NavContext);
  const [selectedStripe, setSelectedStripe] = useState(false);
  const items = [
    {
      id: 1,
      name: 'Hem',
    },
    {
      id: 2,
      name: 'Någon annanstans',
    },
    {
      id: 3,
      name: 'Nangiala',
    },
  ];

  useEffect(() => {
    setSelectedStripe(pos === activeStripe);
  }, [pos, activeStripe]);

  return (
    <nav className="topnav">
      <FocusContainerHorizontal
        pos={pos}
        isActive={pos === activeStripe}
        name="topnav">
        <ul>
          {items.map(({ id, name }, index) => (
            <li key={id}>
              <FocusedElement
                type="link"
                isInSelectedStripe={selectedStripe}
                index={index}
                name={name}
              />
            </li>
          ))}
        </ul>
      </FocusContainerHorizontal>
    </nav>
  );
};

export default TopNav;
