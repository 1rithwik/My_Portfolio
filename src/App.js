import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Education } from './pages/Education';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Personal } from './pages/Personal';
import { Contact } from './pages/Contact';
import './App.css';


function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  localStorage.clear();

  return (
    <Router>
      <div className="app">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className={`main-content ${isCollapsed ? 'expanded' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;