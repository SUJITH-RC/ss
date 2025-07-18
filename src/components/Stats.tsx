import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, BookOpen, Monitor, Building, Home } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    staff: 0,
    books: 0,
    computers: 0,
    classrooms: 0,
    toilets: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      label: 'Students',
      value: 800,
      color: 'sky',
      key: 'students'
    },
    {
      icon: GraduationCap,
      label: 'Staff Members',
      value: 40,
      color: 'amber',
      key: 'staff'
    },
    {
      icon: BookOpen,
      label: 'Books',
      value: 3700,
      color: 'green',
      key: 'books'
    },
    {
      icon: Monitor,
      label: 'Computers',
      value: 11,
      color: 'purple',
      key: 'computers'
    },
    {
      icon: Building,
      label: 'Classrooms',
      value: 23,
      color: 'blue',
      key: 'classrooms'
    },
    {
      icon: Home,
      label: 'Functional Toilets',
      value: 35,
      color: 'red',
      key: 'toilets'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        const increment = stat.value / 100;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 30);
      });
    }
  }, [isVisible]);

  const getColorClasses = (color: string) => {
    const colors = {
      sky: 'bg-sky-100 text-sky-600',
      amber: 'bg-amber-100 text-amber-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      blue: 'bg-blue-100 text-blue-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.sky;
  };

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-sky-900 to-blue-800 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Achievements in Numbers
          </h2>
          <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto px-4">
            These statistics reflect our commitment to providing excellent educational infrastructure and resources for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`w-16 h-16 ${getColorClasses(stat.color)} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {counts[stat.key as keyof typeof counts]}
                  {stat.key === 'students' && '+'}
                  {stat.key === 'staff' && '+'}
                  {stat.key === 'books' && '+'}
                </div>
                
                <div className="text-base md:text-lg text-sky-100 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">16+</div>
              <div className="text-sky-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sky-100">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-sky-100">Academic Groups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;