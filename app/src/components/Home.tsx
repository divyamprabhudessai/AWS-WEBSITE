import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
      title: 'AWS Workshop Series: Serverless Architecture',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Cloud Summit 2024: Infrastructure as Code',
      date: 'February 22, 2024',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Hands-on Lab: AWS Lambda and API Gateway',
      date: 'January 18, 2024',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'DevOps Best Practices with AWS',
      date: 'December 5, 2023',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with AWS Lambda Functions',
      category: 'AWS',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Building AI Applications with AWS Machine Learning Services',
      category: 'AI Applications',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Cloud Cost Optimization Strategies for Startups',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* AWS Banner Section */}
        <section 
          className="bg-gray-900 relative overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(22,28,45,0.8) 100%)',
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-40 w-40 rounded-full bg-orange-500 opacity-10 top-20 -left-20"></div>
            <div className="absolute h-64 w-64 rounded-full bg-blue-600 opacity-10 bottom-10 -right-20"></div>
            
            <div className="absolute inset-0 opacity-5">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-screen w-1 bg-gradient-to-b from-blue-400 to-purple-600"
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
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Amazon Web Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our community of cloud enthusiasts, developers, and future architects.
                Learn, build, and grow with AWS Cloud Club.
              </p>
              <a 
                href="https://community.aws/"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Club Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">AWS Cloud Club</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are a student-led community focused on cloud computing and AWS technologies.
                Our mission is to help students learn cloud skills, prepare for certifications,
                and connect with industry professionals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { title: 'Learn', desc: 'Workshops & training sessions' },
                  { title: 'Build', desc: 'Hands-on projects & hackathons' },
                  { title: 'Connect', desc: 'Networking & career opportunities' }
                ].map((item, index) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Past Events</h2>
              <a 
                href="/events" 
                className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
              >
                View all events <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map(event => (
                <div key={event.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-900 relative">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs font-medium text-orange-400 mb-1">{event.date}</p>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors">{event.title}</h3>
                    <div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
                      <button className="mt-2 flex items-center text-sm font-medium text-orange-400">
                        Learn more <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Latest from our Blog</h2>
              <a 
                href="/blog" 
                className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
              >
                View all articles <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map(blog => (
                <div key={blog.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  </div>
                  <div className="p-4 bg-white">
                    <span className="text-xs font-medium text-orange-500 mb-2 inline-block">{blog.category}</span>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">{blog.title}</h3>
                    <div className="flex justify-end mt-2">
                      <button className="flex items-center text-sm font-medium text-gray-600 group-hover:text-orange-500 transition-colors">
                        Read more <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Teams</h2>
              
              {teams.map(team => {
                const [isHovered, setIsHovered] = useState(false);
                
                return (
                  <div 
                    key={team.id}
                    className="relative overflow-hidden rounded-lg border border-gray-200 p-6 mb-4 cursor-pointer group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => window.location.href = `/${team.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <div 
                      className={`absolute inset-0 bg-gray-900 transition-all duration-500 ease-out origin-left ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    ></div>
                    
                    <div className="flex justify-between items-center relative z-10">
                      <h3 
                        className={`text-xl font-bold transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {team.name}
                      </h3>
                      <ArrowRight 
                        className={`transform transition-all duration-300 ${
                          isHovered ? 'translate-x-1 text-orange-400' : 'text-gray-400'
                        }`} 
                      />
                    </div>
                    
                    <p 
                      className={`mt-2 transition-colors duration-300 ${
                        isHovered ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {team.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Club Gallery</h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg h-96 relative">
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{images[currentIndex].alt}</h3>
                </div>
                
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
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