import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'admission', label: 'Admission' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'stats', label: 'Stats' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="md:flex items-center justify-between py-1 border-b border-sky-100 flex-col md:flex-row text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-3 space-y-1 md:space-y-0 text-xs md:text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-1 md:space-x-2">
              <Phone className="h-3 w-3 md:h-4 md:w-4 text-sky-600" />
              <span>99423 17555 | 94421 94845</span>
            </div>
            <div className="flex items-center justify-center space-x-1 md:space-x-2">
              <Mail className="h-3 w-3 md:h-4 md:w-4 text-sky-600" />
              <span>sssivmhss@gmail.com</span>
            </div>
          </div>
          <div className="text-xs md:text-sm text-amber-600 font-medium mt-1 md:mt-0">
            🎓 Admission Open for PRE-KG to +1
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-2 md:py-3 flex-wrap">
          <div className="flex items-center space-x-1 md:space-x-3 w-full md:w-auto">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base md:text-lg">S</span>
            </div>
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-sm md:text-xl font-extrabold text-gray-900 leading-tight" style={{ letterSpacing: '0.5px' }}>
                Sri Sakthi Supreme Ideal Vikas
              </h1>
              <p className="text-xs md:text-sm text-gray-600">Matric Hr. Sec. School</p>
              <p className="text-xs text-amber-600 font-medium hidden sm:block">ஸ்ரீ சக்தி சுப்ரீம் ஐடியல் விகாஸ்</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                  activeSection === item.id ? 'text-sky-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-sky-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-sky-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-sky-50 text-sky-600'
                      : 'text-gray-700 hover:bg-sky-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;