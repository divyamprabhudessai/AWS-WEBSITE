import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

type BlogId = '1' | '2' | '3';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, this would come from an API or database
  const blogs = {
    '1': {
      title: 'Getting Started with AWS Lambda Functions',
      category: 'AWS',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: `AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. 
                In this tutorial, we'll explore how to create and deploy your first Lambda function.
                
                We'll cover:
                - Setting up your AWS account
                - Creating your first Lambda function
                - Understanding triggers and events
                - Best practices for Lambda development
                - Monitoring and debugging
                
                By the end of this tutorial, you'll have a solid understanding of how to use AWS Lambda in your applications.`
    },
    '2': {
      title: 'Building AI Applications with AWS Machine Learning Services',
      category: 'AI Applications',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: `AWS provides a comprehensive suite of machine learning services that make it easy to build, train, and deploy AI applications.
                In this guide, we'll explore how to leverage these services to create powerful AI solutions.
                
                Topics covered:
                - Amazon SageMaker for model training
                - Amazon Rekognition for image analysis
                - Amazon Comprehend for text analysis
                - Best practices for AI application development
                - Cost optimization strategies
                
                Learn how to integrate these services into your applications and create intelligent solutions.`
    },
    '3': {
      title: 'Cloud Cost Optimization Strategies for Startups',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: `Managing cloud costs effectively is crucial for startups. In this article, we'll explore various strategies to optimize
                your AWS spending while maintaining performance and scalability.
                
                Key areas covered:
                - Right-sizing your resources
                - Using reserved instances
                - Implementing auto-scaling
                - Monitoring and analytics
                - Cost allocation and budgeting
                
                Discover how to make the most of your cloud budget and avoid common cost pitfalls.`
    }
  };

  const blog = id ? blogs[id as BlogId] : undefined;

  if (!blog) {
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