import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Events: React.FC = () => {
  const mainEvents = [
    {
      id: 1,
      title: 'Student Community Day 2024',
      date: 'March 15, 2024',
      location: 'Virtual',
      description: 'A day dedicated to bringing together student communities from across the globe to learn, share, and grow together.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Community'
    },
    {
      id: 2,
      title: 'TAG Venture',
      date: 'February 22, 2024',
      location: 'MIT ADT University',
      description: 'An innovative event focused on technology, entrepreneurship, and cloud computing, bringing together students and industry experts.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Innovation'
    },
    {
      id: 3,
      title: 'Amazon Community Day - AI/ML Edition',
      date: 'January 18, 2024',
      location: 'AWS User Group Pune',
      description: 'A specialized event focusing on Artificial Intelligence and Machine Learning, featuring workshops, talks, and hands-on sessions.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'AI/ML'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Events Hero Section */}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 bg-clip-text text-transparent">
                Our Events
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover our past events and stay tuned for upcoming opportunities to learn, network, and grow with the AWS Cloud Club community.
              </p>
            </div>
          </div>
        </section>

        {/* Main Events Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainEvents.map(event => (
                <Link 
                  key={event.id} 
                  to={`/events/${event.id}`}
                  className="group h-full"
                >
                  <div className="bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative h-48">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-cyan-400 mb-2">{event.date}</p>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{event.location}</p>
                      <p className="text-gray-300 mb-4 line-clamp-2 flex-grow">{event.description}</p>
                      <div className="flex items-center text-cyan-500 group-hover:text-cyan-400 transition-colors mt-auto">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events; 