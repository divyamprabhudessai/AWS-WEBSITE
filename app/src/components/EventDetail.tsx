import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

type EventId = '1' | '2' | '3';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, this would come from an API or database
  const events = {
    '1': {
      title: 'Student Community Day 2024',
      date: 'March 15, 2024',
      location: 'Virtual',
      description: 'A day dedicated to bringing together student communities from across the globe to learn, share, and grow together.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Community',
      summary: `The Student Community Day 2024 was a landmark event that brought together AWS Cloud Clubs from around the world. 
                The event featured keynote speeches from AWS leaders, technical workshops, and networking sessions. 
                Participants had the opportunity to learn about the latest AWS services, best practices in cloud computing, 
                and career opportunities in the tech industry.`,
      highlights: [
        'Keynote speeches from AWS leaders',
        'Technical workshops on AWS services',
        'Networking sessions with industry professionals',
        'Career development discussions',
        'Hands-on labs and demonstrations'
      ],
      documentationUrl: '/docs/student-community-day-2024.pdf'
    },
    '2': {
      title: 'TAG Venture',
      date: 'February 22, 2024',
      location: 'MIT ADT University',
      description: 'An innovative event focused on technology, entrepreneurship, and cloud computing, bringing together students and industry experts.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Innovation',
      summary: `TAG Venture was a unique event that combined technology, entrepreneurship, and cloud computing. 
                Hosted at MIT ADT University, the event brought together students, entrepreneurs, and industry experts 
                to explore innovative solutions and business opportunities in the cloud space.`,
      highlights: [
        'Startup pitch sessions',
        'Cloud technology workshops',
        'Entrepreneurship panel discussions',
        'Networking with industry leaders',
        'Innovation challenges'
      ],
      documentationUrl: '/docs/tag-venture-2024.pdf'
    },
    '3': {
      title: 'Amazon Community Day - AI/ML Edition',
      date: 'January 18, 2024',
      location: 'AWS User Group Pune',
      description: 'A specialized event focusing on Artificial Intelligence and Machine Learning, featuring workshops, talks, and hands-on sessions.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'AI/ML',
      summary: `The Amazon Community Day - AI/ML Edition was a specialized event focused on artificial intelligence and machine learning. 
                Hosted by AWS User Group Pune, the event featured expert talks, hands-on workshops, and demonstrations of 
                cutting-edge AI/ML applications using AWS services.`,
      highlights: [
        'AI/ML expert talks',
        'Hands-on workshops with SageMaker',
        'Real-world AI/ML use cases',
        'Networking with AI/ML professionals',
        'Career opportunities in AI/ML'
      ],
      documentationUrl: '/docs/community-day-ai-ml-2024.pdf'
    }
  };

  const event = id ? events[id as EventId] : undefined;

  if (!event) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <Link to="/events" className="text-cyan-500 hover:text-cyan-400">
              Return to Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Event Hero Section */}
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
            <Link 
              to="/events" 
              className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Events
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
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
              
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
                <div className="flex items-center text-gray-400 mb-6">
                  <span>{event.date}</span>
                  <span className="mx-2">•</span>
                  <span>{event.location}</span>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 mb-8">{event.summary}</p>
                  
                  <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                  <ul className="space-y-2 mb-8">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-12 p-6 bg-gradient-to-br from-blue-900 to-black rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Event Documentation</h2>
                    <p className="text-gray-300 mb-4">
                      Download the complete event documentation prepared by our documentation team.
                    </p>
                    <a 
                      href={event.documentationUrl}
                      className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={20} className="mr-2" />
                      Download Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail; 