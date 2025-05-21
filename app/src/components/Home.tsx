import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home: React.FC = () => {
  // Gallery state and functions
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'AWS Cloud Club team meeting'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/7579203/pexels-photo-7579203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Workshop session'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Hackathon participants'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Team celebration'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Tech talk session'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Student Community Day 2024',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'TAG Venture',
      date: 'February 22, 2024',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Amazon Community Day - AI/ML Edition',
      date: 'January 18, 2024',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const blogs = [
    {
      id: 1,
      title: 'EC2 Deployment Guide',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg'
    },
    {
      id: 2,
      title: 'S3 Storage Solutions',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
    },
    {
      id: 3,
      title: 'Lambda Functions',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'
    }
  ];

  const teams = [
    {
      id: 1,
      name: 'Tech Team',
      description: 'Responsible for technical workshops, coding sessions, and hackathons.'
    },
    {
      id: 2,
      name: 'Design Team',
      description: 'Creates visual content, UI/UX designs, and marketing materials.'
    },
    {
      id: 3,
      name: 'PR Team',
      description: 'Handles communication, social media, and community engagement.'
    },
    {
      id: 4,
      name: 'Core Team',
      description: 'Leads the club initiatives, partnerships, and strategic planning.'
    }
  ];

  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);

  // Team members data
  const teamMembers = {
    1: [
      { name: 'John Doe', role: 'Lead Developer', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
      { name: 'Jane Smith', role: 'Backend Developer', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
      { name: 'Mike Johnson', role: 'Frontend Developer', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }
    ],
    2: [
      { name: 'Sarah Wilson', role: 'UI Designer', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
      { name: 'Tom Brown', role: 'UX Designer', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg' }
    ],
    3: [
      { name: 'Emily Davis', role: 'PR Manager', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg' },
      { name: 'Chris Lee', role: 'Social Media', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' }
    ],
    4: [
      { name: 'Alex Turner', role: 'Club President', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg' },
      { name: 'Lisa Chen', role: 'Vice President', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg' }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* AWS Banner Section */}
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
            
            <div className="absolute inset-0 opacity-5">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-screen w-1 bg-gradient-to-b from-magenta-400 to-cyan-500"
                  style={{
                    left: `${i * 10}%`,
                    transform: `rotate(${20 + i * 2}deg)`,
                    transformOrigin: 'top left',
                    opacity: 0.5 + i * 0.05,
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="flex justify-center mb-6">
                <Cloud className="w-16 h-16 text-cyan-500" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 bg-clip-text text-transparent">
                AWS Cloud Club
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our community of cloud enthusiasts, developers, and future architects.
                Learn, build, and grow with AWS Cloud Club.
              </p>
              <a 
                href="https://community.aws/"
                className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Club Description */}
        <section className="py-20 bg-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Empowering Cloud Innovation</h2>
              <p className="text-lg text-gray-300 mb-12">
                We are a student-led community focused on cloud computing and AWS technologies.
                Our mission is to help students learn cloud skills, prepare for certifications,
                and connect with industry professionals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Learn', desc: 'Workshops & training sessions', icon: '📚', color: 'from-cyan-500 to-blue-500' },
                  { title: 'Build', desc: 'Hands-on projects & hackathons', icon: '⚡', color: 'from-yellow-500 to-red-500' },
                  { title: 'Connect', desc: 'Networking & career opportunities', icon: '🤝', color: 'from-green-500 to-cyan-500' }
                ].map((item, index) => (
                  <div key={index} className={`p-6 bg-gradient-to-br ${item.color} rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-20 bg-gradient-to-b from-black to-blue-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-white">Past Events</h2>
              <Link 
                to="/events" 
                className="flex items-center text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
              >
                View all events <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map(event => (
                <div key={event.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-900 to-black relative">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs font-medium text-cyan-400 mb-1">{event.date}</p>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{event.title}</h3>
                    <div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
                      <Link 
                        to={`/events/${event.id}`}
                        className="mt-2 flex items-center text-sm font-medium text-cyan-400"
                      >
                        Learn more <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-blue-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-white">Latest from our Blog</h2>
              <Link 
                to="/blog" 
                className="flex items-center text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
              >
                View all articles <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map(blog => (
                <div key={blog.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-black">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-magenta-500 mb-2 inline-block">{blog.category}</span>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{blog.title}</h3>
                    <div className="flex justify-end mt-4">
                      <Link 
                        to={`/blog/${blog.id}`}
                        className="flex items-center text-sm font-medium text-gray-400 group-hover:text-cyan-400 transition-colors"
                      >
                        Read more <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Teams</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {teams.map((team) => (
                <div key={team.id} className="relative overflow-hidden rounded-lg shadow-lg">
                  <div 
                    className="p-6 cursor-pointer flex justify-between items-center relative z-10 bg-gradient-to-r from-blue-900 to-black"
                    onMouseEnter={() => setExpandedTeam(team.id)}
                    onMouseLeave={() => setExpandedTeam(null)}
                  >
                    <div className="relative z-10">
                      <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                        expandedTeam === team.id ? 'text-white' : 'text-white'
                      }`}>{team.name}</h3>
                      <p className={`mt-1 transition-colors duration-300 ${
                        expandedTeam === team.id ? 'text-gray-300' : 'text-gray-400'
                      }`}>{team.description}</p>
                    </div>
                    <ChevronDown 
                      className={`h-6 w-6 transition-all duration-300 ${
                        expandedTeam === team.id 
                          ? 'transform rotate-180 text-cyan-400' 
                          : 'text-gray-400'
                      }`}
                    />
                  </div>
                  
                  {/* Blackening effect background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-black to-blue-900 transition-all duration-500 ease-out origin-left ${
                      expandedTeam === team.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></div>
                  
                  {/* Team members content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedTeam === team.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {teamMembers[team.id as keyof typeof teamMembers]?.map((member, index) => (
                          <div key={index} className="bg-gradient-to-br from-blue-900 to-black rounded-lg p-4 flex items-center space-x-4 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500"
                            />
                            <div>
                              <h4 className="font-semibold text-white">{member.name}</h4>
                              <p className="text-sm text-gray-400">{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-blue-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Club Gallery</h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-xl h-96 relative">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map(image => (
                    <div key={image.id} className="w-full flex-shrink-0">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{images[currentIndex].alt}</h3>
                </div>
                
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 hover:bg-opacity-90 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 hover:bg-opacity-90 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-cyan-500 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;