import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Testimonial } from './components/Testimonial';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Background decoration (subtle gradient) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-5 pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <div className="container mx-auto px-4 sm:px-6">
          <Hero />
          
          {/* Divider */}
          <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800 my-8"></div>
          
          <AboutSection />
        </div>

        {/* Full width sections */}
        <Testimonial />
        
        <div className="container mx-auto px-4 sm:px-6">
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
