import React, { useState, useEffect } from 'react';
import { memoryService } from '../services/api';

interface CreateCollectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (collectionData: {
    name: string;
    description: string;
    privacy: string;
    selectedImages: string[];
  }) => void;
}

interface Memory {
  _id: string;
  title: string;
  imageUrls: string[];
  tags: string[];
  date: string;
}

const CreateCollectionPopup: React.FC<CreateCollectionPopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('private');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');
  const [memories, setMemories] = useState<Memory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMemories = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await memoryService.getMemories();
        setMemories(data);
      } catch (err) {
        setError('Failed to load memories');
        console.error('Error loading memories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      loadMemories();
    }
  }, [isOpen]);

  const filteredMemories = filter === 'all' 
    ? memories 
    : memories.filter(memory => memory.tags.includes(filter));

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImages(prev => 
      prev.includes(imageUrl)
        ? prev.filter(url => url !== imageUrl)
        : [...prev, imageUrl]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      privacy,
      selectedImages
    });
    onClose();
  };

  const handleRefresh = () => {
    setName('');
    setDescription('');
    setPrivacy('private');
    setSelectedImages([]);
    setFilter('all');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-text-primary">Create New Collection</h2>
            <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Side - Image Selection */}
            <div className="col-span-8">
              <div className="mb-4">
                <div className="flex space-x-2 mb-4">
                  <button
                    className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-accent text-white' : 'bg-secondary-100'}`}
                    onClick={() => setFilter('all')}
                  >
                    All
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${filter === 'family' ? 'bg-accent text-white' : 'bg-secondary-100'}`}
                    onClick={() => setFilter('family')}
                  >
                    Family
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${filter === 'travel' ? 'bg-accent text-white' : 'bg-secondary-100'}`}
                    onClick={() => setFilter('travel')}
                  >
                    Travel
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${filter === 'celebration' ? 'bg-accent text-white' : 'bg-secondary-100'}`}
                    onClick={() => setFilter('celebration')}
                  >
                    Celebration
                  </button>
                  <button
                    type="button"
                    className="ml-4 px-4 py-2 rounded-full bg-secondary-200 text-text-secondary hover:bg-secondary-300 transition-fast"
                    onClick={handleRefresh}
                  >
                    Refresh
                  </button>
                </div>

                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                  </div>
                ) : error ? (
                  <div className="text-center text-red-500 p-4">{error}</div>
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    {filteredMemories.map((memory) => (
                      memory.imageUrls.map((imageUrl, index) => (
                        <div
                          key={`${memory._id}-${index}`}
                          className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${
                            selectedImages.includes(imageUrl) ? 'ring-2 ring-accent' : ''
                          }`}
                          onClick={() => handleImageSelect(imageUrl)}
                        >
                          <img
                            src={imageUrl}
                            alt={memory.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                            }}
                          />
                          {selectedImages.includes(imageUrl) && (
                            <div className="absolute inset-0 bg-accent bg-opacity-20 flex items-center justify-center">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="col-span-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Collection Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input w-full h-24"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Privacy
                  </label>
                  <select
                    value={privacy}
                    onChange={(e) => setPrivacy(e.target.value)}
                    className="input w-full"
                  >
                    <option value="private">Private</option>
                    <option value="shared">Shared</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={selectedImages.length === 0}
                  >
                    Create Collection
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCollectionPopup; 