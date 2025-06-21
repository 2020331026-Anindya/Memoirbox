import React from 'react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange?: (filters: any) => void;
}

type CollectionType = 'Family Moments' | 'Travel Adventures' | 'Celebrations';
type FileType = 'Photos' | 'Videos' | 'Documents';

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose, onFilterChange }) => {
  const [dateRange, setDateRange] = React.useState({
    from: '',
    to: ''
  });

  const [collections, setCollections] = React.useState<Record<CollectionType, boolean>>({
    'Family Moments': false,
    'Travel Adventures': false,
    'Celebrations': false
  });

  const [fileTypes, setFileTypes] = React.useState<Record<FileType, boolean>>({
    'Photos': false,
    'Videos': false,
    'Documents': false
  });

  if (!isOpen) return null;

  const handleReset = () => {
    setDateRange({ from: '', to: '' });
    setCollections({
      'Family Moments': false,
      'Travel Adventures': false,
      'Celebrations': false
    });
    setFileTypes({
      'Photos': false,
      'Videos': false,
      'Documents': false
    });
    onFilterChange?.({});
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative w-80 bg-white h-full shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <div className="space-y-3">
                <input
                  type="date"
                  value={dateRange.from}
                  onChange={(e) => {
                    const newDateRange = { ...dateRange, from: e.target.value };
                    setDateRange(newDateRange);
                    onFilterChange?.(newDateRange);
                  }}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <input
                  type="date"
                  value={dateRange.to}
                  onChange={(e) => {
                    const newDateRange = { ...dateRange, to: e.target.value };
                    setDateRange(newDateRange);
                    onFilterChange?.(newDateRange);
                  }}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collections
              </label>
              <div className="space-y-2">
                {Object.entries(collections).map(([collection, isChecked]) => (
                  <label key={collection} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        const newCollections = {
                          ...collections,
                          [collection]: e.target.checked
                        };
                        setCollections(newCollections);
                        onFilterChange?.(newCollections);
                      }}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-sm text-gray-700">{collection}</span>
                    <span className="ml-auto text-xs text-secondary-400">(24)</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File Types
              </label>
              <div className="space-y-2">
                {Object.entries(fileTypes).map(([fileType, isChecked]) => (
                  <label key={fileType} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        const newFileTypes = {
                          ...fileTypes,
                          [fileType]: e.target.checked
                        };
                        setFileTypes(newFileTypes);
                        onFilterChange?.(newFileTypes);
                      }}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-sm text-gray-700">{fileType}</span>
                    <span className="ml-auto text-xs text-secondary-400">(42)</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {['family', 'vacation', 'birthday', 'wedding', 'holiday'].map(tag => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-fast"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              {/* Add location filter */}
            </div>
          </div>
        </div>

        <div className="p-4 border-t">
          <button
            onClick={handleReset}
            className="w-full px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 