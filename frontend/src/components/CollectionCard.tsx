import React, { useState } from 'react';

interface CollectionCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  memoryCount: number;
  lastUpdated: string;
  isPrivate: boolean;
  onEdit: (id: string) => void;
  onShare: (id: string) => void;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  name,
  description,
  imageUrl,
  memoryCount,
  lastUpdated,
  isPrivate,
  onEdit,
  onShare,
  onDelete,
  onClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div 
      className="card hover:shadow-medium transition-fast cursor-pointer group"
      onClick={() => onClick(id)}
    >
      <div className="relative">
        <div className="aspect-video bg-gray-200 rounded-t-soft overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-medium"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            }}
          />
        </div>
        
        {/* Privacy Indicator */}
        <div className="absolute top-3 left-3 bg-black/50 rounded-full p-2">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isPrivate ? 
              "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" :
              "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            }/>
          </svg>
        </div>
        
        {/* Quick Actions Menu */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-fast">
          <div className="relative">
            <button
              className="bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-fast"
              onClick={handleMenuClick}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-surface rounded-soft shadow-large py-2 min-w-32 z-10">
                <button
                  className="w-full px-4 py-2 text-left text-sm text-text-primary hover:bg-gray-50 transition-fast"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-text-primary hover:bg-gray-50 transition-fast"
                  onClick={(e) => {
                    e.stopPropagation();
                    onShare(id);
                  }}
                >
                  Share
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-error hover:bg-gray-50 transition-fast"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(id);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">{name}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            {memoryCount} memories
          </span>
          <span>Updated {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard; 