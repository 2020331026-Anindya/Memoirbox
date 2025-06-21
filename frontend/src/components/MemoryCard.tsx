import React from 'react';

interface MemoryCardProps {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  collection: string;
  collectionColor: string;
  author?: string;
  onSelect?: (id: string) => void;
  isMultiSelectMode?: boolean;
  isSelected?: boolean;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  id,
  title,
  date,
  imageUrl,
  collection,
  collectionColor,
  author,
  onSelect,
  isMultiSelectMode = false,
  isSelected = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isMultiSelectMode && onSelect) {
      onSelect(id);
    }
  };

  const [imgError, setImgError] = React.useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div 
      className="memory-item card overflow-hidden cursor-pointer hover:shadow-medium transition-fast group"
      data-memory-id={id}
      onClick={handleClick}
    >
      <div className="relative aspect-square bg-gray-200 overflow-hidden">
        <img 
          src={imgError ? fallbackImage : imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-medium" 
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-fast"></div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-fast">
          <button className="w-8 h-8 bg-surface rounded-full flex items-center justify-center shadow-medium hover:bg-gray-50">
            <svg className="w-4 h-4 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className={`px-2 py-1 ${collectionColor} text-white text-xs rounded-full`}>
            {collection}
          </span>
        </div>
        {isMultiSelectMode && (
          <div className="multi-select-checkbox absolute top-2 left-2">
            <input 
              type="checkbox" 
              className="w-5 h-5 text-accent focus:ring-accent rounded"
              checked={isSelected}
              onChange={() => onSelect?.(id)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-text-primary mb-1 truncate">{title}</h3>
        <p className="text-sm text-text-secondary mb-2">{date}</p>
        <div className="flex items-center justify-between">
          <span className={`inline-block px-2 py-1 ${collectionColor} text-white text-xs rounded-full`}>
            {collection}
          </span>
          {author && (
            <span className="text-xs text-text-secondary">by {author}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemoryCard; 