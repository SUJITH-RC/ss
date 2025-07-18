import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg md:text-xl">S</span>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold">Sri Sakthi Supreme</h3>
                <p className="text-sm text-gray-300">Ideal Vikas Matric Hr. Sec. School</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building bright futures since 2008 with quality education, modern facilities, and dedicated faculty in the heart of Tamil Nadu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('admission')}
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Admission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faculty')}
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Faculty
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Groups */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Academic Groups</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Group I: Math, Physics, Chemistry, Biology</li>
              <li>Group II: Math, Physics, Chemistry, Computer Science</li>
              <li>Group III: Physics, Chemistry, Biology, Computer Science</li>
              <li>Group IV: Accountancy, Commerce, Economics, Business Math</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Sangaragoundanpalayam,</p>
                  <p>Bhavani Block, Erode District,</p>
                  <p>Tamil Nadu – 638312</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>99423 17555</p>
                  <p>94421 94845</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">sssivmhss@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Sri Sakthi Supreme Ideal Vikas Matriculation Higher Secondary School. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;