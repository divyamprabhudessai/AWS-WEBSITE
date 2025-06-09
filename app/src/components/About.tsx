import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
  github: string;
  fiverr?: string;
  description: string;
  experience?: { title: string; details: string }[];
  skills?: string[];
}

// Custom Fiverr Icon Component
const FiverrIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-200 hover:text-cyan-400 transition-colors"
  >
    <path
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
      fill="currentColor"
    />
    <path
      d="M8.5 14.5l2-4.5 2 4.5M13 10v4M15.5 10v4"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [coreTeam, setCoreTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/core-team');
        const data = await response.json();
        setCoreTeam(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

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

  const handleSlide = (dir: 'next' | 'prev') => {
    setDirection(dir);
    setCurrentSlide((prev) =>
      dir === 'next'
        ? (prev + 1) % coreTeam.length
        : (prev - 1 + coreTeam.length) % coreTeam.length
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-white text-xl">Loading team data...</div>
        </div>
        <Footer />
      </div>
    );
  }

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
            <div className="flex justify-center items-center gap-6 relative min-h-[420px]">
              <button 
                onClick={() => handleSlide('prev')}
                className="bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition-colors z-20"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              {/* Main Profile Card with Morph Animation (Photo large, shrinks and moves to top center on hover) */}
              <article className="relative w-[340px] min-h-[420px] md:w-[420px] md:min-h-[520px] group bg-gradient-to-br from-blue-900 to-black rounded-2xl shadow-xl p-8 transition-all duration-500 overflow-hidden cursor-pointer flex items-center justify-center">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Profile Image - perfectly centered by default, moves to top center on hover */}
                  <img
                    src={coreTeam[currentSlide]?.image}
                    alt={coreTeam[currentSlide]?.name}
                    className="absolute left-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-cyan-500 shadow-lg bg-white transition-all duration-500 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:w-24 group-hover:h-24 group-hover:top-8 group-hover:-translate-y-0 group-hover:scale-90"
                  />
                  {/* Card Content - hidden by default, revealed on hover */}
                  <div className="flex flex-col items-center w-full opacity-0 pointer-events-none translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 mt-0 group-hover:mt-[140px]">
                    <h3 className="text-white text-2xl font-bold mb-2 text-center">{coreTeam[currentSlide]?.name}</h3>
                    <p className="text-cyan-400 mb-4 text-center">{coreTeam[currentSlide]?.role}</p>
                    <p className="text-gray-300 mb-6 text-center text-sm md:text-base max-h-[120px] overflow-y-auto">{coreTeam[currentSlide]?.description}</p>
                    <div className="flex space-x-6 mb-6 justify-center">
                      <a href={`mailto:${coreTeam[currentSlide]?.email}`} className="text-gray-200 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        <Mail size={24} />
                      </a>
                      <a href={coreTeam[currentSlide]?.linkedin} className="text-gray-200 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                      </a>
                      <a href={coreTeam[currentSlide]?.github} className="text-gray-200 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        <Github size={24} />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {coreTeam[currentSlide]?.skills?.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <button 
                onClick={() => handleSlide('next')}
                className="bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition-colors z-20"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
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