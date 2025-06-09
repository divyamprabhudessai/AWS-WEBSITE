import React, { useEffect, useState } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const API_BASE_URL = 'http://localhost:3000/api';

interface EventReport {
  filename: string;
  path: string;
  size: string;
  lastUpdated: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: string;
  summary: string;
  highlights: string[];
  report: EventReport;
}

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  const handleDownloadReport = async () => {
    if (!event) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/events/${event.id}/report`);
      if (!response.ok) {
        throw new Error('Failed to download report');
      }
      
      // Create a blob from the response
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = event.report.filename;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error downloading report:', err);
      alert('Failed to download report. Please try again later.');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-white text-xl">Loading event details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !event) {
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
                      Download the complete event documentation ({event.report.size}, last updated {event.report.lastUpdated}).
                    </p>
                    <button 
                      onClick={handleDownloadReport}
                      className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                    >
                      <FileText size={20} className="mr-2" />
                      Download Documentation
                    </button>
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