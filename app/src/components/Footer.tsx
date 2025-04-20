import React from 'react';
import { Cloud, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1624] text-white">
      <div className="py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Let's Connect there</h2>
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
            Join us →
          </button>
        </div>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-300">
          Amazon Web Services (AWS) is the world's most comprehensive and
          broadly adopted cloud platform.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">Name:</span>
                  <span>AWS Cloud Club</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">Phone:</span>
                  <span>+81 755544555</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">Email:</span>
                  <span>info@aws.com</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">Website:</span>
                  <span>AWSCloudClub.org</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Get the latest information</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-r-lg">
                  →
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Projects</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Serverless Apps</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Database Solutions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-12">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6 px-4 text-center text-sm text-gray-400">
        <p>Copyright© 2023 AWS. All Rights Reserved</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">User Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;