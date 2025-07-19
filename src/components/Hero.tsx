import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      title: 'Excellence in Education',
      subtitle: 'Building Bright Futures Since 2008'
    },
    {
      image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      title: 'Modern Learning Environment',
      subtitle: 'State-of-the-art Facilities'
    },
    {
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      title: 'Holistic Development',
      subtitle: 'Academic Excellence & Character Building'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Professional School Name */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-tight animate-slide-up">
                <span className="block text-white drop-shadow-xl">
                  Sri Sakthi Supreme
                </span>
                <span className="block text-blue-400 drop-shadow-xl text-5xl md:text-7xl lg:text-9xl font-black">
                  Ideal Vikas
                </span>
                <span className="block text-gray-100 text-2xl md:text-3xl lg:text-4xl font-heading mt-2 drop-shadow-lg animate-fade-in-up delay-300">
                  Matriculation Higher Secondary School
                </span>
              </h1>
              
              {/* Tamil Text */}
              <p className="text-amber-300 text-lg md:text-xl font-accent mt-4 animate-slide-up delay-400 drop-shadow-md">
                ஶ்ரீ சக்தி சுப்ரீம் ஐடியல் விகாஸ் மெட்ரிக் மேல்நிலைப் பள்ளி
              </p>
            </div>
            
            {/* Subtitle with Better Background */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 animate-slide-up delay-200">
              <p className="text-xl md:text-3xl text-white font-body leading-relaxed animate-typing">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-up delay-500">
            <button
              onClick={() => scrollToSection('admission')}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-heading font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              🎓 Apply for Admission
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-10 py-5 border-3 border-white bg-white/10 backdrop-blur-sm text-white rounded-full font-heading font-bold text-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              📚 Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up delay-500">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3 animate-float" />
              <h3 className="text-white font-heading font-bold text-lg mb-2">Excellence</h3>
              <p className="text-blue-100 font-body">100% Pass Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <GraduationCap className="h-8 w-8 text-green-400 mx-auto mb-3 animate-bounce-slow" />
              <h3 className="text-white font-heading font-bold text-lg mb-2">Quality</h3>
              <p className="text-blue-100 font-body">Expert Faculty</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Play className="h-8 w-8 text-blue-400 mx-auto mb-3 animate-pulse-slow" />
              <h3 className="text-white font-heading font-bold text-lg mb-2">Innovation</h3>
              <p className="text-blue-100 font-body">Modern Learning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Highlights Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-sky-600 to-blue-700 text-white py-6 animate-slide-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-center">
            <div className="animate-fade-in">
              <span className="font-heading font-bold text-2xl">800+</span>
              <p className="text-blue-100 font-body">Students</p>
            </div>
            <div className="animate-fade-in delay-100">
              <span className="font-heading font-bold text-2xl">40+</span>
              <p className="text-blue-100 font-body">Faculty</p>
            </div>
            <div className="animate-fade-in delay-200">
              <span className="font-heading font-bold text-2xl">16+</span>
              <p className="text-blue-100 font-body">Years of Excellence</p>
            </div>
            <div className="animate-fade-in delay-300">
              <span className="font-heading font-bold text-2xl">100%</span>
              <p className="text-blue-100 font-body">Pass Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;