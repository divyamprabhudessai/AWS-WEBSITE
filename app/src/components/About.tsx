import React, { useState, useEffect, useRef } from 'react';
import { Book, Users, Award, Lightbulb, Calendar, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

const useInView = (options: UseInViewOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px',
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin]);
  
  return [ref, isVisible] as const;
};

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroRef, heroIsVisible] = useInView({ threshold: 0.1 });
  const [missionRef, missionIsVisible] = useInView({ threshold: 0.1 });
  const [galleryRef, galleryIsVisible] = useInView({ threshold: 0.1 });
  const [whatWeDoRef, whatWeDoIsVisible] = useInView({ threshold: 0.1 });
  const [leadershipRef, leadershipIsVisible] = useInView({ threshold: 0.1 });

  const images = [
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5926394/pexels-photo-5926394.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const services = [
    {
      title: "Workshops & Training",
      description: "Hands-on technical workshops on AWS services, cloud architecture, and best practices led by experienced students and industry professionals.",
      icon: <Book className="w-10 h-10 text-purple-600" />
    },
    {
      title: "Networking Events",
      description: "Connect with fellow cloud enthusiasts, AWS professionals, and potential employers through our regular networking sessions and industry mixers.",
      icon: <Users className="w-10 h-10 text-blue-500" />
    },
    {
      title: "Certification Support",
      description: "Study groups, practice exams, and resources to help members prepare for and pass AWS certification exams at discounted rates.",
      icon: <Award className="w-10 h-10 text-purple-600" />
    },
    {
      title: "Project Collaboration",
      description: "Work on real-world cloud projects with other members to build your portfolio and gain practical experience solving complex problems.",
      icon: <Lightbulb className="w-10 h-10 text-blue-500" />
    },
    {
      title: "Guest Speakers",
      description: "Learn from industry experts, AWS heroes, and successful alumni who share their knowledge, experiences, and career advice.",
      icon: <Calendar className="w-10 h-10 text-purple-600" />
    },
    {
      title: "Career Development",
      description: "Get guidance on cloud career paths, resume reviews, interview preparation, and job placement assistance in the AWS ecosystem.",
      icon: <Rocket className="w-10 h-10 text-blue-500" />
    }
  ];

  const teamMembers = [
    {
      name: "Parth Shah",
      role: "AWS Cloud Club Captain",
      quote: "Take the first step today in the stairs to Reach the Cloud",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQH4cS9srAlnUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727231806644?e=1750896000&v=beta&t=4inf8JQJvzgBcyqxCnulmnAlpx4eHpYsTCQHaUm8G-8",
      color: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      name: "Sidharthkumar Pawar", 
      role: "Vice President",
      quote: "Cloud connects servers, while a Community connects people.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQG7msJoQPscaA/feedshare-shrink_1280/B4DZXs_dQrHAAk-/0/1743437818732?e=1747872000&v=beta&t=hIIQafuv1DPlJIctJhSlPYpABnw8CgGUEcn7fbVuLBk",
      color: "bg-gradient-to-r from-purple-600 to-pink-500"
    },
    {
      name: "Tany Pujara",
      role: "Secretary",
      quote: "Innovation happens at the intersection of cloud and creativity.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFAiQ0s6zwj5g/profile-displayphoto-shrink_800_800/B4DZYJ4ntkHAAc-/0/1743922561242?e=1750896000&v=beta&t=GjSAQAVyHStWDNxU2hRyW_uSHAgMzlPf-coewO9qqG8",
      color: "bg-gradient-to-r from-blue-500 to-cyan-400"
    },
    {  
        name: "Shambhavi Mishra",
        role: "Treasurer",
        quote: "Innovation happens at the intersection of cloud and creativity.",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQGwuYHRNHkxPg/feedshare-shrink_1280/B4DZXwuMGqHsAo-/0/1743500403726?e=1747872000&v=beta&t=F1_hGa2ep4K3eY3pIlPUh-qbUAuA5f3boQc1s3UfAR0",
        color: "bg-gradient-to-r from-blue-500 to-cyan-400"
    },
    {  
        name: "Arya Shende",
        role: "Community Manager",
        quote: "Innovation happens at the intersection of cloud and creativity.",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFCgYjwPtNTfg/profile-displayphoto-shrink_400_400/B56ZXeIkkEGQAk-/0/1743188545094?e=1750896000&v=beta&t=8qDFaRl9w3DZKFNsQ46zgezCqZUbZu6OU0J3Ip9-_lA",
        color: "bg-gradient-to-r from-blue-500 to-cyan-400"
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <header ref={heroRef} className={`pt-32 pb-20 text-center transition-all duration-1000 ${heroIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">AWS Cloud Club</span>
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed animate-fadeIn">
            Empowering students to master cloud computing and
            build the future of technology
          </p>
          <div className="h-1.5 w-48 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-16 rounded-full"></div>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className={`py-24 px-4 bg-white transition-all duration-1000 transform ${missionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Mission & Vision
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-center text-lg leading-relaxed text-gray-700">
              AWS Cloud Club is a student-led organization dedicated to fostering knowledge, skills, and
              community around Amazon Web Services and cloud computing technologies.
            </p>
            <p className="text-center text-lg leading-relaxed text-gray-700">
              Our mission is to provide students with hands-on experience, industry connections, and the
              technical expertise needed to thrive in the rapidly evolving cloud computing landscape.
            </p>
            <p className="text-center text-lg leading-relaxed text-gray-700">
              We envision a future where every student has the opportunity to develop cloud skills,
              regardless of their background or major, creating a diverse and talented pool of cloud
              professionals ready to innovate and lead.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section ref={galleryRef} className="relative overflow-hidden py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`min-w-[240px] h-[320px] bg-cover bg-center relative rounded-xl shadow-lg transition-all duration-700 transform ${
                    galleryIsVisible ? `opacity-100 translate-y-0 delay-[${index * 100}ms]` : 'opacity-0 translate-y-10'
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                >
                  {index === 4 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-2xl font-bold rounded-xl">
                      Isometric
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="h-1.5 w-48 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-12 rounded-full"></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatWeDoRef} className={`py-24 px-4 bg-white transition-all duration-1000 transform ${whatWeDoIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            What We Do
          </h2>
          <p className="text-center text-xl max-w-3xl mx-auto mb-16 text-gray-600">
            Our club offers a variety of activities and resources to 
            help students excel in cloud computing
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform ${
                  whatWeDoIsVisible 
                    ? `opacity-100 translate-y-0 delay-[${index * 100}ms]` 
                    : 'opacity-0 translate-y-10'
                } hover:shadow-xl hover:scale-105 border border-gray-100`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gray-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section ref={leadershipRef} className={`py-24 px-4 bg-gray-50 transition-all duration-1000 transform ${leadershipIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            Our Leadership Team
          </h2>
          <p className="text-center text-xl max-w-3xl mx-auto mb-16 text-gray-600">
            Meet the dedicated students who lead our AWS Cloud Club
          </p>
          
          <div className={`relative max-w-5xl mx-auto h-[500px] transition-opacity duration-500 ${leadershipIsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-center gap-8 relative h-full">
              {teamMembers.map((member, index) => {
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % teamMembers.length;
                const isPrev = index === (currentIndex - 1 + teamMembers.length) % teamMembers.length;
                
                let position = "hidden";
                if (isActive) position = "translate-x-0 z-30 opacity-100 scale-100";
                else if (isNext) position = "translate-x-[60%] z-20 opacity-50 scale-90";
                else if (isPrev) position = "translate-x-[-60%] z-20 opacity-50 scale-90";
                
                return (
                  <div
                    key={index}
                    className={`absolute top-0 transition-all duration-500 transform w-full max-w-lg ${position}`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                      <div 
                        className="h-64 bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.image})` }}
                      ></div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-gray-600 mb-6 text-lg">{member.role}</p>
                        <div className={`rounded-xl p-6 text-white ${member.color}`}>
                          <blockquote className="text-lg italic">
                            "{member.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button 
              onClick={goToPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-40 bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors hover:scale-110 transform duration-200"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-40 bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors hover:scale-110 transform duration-200"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;