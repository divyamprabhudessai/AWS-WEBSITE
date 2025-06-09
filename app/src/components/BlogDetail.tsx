import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  difficulty: string;
  tags: string[];
  relatedPosts: string[];
}

const API_BASE_URL = 'http://localhost:3000/api';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) return;
      
      try {
        const response = await fetch(`${API_BASE_URL}/blog/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
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

  if (error || !blog) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blog" className="text-cyan-500 hover:text-cyan-400">
              Return to Blog
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
        {/* Blog Hero Section */}
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
              to="/blog" 
              className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
                
                <div className="prose prose-invert max-w-none">
                  {blog.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-300 mb-6">
                      {paragraph}
                    </p>
                  ))}
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

export default BlogDetail; 