import React from 'react';
import './App.scss';
import FocusContainerVertical from './FocusContainerVertical';
import TopNav from './TopNav';
import Stripe from './Stripe';

function App() {
  return (
    <div className="App">
      <FocusContainerVertical>
        <TopNav pos={1} />
        <FocusContainerVertical>
          <Stripe pos={2} name="Jürgens stripe" />
          <Stripe pos={3} name="Jonnys stripe" />
          <Stripe pos={4} name="Jerrys stripe" />
        </FocusContainerVertical>
      </FocusContainerVertical>
    </div>
  );
}

export default App;
