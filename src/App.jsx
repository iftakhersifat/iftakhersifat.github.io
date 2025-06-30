import React from 'react';
import Navbar from './Components/Root/Navbar';
import Footer from './Components/Root/Footer';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Navbar></Navbar>
      <Home />
      <Footer />
      </div>
    </>
  );
};

export default App;
