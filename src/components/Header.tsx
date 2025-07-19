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
        {/* Top contact bar - hidden on desktop */}
        <div className="md:hidden flex items-center justify-between py-1 border-b border-sky-100 flex-col text-center">
          <div className="flex flex-col space-y-1 text-xs text-gray-600">
            <div className="flex items-center justify-center space-x-1">
              <Phone className="h-3 w-3 text-sky-600" />
              <span>99423 17555 | 94421 94845</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <Mail className="h-3 w-3 text-sky-600" />
              <span>sssivmhss@gmail.com</span>
            </div>
          </div>
          <div className="text-xs text-amber-600 font-medium mt-1">
            🎓 Admission Open for PRE-KG to +1
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-2 flex-wrap">
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-sm md:text-lg font-bold text-gray-900 leading-tight">
                Sri Sakthi Supreme Ideal Vikas
              </h1>
              <p className="text-xs text-gray-600">Matric Hr. Sec. School</p>
              <p className="text-xs text-amber-600 font-medium hidden md:block">ஸ்ரீ சக்தி சுப்ரீம் ஐடியல் விகாஸ்</p>
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