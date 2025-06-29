import React from 'react';
import { mockPlaylists } from '../data/mockData';
import HomeView from './HomeView';
import SearchView from './SearchView';
import PlaylistView from './PlaylistView';

interface MainContentProps {
  currentView: string;
  currentId?: string;
  searchQuery: string;
  onViewChange: (view: string, id?: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ 
  currentView, 
  currentId, 
  searchQuery, 
  onViewChange 
}) => {
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onViewChange={onViewChange} />;
      
      case 'search':
        return <SearchView searchQuery={searchQuery} onViewChange={onViewChange} />;
      
      case 'playlist':
        const playlist = mockPlaylists.find(p => p.id === currentId);
        return playlist ? <PlaylistView playlist={playlist} /> : <HomeView onViewChange={onViewChange} />;
      
      case 'library':
        return (
          <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-6">Your Library</h1>
            <div className="space-y-4">
              {mockPlaylists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer"
                  onClick={() => onViewChange('playlist', playlist.id)}
                >
                  <img
                    src={playlist.coverUrl}
                    alt={playlist.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{playlist.name}</h3>
                    <p className="text-gray-400 text-sm">{playlist.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <HomeView onViewChange={onViewChange} />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
      {renderContent()}
    </div>
  );
};

export default MainContent;