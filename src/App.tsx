import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePortfolio from './index';
import SocialPortfolio from './Portfolio';
import AboutPortfolio from './about';
import WorkPage from './work';
import ServicesPage from './service';
import ContactPage from './contact';
import Navbar from './Navbar';
import FadeInObserver from './FadeInObserver';
import SmoothScroll from './SmoothScroll';

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <FadeInObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePortfolio />} />
        <Route path="/social" element={<SocialPortfolio />} />
        <Route path="/about" element={<AboutPortfolio />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
