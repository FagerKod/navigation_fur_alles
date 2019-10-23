import React from 'react';
import './App.scss';
import FocusContainerVertical from './FocusContainerVertical';
import TopNav from './TopNav';
import Stripe from './Stripe';

function App() {
  return (
    <div className="App">
      <FocusContainerVertical>
        <TopNav />
        <FocusContainerVertical>
          <Stripe name="Jürgens stripe" />
          <Stripe name="Jonnys stripe" />
          <Stripe name="Jerrys stripe" />
        </FocusContainerVertical>
      </FocusContainerVertical>
    </div>
  );
}

export default App;
