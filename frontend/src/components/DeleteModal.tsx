import React from 'react';
import { Collection } from '../types';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: Collection;
  onDelete: (collectionId: string) => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, collection, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Delete Collection</h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete "{collection.name}"? This action cannot be undone.
        </p>
        
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onDelete(collection.id);
              onClose();
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal; 