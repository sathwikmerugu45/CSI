import React from 'react';
import { Home, Search, Library, Plus, Heart, Music, User } from 'lucide-react';
import { mockPlaylists, mockUser } from '../data/mockData';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string, id?: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { icon: Home, label: 'Home', view: 'home' },
    { icon: Search, label: 'Search', view: 'search' },
    { icon: Library, label: 'Your Library', view: 'library' }
  ];

  return (
    <div className="w-64 bg-black text-white p-6 flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8">
        <Music className="w-8 h-8 text-green-500" />
        <span className="text-xl font-bold">Spotify 2.0</span>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-2 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
              currentView === item.view
                ? 'bg-gray-800 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Create Playlist */}
      <div className="border-t border-gray-800 pt-6 mb-6">
        <button className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create Playlist</span>
        </button>
        <button className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
          <Heart className="w-5 h-5" />
          <span className="font-medium">Liked Songs</span>
        </button>
      </div>

      {/* Playlists */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1">
          {mockPlaylists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => onViewChange('playlist', playlist.id)}
              className="block w-full text-left p-2 rounded text-gray-300 hover:text-white hover:bg-gray-800 transition-colors truncate"
            >
              {playlist.name}
            </button>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="border-t border-gray-800 pt-4">
        <div className="flex items-center space-x-3 p-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="font-medium text-sm">{mockUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;