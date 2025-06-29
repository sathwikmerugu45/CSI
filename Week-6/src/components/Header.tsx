import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, User, Bell, Settings } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: () => void;
  onForward: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onSearch, 
  canGoBack, 
  canGoForward, 
  onBack, 
  onForward 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 flex items-center justify-between">
      {/* Navigation */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={onBack}
            disabled={!canGoBack}
            className={`p-2 rounded-full transition-colors ${
              canGoBack 
                ? 'bg-black bg-opacity-70 hover:bg-opacity-80' 
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onForward}
            disabled={!canGoForward}
            className={`p-2 rounded-full transition-colors ${
              canGoForward 
                ? 'bg-black bg-opacity-70 hover:bg-opacity-80' 
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-white text-black pl-10 pr-4 py-2 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-black bg-opacity-70 hover:bg-opacity-80 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full bg-black bg-opacity-70 hover:bg-opacity-80 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <button className="flex items-center space-x-2 bg-black bg-opacity-70 hover:bg-opacity-80 transition-colors rounded-full p-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </button>
      </div>
    </header>
  );
};

export default Header;