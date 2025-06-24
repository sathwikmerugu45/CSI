import React from 'react';
import { Play } from 'lucide-react';
import { mockPlaylists, mockSongs, mockAlbums } from '../data/mockData';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

interface HomeViewProps {
  onViewChange: (view: string, id?: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onViewChange }) => {
  const { dispatch } = useMusicPlayer();

  const handlePlayPlaylist = (playlistId: string) => {
    const playlist = mockPlaylists.find(p => p.id === playlistId);
    if (playlist && playlist.songs.length > 0) {
      dispatch({ 
        type: 'PLAY_SONG', 
        payload: { song: playlist.songs[0], queue: playlist.songs }
      });
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="text-white p-6">
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-8">{getGreeting()}</h1>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {mockPlaylists.slice(0, 6).map((playlist) => (
          <div
            key={playlist.id}
            className="group bg-gray-800 bg-opacity-50 rounded-lg p-4 hover:bg-opacity-70 transition-all cursor-pointer"
            onClick={() => onViewChange('playlist', playlist.id)}
          >
            <div className="flex items-center space-x-4">
              <img
                src={playlist.coverUrl}
                alt={playlist.name}
                className="w-16 h-16 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{playlist.name}</h3>
                <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayPlaylist(playlist.id);
                }}
                className="opacity-0 group-hover:opacity-100 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-all"
              >
                <Play className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Made for You */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Made for You</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {mockPlaylists.map((playlist) => (
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPlaylist(playlist.id);
                  }}
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-all transform translate-y-2 group-hover:translate-y-0"
                >
                  <Play className="w-5 h-5 ml-1" />
                </button>
              </div>
              <h3 className="font-medium truncate mb-2">{playlist.name}</h3>
              <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {mockAlbums.map((album) => (
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

      {/* Popular Artists */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {['The Weeknd', 'Harry Styles', 'Dua Lipa', 'Olivia Rodrigo', 'Lizzo'].map((artist, index) => (
            <div
              key={artist}
              className="group bg-gray-800 bg-opacity-30 rounded-lg p-4 hover:bg-opacity-50 transition-all cursor-pointer"
            >
              <div className="relative mb-4">
                <img
                  src={mockSongs[index]?.coverUrl || 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300'}
                  alt={artist}
                  className="w-full aspect-square rounded-full object-cover"
                />
                <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-all transform translate-y-2 group-hover:translate-y-0">
                  <Play className="w-5 h-5 ml-1" />
                </button>
              </div>
              <h3 className="font-medium truncate mb-2">{artist}</h3>
              <p className="text-gray-400 text-sm">Artist</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;