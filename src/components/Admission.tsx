import React, { useState } from 'react';
import { GraduationCap, User, Mail, Phone, MapPin, Calendar, BookOpen, Send, CheckCircle } from 'lucide-react';

const Admission: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    previousSchool: '',
    dateOfBirth: '',
    gender: '',
    group: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Create email content
      const emailContent = `
New Admission Application Received

Student Details:
- Student Name: ${formData.studentName}
- Parent/Guardian Name: ${formData.parentName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Address: ${formData.address}
- Grade Applying For: ${formData.grade}
- Previous School: ${formData.previousSchool}
- Date of Birth: ${formData.dateOfBirth}
- Gender: ${formData.gender}
- Academic Group: ${formData.group}
- Additional Message: ${formData.message}

Please contact the family for further admission process.
      `;

      // In a real application, you would send this to your backend
      console.log('Admission form submitted:', formData);
      console.log('Email content:', emailContent);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          studentName: '',
          parentName: '',
          email: '',
          phone: '',
          address: '',
          grade: '',
          previousSchool: '',
          dateOfBirth: '',
          gender: '',
          group: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="admission" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-12">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in Sri Sakthi Supreme Ideal Vikas School. 
                Your admission application has been sent to our admissions team.
              </p>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Our admissions team will review your application</li>
                  <li>• You will receive a confirmation email within 24 hours</li>
                  <li>• We will contact you to schedule an interview</li>
                  <li>• Required documents list will be shared via email</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500">
                For immediate assistance, please call: <strong>99423 17555</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admission" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Admission Application
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join our school family! Fill out the application form below and our admissions team will contact you soon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Admission Form 2024-25</h3>
                  <p className="text-sky-100">Sri Sakthi Supreme Ideal Vikas School</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      placeholder="Enter student's full name"
                    />
                  </div>
                </div>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      placeholder="Enter parent/guardian name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                {/* Grade */}
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Applying For *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select Grade</option>
                    <option value="Pre-KG">Pre-KG</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="1st">1st Standard</option>
                    <option value="2nd">2nd Standard</option>
                    <option value="3rd">3rd Standard</option>
                    <option value="4th">4th Standard</option>
                    <option value="5th">5th Standard</option>
                    <option value="6th">6th Standard</option>
                    <option value="7th">7th Standard</option>
                    <option value="8th">8th Standard</option>
                    <option value="9th">9th Standard</option>
                    <option value="10th">10th Standard</option>
                    <option value="11th">11th Standard</option>
                    <option value="12th">12th Standard</option>
                  </select>
                </div>

                {/* Academic Group (for 11th/12th) */}
                <div>
                  <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Group (For 11th/12th)
                  </label>
                  <select
                    id="group"
                    name="group"
                    value={formData.group}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select Group</option>
                    <option value="Group I">Group I: Math, Physics, Chemistry, Biology</option>
                    <option value="Group II">Group II: Math, Physics, Chemistry, Computer Science</option>
                    <option value="Group III">Group III: Physics, Chemistry, Biology, Computer Science</option>
                    <option value="Group IV">Group IV: Accountancy, Commerce, Economics, Business Math</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Previous School */}
                <div className="md:col-span-2">
                  <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School (if applicable)
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="previousSchool"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      placeholder="Enter previous school name"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Enter complete address"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Any additional information or special requirements..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-6 bg-sky-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <strong>Phone:</strong> 99423 17555 | 94421 94845
                  </div>
                  <div>
                    <strong>Email:</strong> sssivmhss@gmail.com
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;