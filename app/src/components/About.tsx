import React, { useState } from 'react';
import { Mail, Linkedin, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const coreTeam = [
    {
      name: "John Doe",
      role: "Club Lead",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      email: "john.doe@example.com",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    },
    {
      name: "Jane Smith",
      role: "Technical Lead",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      email: "jane.smith@example.com",
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith"
    },
    {
      name: "Mike Johnson",
      role: "Event Coordinator",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      email: "mike.johnson@example.com",
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson"
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We foster a culture of continuous learning and innovation, encouraging members to explore new technologies and solutions.',
      icon: '🚀'
    },
    {
      title: 'Community',
      description: 'Building a strong, supportive community where members can learn, grow, and collaborate on cloud computing projects.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'Striving for excellence in everything we do, from organizing events to delivering high-quality learning resources.',
      icon: '⭐'
    },
    {
      title: 'Leadership',
      description: 'Developing future leaders in cloud computing through mentorship, workshops, and hands-on experience.',
      icon: '👥'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coreTeam.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coreTeam.length) % coreTeam.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-gradient-to-b from-black to-blue-900"
          style={{
            paddingTop: '6rem',
            paddingBottom: '6rem',
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-40 w-40 rounded-full bg-red-500 opacity-10 top-20 -left-20"></div>
            <div className="absolute h-64 w-64 rounded-full bg-cyan-500 opacity-10 bottom-10 -right-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-2xl font-bold mb-2">-ABOUT US-</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 bg-clip-text text-transparent">
                AWS Cloud Club
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Empowering students to become cloud computing leaders through hands-on experience, mentorship, and community engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Core Team
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                {coreTeam.map((member, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden h-full">
                      <div className="relative h-64">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                        <div className="absolute bottom-6 left-6">
                          <h3 className="text-white text-2xl font-semibold">{member.name}</h3>
                          <p className="text-cyan-400">{member.role}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex space-x-4 justify-center">
                          <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <Mail size={20} />
                          </a>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <Linkedin size={20} />
                          </a>
                          <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              <div className="flex justify-center mt-6 space-x-2">
                {coreTeam.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-black to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-12 text-center">
                To create a vibrant community of cloud computing enthusiasts who learn, innovate, and grow together. 
                We aim to bridge the gap between academic learning and industry practices by providing hands-on experience 
                with AWS services and real-world projects.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-900 to-black rounded-lg p-6 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-20 bg-gradient-to-b from-black to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Be part of a growing community of cloud computing enthusiasts. Get access to exclusive resources, 
                networking opportunities, and hands-on experience with AWS services.
              </p>
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all transform hover:-translate-y-1">
                Become a Member
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;