import React from 'react';
import './App.css';
import Navbar from './components/includes/navbar';
import Fundation from './components/pages/fundation';
import Projects from './components/pages/our-projects';
import Network from './components/pages/our-network';
import Parteners from './components/pages/be-parteners';
import Novel from './components/pages/actu';
import Space from './components/pages/espace-acteurs';
import SubmitPage from './components/pages/submit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/includes/footer';





function App() {
  return (
    <Router>

     { <Navbar />}

      <Routes>

        <Route path="/" element={<Fundation />} />


        <Route path="/projects" element={<Projects />} />


        <Route path="/network" element={<Network />} />


        <Route path="/parteners" element={<Parteners />} />


        <Route path="/novel" element={<Novel />} />


        <Route path="/space" element={<Space />} />


        <Route path="/submitPage" element={<SubmitPage />} />

      </Routes>

      { <Footer />}

    </Router>

  );
  
}

export default App;