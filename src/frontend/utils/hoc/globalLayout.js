import React from 'react';
import Header from '../../header/Header';
import Navbar from '../../navbar/Navbar';

const GlobalLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-grow gap-8 mt-10">
        {/* Adjust these classes for the layout you need */}
        <nav className="overflow-hidden w-64 flex-shrink-0 z-100">
          <Navbar />
        </nav>

        <div className="flex-grow overflow-hidden mt-24">
          {children}
        </div>
      </main>

      {/* Footer if needed */}
      {/* <Footer /> */}
    </div>
  );
};

export default GlobalLayout;
