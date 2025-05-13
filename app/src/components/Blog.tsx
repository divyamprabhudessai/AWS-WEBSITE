import React from 'react';
import { Plus } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function Blog() {
  const awsServices = [
    {
      title: "Cloud Computing",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      title: "Machine Learning",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"
    },
    {
      title: "DevOps",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
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
    <div className="min-h-screen bg-white">
        <Navbar/>
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h2 className="text-center text-2xl font-bold mb-2">-SERVICES-</h2>
        <h1 className="text-center text-4xl font-bold mb-12">CORE AWS SERVICES<br />WE COVER</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awsServices.map((service, index) => (
            <div key={index} className="relative rounded-3xl overflow-hidden group">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
              </div>
              <button className="absolute bottom-6 right-6 bg-orange-500 p-2 rounded-full">
                <Plus className="h-6 w-6 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Solutions Section */}
      <div className="relative h-96 mb-16">
        <img 
          src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
          alt="Cloud Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-5xl font-bold">CLOUD SOLUTIONS</h2>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awsTutorials.map((tutorial, index) => (
            <div key={index} className="bg-gray-100 rounded-3xl overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                  {tutorial.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">
                  READ TUTORIAL
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                READY TO<br />
                MASTER AWS<br />
                CLOUD SERVICES
              </h2>
              <p className="text-gray-600 mb-8">
                Join our community of cloud enthusiasts and stay updated with the latest AWS technologies, best practices, and expert insights delivered straight to your inbox
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">#AWSCLOUD</div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full">
                FREE AWS RESOURCES
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;