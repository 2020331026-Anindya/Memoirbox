import React from 'react';
import { Link } from 'react-router-dom';

interface SectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, description, children }) => (
  <section id={id} className="py-20 bg-white rounded-xl shadow-lg mx-4 my-8">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">{title}</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">{description}</p>
      </div>
      {children}
    </div>
  </section>
);

const SectionNavigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Stories Section */}
      <Section
        id="stories"
        title="Stories"
        description="Share and discover heartwarming stories from our community"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Share Your Story</h3>
            <p className="text-gray-600 mb-6">Create and share your personal stories with our community.</p>
            <Link to="/stories/create" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Start Writing
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Discover Stories</h3>
            <p className="text-gray-600 mb-6">Explore stories from our community members.</p>
            <Link to="/stories" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
              Browse Stories
            </Link>
          </div>
        </div>
      </Section>

      {/* Groups Section */}
      <Section
        id="groups"
        title="Groups"
        description="Connect with others who share your interests and memories"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Family Groups</h3>
            <p className="text-gray-600 mb-6">Create private groups for your family.</p>
            <Link to="/groups/family" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Join Family Group
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Interest Groups</h3>
            <p className="text-gray-600 mb-6">Connect with like-minded people.</p>
            <Link to="/groups/interests" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Find Groups
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Create Group</h3>
            <p className="text-gray-600 mb-6">Start your own group.</p>
            <Link to="/groups/create" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Create Group
            </Link>
          </div>
        </div>
      </Section>

      {/* AI Features Section */}
      <Section
        id="ai-features"
        title="AI Features"
        description="Experience the power of AI in preserving and enhancing your memories"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Smart Organization</h3>
            <p className="text-gray-600 mb-6">Let AI help organize your memories.</p>
            <Link to="/ai/organize" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Try AI Organization
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Memory Enhancement</h3>
            <p className="text-gray-600 mb-6">Enhance your photos with AI.</p>
            <Link to="/ai/enhance" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Enhance Memories
            </Link>
          </div>
        </div>
      </Section>

      {/* Let's Have Fun Section */}
      <Section
        id="fun"
        title="Let's Have Fun"
        description="Engage with interactive features and games while preserving memories"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Memory Games</h3>
            <p className="text-gray-600 mb-6">Play fun memory games.</p>
            <Link to="/fun/games" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Play Games
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Memory Challenges</h3>
            <p className="text-gray-600 mb-6">Join weekly challenges.</p>
            <Link to="/fun/challenges" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Join Challenges
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Memory Quizzes</h3>
            <p className="text-gray-600 mb-6">Test your memory.</p>
            <Link to="/fun/quizzes" className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">
              Take Quizzes
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SectionNavigation; 