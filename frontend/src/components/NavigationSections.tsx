import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSections: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Stories Section */}
      <section id="stories" className="py-20 bg-white rounded-xl shadow-lg mx-4 my-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">Stories</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Share and discover heartwarming stories from our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Share Your Story</h3>
              <p className="text-gray-600 mb-6">Create and share your personal stories with our community. Let your memories inspire others.</p>
              <Link to="/stories/create" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Start Writing
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Discover Stories</h3>
              <p className="text-gray-600 mb-6">Explore stories from our community members and get inspired by their experiences.</p>
              <Link to="/stories" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
                Browse Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section id="groups" className="py-20 bg-gray-50 rounded-xl shadow-lg mx-4 my-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">Groups</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Connect with others who share your interests and memories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Family Groups</h3>
              <p className="text-gray-600 mb-6">Create private groups for your family to share and preserve memories together.</p>
              <Link to="/groups/family" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Join Family Group
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Interest Groups</h3>
              <p className="text-gray-600 mb-6">Connect with people who share your hobbies, interests, or life experiences.</p>
              <Link to="/groups/interests" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Find Groups
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Create Group</h3>
              <p className="text-gray-600 mb-6">Start your own group and invite others to join your memory-keeping journey.</p>
              <Link to="/groups/create" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Create Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai-features" className="py-20 bg-white rounded-xl shadow-lg mx-4 my-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">AI Features</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Experience the power of AI in preserving and enhancing your memories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Smart Organization</h3>
              <p className="text-gray-600 mb-6">Let AI help you organize and categorize your memories automatically.</p>
              <Link to="/ai/organize" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Try AI Organization
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Memory Enhancement</h3>
              <p className="text-gray-600 mb-6">Enhance your photos and videos with AI-powered tools and filters.</p>
              <Link to="/ai/enhance" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Enhance Memories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Have Fun Section */}
      <section id="fun" className="py-20 bg-gray-50 rounded-xl shadow-lg mx-4 my-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">Let's Have Fun</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Engage with interactive features and games while preserving memories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Memory Games</h3>
              <p className="text-gray-600 mb-6">Play fun games that help you remember and organize your memories.</p>
              <Link to="/fun/games" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Play Games
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Memory Challenges</h3>
              <p className="text-gray-600 mb-6">Participate in weekly challenges to preserve and share memories.</p>
              <Link to="/fun/challenges" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Join Challenges
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Memory Quizzes</h3>
              <p className="text-gray-600 mb-6">Test your memory and learn interesting facts about memory keeping.</p>
              <Link to="/fun/quizzes" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Take Quizzes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavigationSections; 