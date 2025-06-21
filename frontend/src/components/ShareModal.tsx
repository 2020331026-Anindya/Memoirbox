import React from 'react';
import { Collection } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: Collection;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, collection }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Share Collection</h2>
        <p className="text-gray-600 mb-4">Share "{collection.name}" with others</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share Link
            </label>
            <div className="flex">
              <input
                type="text"
                readOnly
                value={`${window.location.origin}/collections/${collection.id}`}
                className="flex-1 px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/collections/${collection.id}`);
                }}
                className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-600 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal; 