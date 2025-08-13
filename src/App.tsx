import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Research from './components/Research';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Faculty />
        <Research />
      </main>
      
      {/* Footer with contact information */}
      <Footer />
    </div>
  );
}

export default App;