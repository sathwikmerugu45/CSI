import React, { useState, useMemo } from 'react';
import { mockSongs, mockPlaylists, mockAlbums, mockGenres } from '../data/mockData';
import SongItem from './SongItem';
import { Play } from 'lucide-react';

interface SearchViewProps {
  searchQuery: string;
  onViewChange: (view: string, id?: string) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ searchQuery, onViewChange }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'songs' | 'playlists' | 'albums'>('all');

  const filteredResults = useMemo(() => {
    if (!searchQuery) return { songs: [], playlists: [], albums: [] };

    const query = searchQuery.toLowerCase();
    
    return {
      songs: mockSongs.filter(song => 
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
      ),
      playlists: mockPlaylists.filter(playlist =>
        playlist.name.toLowerCase().includes(query) ||
        playlist.description.toLowerCase().includes(query)
      ),
      albums: mockAlbums.filter(album =>
        album.title.toLowerCase().includes(query) ||
        album.artist.toLowerCase().includes(query)
      )
    };
  }, [searchQuery]);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'songs', label: 'Songs' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'albums', label: 'Albums' }
  ] as const;

  if (!searchQuery) {
    return (
      <div className="text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Browse all</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockGenres.map((genre, index) => (
            <div
              key={genre}
              className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-4 h-32 cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(135deg, ${
                  ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#ff7675', '#74b9ff'][index % 8]
                } 0%, ${
                  ['#ee5a6f', '#00b894', '#0984e3', '#00b894', '#fdcb6e', '#a29bfe', '#fd79a8', '#6c5ce7'][index % 8]
                } 100%)`
              }}
            >
              <h3 className="text-xl font-bold">{genre}</h3>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-black bg-opacity-20 rounded-full transform translate-x-4 translate-y-4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-white p-6">
      {/* Search Tabs */}
      <div className="flex space-x-6 mb-6 border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-white border-b-2 border-green-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Results */}
      <div className="space-y-8">
        {/* Songs */}
        {(activeTab === 'all' || activeTab === 'songs') && filteredResults.songs.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Songs</h2>
            <div className="space-y-1">
              {filteredResults.songs.slice(0, activeTab === 'songs' ? undefined : 5).map((song, index) => (
                <SongItem
                  key={song.id}
                  song={song}
                  index={index}
                  queue={filteredResults.songs}
                  showImage={true}
                />
              ))}
            </div>
          </section>
        )}

        {/* Playlists */}
        {(activeTab === 'all' || activeTab === 'playlists') && filteredResults.playlists.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Playlists</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredResults.playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="group bg-gray-800 bg-opacity-30 rounded-lg p-4 hover:bg-opacity-50 transition-all cursor-pointer"
                  onClick={() => onViewChange('playlist', playlist.id)}
                >
                  <div className="relative mb-4">
                    <img
                      src={playlist.coverUrl}
                      alt={playlist.name}
                      className="w-full aspect-square rounded-lg object-cover"
                    />
                    <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-all transform translate-y-2 group-hover:translate-y-0">
                      <Play className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                  <h3 className="font-medium truncate mb-2">{playlist.name}</h3>
                  <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Albums */}
        {(activeTab === 'all' || activeTab === 'albums') && filteredResults.albums.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Albums</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredResults.albums.map((album) => (
                <div
                  key={album.id}
                  className="group bg-gray-800 bg-opacity-30 rounded-lg p-4 hover:bg-opacity-50 transition-all cursor-pointer"
                  onClick={() => onViewChange('album', album.id)}
                >
                  <div className="relative mb-4">
                    <img
                      src={album.coverUrl}
                      alt={album.title}
                      className="w-full aspect-square rounded-lg object-cover"
                    />
                    <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-all transform translate-y-2 group-hover:translate-y-0">
                      <Play className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                  <h3 className="font-medium truncate mb-2">{album.title}</h3>
                  <p className="text-gray-400 text-sm truncate">{album.artist}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredResults.songs.length === 0 && filteredResults.playlists.length === 0 && filteredResults.albums.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No results found for "{searchQuery}"</p>
            <p className="text-gray-500 text-sm mt-2">Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;