import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const awsServices = [
    {
      title: "Cloud Computing",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      description: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like AWS."
    },
    {
      title: "Machine Learning",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      description: "Machine Learning (ML) is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. AWS provides a comprehensive set of ML services and tools that help developers and data scientists build, train, and deploy ML models at scale."
    },
    {
      title: "DevOps",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      description: "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity. AWS DevOps services help teams automate and manage their infrastructure, deploy application code, and monitor application and infrastructure performance."
    }
  ];

  const awsTutorials = [
    {
      title: "EC2 Deployment Guide",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
      description: "Learn how to deploy and manage Amazon EC2 instances efficiently. This comprehensive guide covers instance types, security groups, and best practices for optimal performance."
    },
    {
      title: "S3 Storage Solutions",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      description: "Master Amazon S3 storage solutions with this detailed tutorial. Understand bucket policies, lifecycle rules, and how to implement cost-effective storage strategies."
    },
    {
      title: "Lambda Functions",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      description: "Dive deep into serverless computing with AWS Lambda. Learn to create, deploy, and monitor Lambda functions for various use cases and event-driven architectures."
    },
    {
      title: "Database Management",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
      description: "Explore AWS database services including RDS, DynamoDB, and Aurora. Learn about high availability, backup strategies, and performance optimization."
    },
    {
      title: "Cloud Security",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      description: "Implement robust security measures using AWS security services. Cover IAM policies, KMS encryption, and security best practices for cloud infrastructure."
    },
    {
      title: "Kubernetes on EKS",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
      description: "Get started with Kubernetes on Amazon EKS. Learn cluster management, deployment strategies, and how to scale containerized applications effectively."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Services Section */}
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
              <h2 className="text-2xl font-bold mb-2">-SERVICES-</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 bg-clip-text text-transparent">
                CORE AWS SERVICES<br />WE COVER
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awsServices.map((service, index) => (
                <div key={index} className="relative rounded-3xl overflow-hidden group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory(service.title)}
                    className="absolute bottom-6 right-6 bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    <Plus className="h-6 w-6 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Solutions Section */}
        <section className="relative h-96 mb-16">
          <img 
            src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
            alt="Cloud Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 flex items-center justify-center">
            <h2 className="text-white text-5xl font-bold">CLOUD SOLUTIONS</h2>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awsTutorials.map((tutorial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-64">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                    <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                      {tutorial.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>
                    <a href={`/blog/${index}`} className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors">
                      <span className="text-sm font-medium">READ BLOG</span>
                      <Plus size={16} className="ml-2 transform group-hover:rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-b from-black to-blue-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  READY TO<br />
                  MASTER AWS<br />
                  CLOUD SERVICES
                </h2>
                <p className="text-gray-300 mb-8">
                  Join our community of cloud enthusiasts and stay updated with the latest AWS technologies, best practices, and expert insights delivered straight to your inbox
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-white">#AWSCLOUD</div>
                <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all transform hover:-translate-y-1">
                  FREE AWS RESOURCES
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Category Popup */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-blue-900 to-black rounded-lg max-w-2xl w-full p-8 relative">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-white mb-6">
              {selectedCategory}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {awsServices.find(service => service.title === selectedCategory)?.description}
            </p>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setSelectedCategory(null)}
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