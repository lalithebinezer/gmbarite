import React from 'react';
import type { Page } from '../../types';
import Logo from '../ui/Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleLinkClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
    
  const linkStyles = "text-gray-400 hover:text-white transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg";

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <Logo className="h-7 text-footer-text text-xl mb-4" />
            <p className="text-gray-400 text-sm">A premier barite crushing unit delivering purity and quality in every particle.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleLinkClick('products')} className={linkStyles}>Products</button></li>
              <li><button onClick={() => handleLinkClick('quality')} className={linkStyles}>Quality & Compliance</button></li>
              <li><button onClick={() => handleLinkClick('about')} className={linkStyles}>About Us</button></li>
              <li><button onClick={() => handleLinkClick('careers')} className={linkStyles}>Careers</button></li>
              <li><button onClick={() => handleLinkClick('resources')} className={linkStyles}>Resources</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className={linkStyles}>Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Legal</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleLinkClick('resources')} className={linkStyles}>Privacy Policy</button></li>
              <li><button onClick={() => handleLinkClick('resources')} className={linkStyles}>Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mangampeta, Kadapa, Andhra Pradesh</li>
              <li>Email: sales@gmbarite.com</li>
              <li>Phone: +91-XXX-XXXX-XXXX</li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GM Barite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;