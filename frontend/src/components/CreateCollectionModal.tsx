import React, { useState, useEffect } from 'react';

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CollectionData) => void;
  initialData?: CollectionData;
}

interface CollectionData {
  name: string;
  description: string;
  privacy: 'private' | 'shared';
}

const CreateCollectionModal: React.FC<CreateCollectionModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData
}) => {
  const [formData, setFormData] = useState<CollectionData>({
    name: '',
    description: '',
    privacy: 'private'
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', privacy: 'private' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-large p-6 max-w-md w-full mx-4 shadow-large">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary">
            {initialData ? 'Edit Collection' : 'Create New Collection'}
          </h3>
          <button
            className="p-2 hover:bg-gray-100 rounded-md transition-fast"
            onClick={onClose}
          >
            <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="collection-name" className="block text-sm font-medium text-text-primary mb-2">
              Collection Name
            </label>
            <input
              type="text"
              id="collection-name"
              name="name"
              className="input w-full"
              placeholder="Enter collection name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div>
            <label htmlFor="collection-description" className="block text-sm font-medium text-text-primary mb-2">
              Description
            </label>
            <textarea
              id="collection-description"
              name="description"
              rows={3}
              className="input w-full resize-none"
              placeholder="Describe this collection..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Privacy Settings
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="privacy"
                  value="private"
                  className="text-accent focus:ring-accent"
                  checked={formData.privacy === 'private'}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.value as 'private' | 'shared' })}
                />
                <span className="ml-2 text-sm text-text-primary">Private - Only you can see this</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="privacy"
                  value="shared"
                  className="text-accent focus:ring-accent"
                  checked={formData.privacy === 'shared'}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.value as 'private' | 'shared' })}
                />
                <span className="ml-2 text-sm text-text-primary">Shared - Share with family and friends</span>
              </label>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="btn btn-secondary flex-1"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-accent flex-1"
            >
              {initialData ? 'Save Changes' : 'Create Collection'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCollectionModal; 