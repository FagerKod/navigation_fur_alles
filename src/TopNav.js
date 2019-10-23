import React from 'react';
import FocusContainerHorizontal from './FocusContainerHorizontal';
import FocusedElement from './FocusedElement';

const TopNav = () => {
  return (
    <nav className="topnav">
      <FocusContainerHorizontal name="topnav">
        <ul>
          <li>
            <FocusedElement>
              <a href="www.google.se">Länk 1</a>
            </FocusedElement>
          </li>

          <li>
            <FocusedElement>
              <a href="www.google.se">Länk 2</a>
            </FocusedElement>
          </li>

          <li>
            <FocusedElement>
              <a href="www.google.se">Länk 3</a>
            </FocusedElement>
          </li>
        </ul>
      </FocusContainerHorizontal>
    </nav>
  );
};

export default TopNav;
