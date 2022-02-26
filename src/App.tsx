import React from 'react';
import './styles/App.scss';

import {
  About,
  Header,
  Footer,
  Testimonial,
  Work,
  Skills,
} from './containers';

import {
  NavBar,
} from './components';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
