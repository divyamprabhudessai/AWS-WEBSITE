import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart2, Tag } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface BlogPostContent {
  type: 'introduction' | 'section' | 'conclusion';
  title?: string;
  text?: string;
  content?: string;
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
  content: BlogPostContent[];
  tags: string[];
  relatedPosts: string[];
}

const API_BASE_URL = 'http://localhost:3000/api';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching the blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

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

  if (error || !post) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Error Loading Blog Post</h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
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
        {/* Blog Post Hero Section */}
        <section className="relative">
          <div className="h-[60vh] relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 -mt-32 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Link>
              
              <div className="bg-gradient-to-br from-blue-900 to-black rounded-lg p-8 shadow-xl">
                <div className="flex items-center space-x-4 text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <BarChart2 className="h-4 w-4 mr-1" />
                    {post.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center justify-between text-gray-400 mb-8">
                  <div className="flex items-center">
                    <span className="font-medium text-white">{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="prose prose-invert max-w-none">
                  {post.content.map((section, index) => (
                    <div key={index} className="mb-8">
                      {section.type === 'introduction' && (
                        <p className="text-xl text-gray-300 leading-relaxed">
                          {section.text}
                        </p>
                      )}
                      
                      {section.type === 'section' && (
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-4">
                            {section.title}
                          </h2>
                          <div className="text-gray-300 whitespace-pre-line">
                            {section.content}
                          </div>
                        </div>
                      )}
                      
                      {section.type === 'conclusion' && (
                        <div className="border-t border-gray-700 pt-6 mt-8">
                          <p className="text-xl text-gray-300 leading-relaxed">
                            {section.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex items-center mb-4">
                    <Tag className="h-5 w-5 text-cyan-500 mr-2" />
                    <h3 className="text-lg font-semibold text-white">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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

export default BlogPost; 