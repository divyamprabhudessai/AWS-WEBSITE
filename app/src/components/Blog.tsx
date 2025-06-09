import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart2, Tag } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
}

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  difficulty: string;
  category: string;
  image: string;
  description: string;
  content: {
    type: 'introduction' | 'section' | 'conclusion';
    title?: string;
    text?: string;
    content?: string;
  }[];
  tags: string[];
  relatedPosts: string[];
}

const API_BASE_URL = 'http://localhost:3000/api';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, servicesRes] = await Promise.all([
          fetch(`${API_BASE_URL}/blog/posts`),
          fetch(`${API_BASE_URL}/blog/services`)
        ]);

        if (!postsRes.ok || !servicesRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [postsData, servicesData] = await Promise.all([
          postsRes.json(),
          servicesRes.json()
        ]);

        setPosts(postsData);
        setServices(servicesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-white text-2xl">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Error Loading Content</h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all"
            >
              Retry
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Services Section */}
        <section className="relative py-20 bg-gradient-to-b from-black to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white mb-12">
              <h2 className="text-2xl font-bold mb-2">-SERVICES-</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 bg-clip-text text-transparent">
                CORE AWS SERVICES<br />WE COVER
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="relative rounded-3xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Latest Blog Posts</h2>
              <p className="text-gray-300">Explore our collection of AWS tutorials and guides</p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !selectedCategory
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link 
                  key={post.id}
                  to={`/blog/post/${post.id}`}
                  className="group bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-64">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl font-semibold mb-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-300 text-sm">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <BarChart2 className="h-4 w-4 mr-1" />
                          {post.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-gray-400 mb-4">
                      <span className="font-medium text-white">{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-blue-900 to-black rounded-lg max-w-2xl w-full p-8 relative">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-white mb-6">
              {selectedService.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {selectedService.description}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Key Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Blog;