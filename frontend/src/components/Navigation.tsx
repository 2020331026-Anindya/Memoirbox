import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('memoirbox_user') || sessionStorage.getItem('memoirbox_user');

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-surface shadow-subtle border-b border-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg className="w-8 h-8 text-accent mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <h1 className="text-xl font-semibold text-text-primary">Memoirbox</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/group"
                  className={`${
                    isActive('/group')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  Group
                </Link>
                <Link
                  to="/upload"
                  className={`${
                    isActive('/upload')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  Upload
                </Link>
                <Link
                  to="/timeline"
                  className={`${
                    isActive('/timeline')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  Timeline
                </Link>
                <Link
                  to="/gallery"
                  className={`${
                    isActive('/gallery')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  Gallery
                </Link>
                <Link
                  to="/collections"
                  className={`${
                    isActive('/collections')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  Collections
                </Link>
                <Link
                  to="/ai"
                  className={`${
                    isActive('/ai')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  AI
                </Link>
                <Link
                  to="/profile-settings"
                  className={`${
                    isActive('/profile-settings')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem('memoirbox_user');
                    sessionStorage.removeItem('memoirbox_user');
                    window.location.href = '/';
                  }}
                  className="text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className={`${
                    isActive('/')
                      ? 'text-accent font-medium px-3 py-2 rounded-md bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>
                <a
                  href="#stories"
                  className="text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Stories
                </a>
                <a
                  href="#groups"
                  className="text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Groups
                </a>
                <a
                  href="#ai-features"
                  className="text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  AI Features
                </a>
                <a
                  href="#fun"
                  className="text-text-secondary hover:text-text-primary transition-fast px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Let's Have Fun
                </a>
                <Link
                  to="/login"
                  className="btn-primary"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-light">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/upload"
                    className={`block px-3 py-2 rounded-md ${
                      isActive('/upload')
                        ? 'text-accent font-medium bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    }`}
                  >
                    Upload
                  </Link>
                  <Link
                    to="/timeline"
                    className={`block px-3 py-2 rounded-md ${
                      isActive('/timeline')
                        ? 'text-accent font-medium bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    }`}
                  >
                    Timeline
                  </Link>
                  <Link
                    to="/gallery"
                    className={`block px-3 py-2 rounded-md ${
                      isActive('/gallery')
                        ? 'text-accent font-medium bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    }`}
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/collections"
                    className={`block px-3 py-2 rounded-md ${
                      isActive('/collections')
                        ? 'text-accent font-medium bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    }`}
                  >
                    Collections
                  </Link>
                  <Link
                    to="/ai"
                    className={`block px-3 py-2 rounded-md ${
                      isActive('/ai')
                        ? 'text-accent font-medium bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    }`}
                  >
                    AI
                  </Link>
                  <Link
                    to="/profile-settings"
                    className={`block px-3 py-2 rounded-md ${
                      isActive('/profile-settings')
                        ? 'text-accent font-medium bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    }`}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('memoirbox_user');
                      sessionStorage.removeItem('memoirbox_user');
                      window.location.href = '/';
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className={`block px-3 py-2 rounded-md ${
                      isActive('/')
                        ? 'text-accent font-medium bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    }`}
                  >
                    Home
                  </Link>
                  <a
                    href="#stories"
                    className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  >
                    Stories
                  </a>
                  <a
                    href="#groups"
                    className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  >
                    Groups
                  </a>
                  <a
                    href="#ai-features"
                    className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  >
                    AI Features
                  </a>
                  <a
                    href="#fun"
                    className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  >
                    Let's Have Fun
                  </a>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 