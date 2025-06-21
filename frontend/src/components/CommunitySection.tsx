import React from 'react';
import { Link } from 'react-router-dom';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-800 relative overflow-hidden px-4">
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full ambient-float"></div>
      <div className="absolute bottom-16 left-16 w-24 h-24 bg-secondary/10 rounded-full ambient-float" style={{ animationDelay: '3s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center border-4 border-accent/10 relative">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-accent/10 rounded-full p-4 mb-4">
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-text-secondary">Join Our Memory Community</h2>
              <p className="text-xl mb-6 text-text-secondary">Connect with thousands of memory keepers and start preserving your precious moments today. Your journey through time begins here.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-accent-600 transition-colors duration-300 transform hover:-translate-y-1">
                Create Your Memory Box
              </Link>
              <Link to="/login" className="flex items-center justify-center gap-2 bg-primary text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary-600 transition-colors duration-300 transform hover:-translate-y-1">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 
