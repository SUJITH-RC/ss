import React from 'react';
import { GraduationCap, Mail, Phone } from 'lucide-react';

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Mathematics',
      experience: '15 years',
      education: 'M.Sc., Ph.D. Mathematics',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    },
    {
      name: 'Mrs. Priya Sharma',
      subject: 'Physics',
      experience: '12 years',
      education: 'M.Sc. Physics, B.Ed.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    },
    {
      name: 'Mr. Venkatesh Raman',
      subject: 'Chemistry',
      experience: '10 years',
      education: 'M.Sc. Chemistry, B.Ed.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    },
    {
      name: 'Dr. Lakshmi Devi',
      subject: 'Biology',
      experience: '18 years',
      education: 'M.Sc. Botany, Ph.D.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    },
    {
      name: 'Mr. Arjun Krishnan',
      subject: 'Computer Science',
      experience: '8 years',
      education: 'M.C.A., M.Tech.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    },
    {
      name: 'Mrs. Meera Sundaram',
      subject: 'English',
      experience: '14 years',
      education: 'M.A. English Literature, B.Ed.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    },
    {
      name: 'Mr. Ravi Prakash',
      subject: 'Tamil',
      experience: '16 years',
      education: 'M.A. Tamil Literature, B.Ed.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    },
    {
      name: 'Mrs. Kavitha Nair',
      subject: 'Commerce',
      experience: '11 years',
      education: 'M.Com., B.Ed.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Distinguished Faculty
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Meet our dedicated team of educators who are passionate about nurturing young minds and fostering academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group w-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">{member.name}</h3>
                    <p className="text-sky-600 font-medium">{member.subject}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Experience:</span>
                    <span className="ml-2">{member.experience}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Education:</span>
                    <span className="ml-2">{member.education}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-sky-100 rounded-full hover:bg-sky-200 transition-colors">
                    <Mail className="h-4 w-4 text-sky-600" />
                  </button>
                  <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors">
                    <Phone className="h-4 w-4 text-amber-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-xl text-sky-100 mb-6">
            We're always looking for passionate educators to join our mission of excellence in education.
          </p>
          <button className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;