import React from 'react';
import { MapPin, Calendar, Users, Building, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 animate-slide-up">
            About Our School
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-body animate-slide-up delay-200">
            Sri Sakthi Supreme Ideal Vikas Matriculation Higher Secondary School has been a beacon of educational excellence in Tamil Nadu since 2008.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
              alt="School Building"
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500 hover:shadow-3xl animate-float"
            />
          </div>
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 animate-fade-in">
              Excellence in Education Since 2008
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-body animate-slide-up delay-100">
              Nestled in the heart of Tamil Nadu, our school has been nurturing young minds with a perfect blend of traditional values and modern education. We believe in creating leaders of tomorrow through holistic development.
            </p>
            <div className="space-y-4 animate-slide-up delay-200">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-sky-600" />
                <span className="text-gray-700 font-body">Prime location in Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-sky-600" />
                <span className="text-gray-700 font-body">Established in 2008</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-sky-600" />
                <span className="text-gray-700 font-body">800+ Happy Students</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-sky-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up hover:scale-105">
            <div className="text-center">
              <Building className="h-12 w-12 text-sky-600 mx-auto mb-4 animate-bounce-slow" />
              <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Modern Infrastructure</h4>
              <p className="text-gray-600 font-body">State-of-the-art facilities including smart classrooms, well-equipped laboratories, and spacious campus.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up delay-100 hover:scale-105">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4 animate-pulse-slow" />
              <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Quality Education</h4>
              <p className="text-gray-600 font-body">Comprehensive curriculum covering academics, sports, arts, and character development programs.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up delay-200 hover:scale-105">
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4 animate-float" />
              <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Proven Results</h4>
              <p className="text-gray-600 font-body">Excellent academic performance with 100% pass rates and outstanding achievements in various competitions.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-8 text-white animate-glow hover:from-sky-700 hover:to-blue-800 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 animate-fade-in">Our Mission</h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto font-body leading-relaxed animate-slide-up delay-100">
              "To provide quality education that empowers students with knowledge, skills, and values necessary for success in their personal and professional lives while contributing positively to society."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;