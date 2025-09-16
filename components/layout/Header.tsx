import React, { useState } from 'react';
import type { Page } from '../../types';
import Logo from '../ui/Logo';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isScrolled: boolean;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isScrolled: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, setCurrentPage, isScrolled, children, onClick }) => (
  <button
    onClick={() => {
      setCurrentPage(page);
      window.scrollTo(0,0);
      if (onClick) onClick();
    }}
    className={`group relative px-4 py-2 text-sm font-sans font-bold transition-all duration-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 hover:bg-black/5 ${ isScrolled ? 'focus-visible:ring-offset-surface' : 'focus-visible:ring-offset-transparent' } ${
      currentPage === page
        ? 'text-accent'
        : isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-gray-200'
    }`}
  >
    {children}
    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-accent rounded-full transition-transform duration-300 ease-out ${currentPage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
  </button>
);


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerBg = isScrolled || isMenuOpen ? 'bg-surface/90 backdrop-blur-lg shadow-lg' : 'bg-transparent';
  const textColor = isScrolled || isMenuOpen ? 'text-primary' : 'text-white';
  const headerPadding = currentPage === 'home' ? 'py-4' : 'py-2';

  const handleCtaClick = () => {
      setCurrentPage('contact');
      window.scrollTo(0,0);
      setIsMenuOpen(false);
  }

  const navLinks = [
      { page: 'products', label: 'Products'},
      { page: 'quality', label: 'Quality & Compliance'},
      { page: 'about', label: 'About Us'},
      { page: 'careers', label: 'Careers'},
      { page: 'resources', label: 'Resources'},
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className={`container mx-auto px-6 ${headerPadding} flex justify-between items-center transition-all duration-300`}>
        <div className="flex items-center cursor-pointer transition-transform duration-300 transform hover:scale-105" onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}>
          <Logo className={`h-8 ${textColor} text-2xl`} />
        </div>
        
        <nav className="hidden md:flex items-center space-x-2" aria-label="Primary navigation">
          {navLinks.map(link => (
             <NavLink key={link.page} page={link.page as Page} currentPage={currentPage} setCurrentPage={setCurrentPage} isScrolled={isScrolled}>{link.label}</NavLink>
          ))}
        </nav>
        
        <div className="hidden md:block">
            <button
                onClick={handleCtaClick}
                className="bg-accent text-white font-serif font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:bg-accent-dark hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
                Request a Quote
            </button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`${textColor} p-1 focus:outline-none transition-transform duration-300 transform hover:scale-105 rounded-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-6 relative flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-current rounded-full transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-current rounded-full transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-full h-0.5 bg-current rounded-full transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      <nav 
        id="mobile-menu" 
        className={`md:hidden bg-surface/90 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`} 
        aria-label="Primary navigation mobile"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col items-center space-y-2 py-4">
            {navLinks.map(link => (
                <NavLink key={link.page} page={link.page as Page} currentPage={currentPage} setCurrentPage={setCurrentPage} isScrolled={true} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
            ))}
            <button 
            onClick={handleCtaClick}
            className="mt-4 bg-accent text-white font-serif font-bold py-2 px-8 rounded-md shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
            Request a Quote
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;