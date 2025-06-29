import React from 'react';
import { Play, Pause, MoreHorizontal, Clock } from 'lucide-react';
import { Playlist } from '../types';
import { formatDuration } from '../utils/formatTime';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import SongItem from './SongItem';

interface PlaylistViewProps {
  playlist: Playlist;
}

const PlaylistView: React.FC<PlaylistViewProps> = ({ playlist }) => {
  const { state, dispatch } = useMusicPlayer();
  const isPlayingPlaylist = playlist.songs.some(song => song.id === state.currentSong?.id);

  const handlePlayPlaylist = () => {
    if (isPlayingPlaylist) {
      dispatch({ type: 'TOGGLE_PLAY' });
    } else {
      dispatch({ 
        type: 'PLAY_SONG', 
        payload: { song: playlist.songs[0], queue: playlist.songs }
      });
    }
  };

  return (
    <div className="text-white p-6">
      {/* Playlist Header */}
      <div className="flex items-end space-x-6 mb-8">
        <img
          src={playlist.coverUrl}
          alt={playlist.name}
          className="w-60 h-60 rounded-lg shadow-2xl"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-300">Playlist</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 truncate">{playlist.name}</h1>
          <p className="text-gray-300 mb-4">{playlist.description}</p>
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span className="font-medium">{playlist.createdBy}</span>
            <span>•</span>
            <span>{playlist.songs.length} songs</span>
            <span>•</span>
            <span>{formatDuration(playlist.totalDuration)}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-6 mb-8">
        <button
          onClick={handlePlayPlaylist}
          className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-colors"
        >
          {isPlayingPlaylist && state.isPlaying ? 
            <Pause className="w-6 h-6" /> : 
            <Play className="w-6 h-6 ml-1" />
          }
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Song List Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-800 mb-4">
        <div className="col-span-1">#</div>
        <div className="col-span-5">TITLE</div>
        <div className="col-span-3 hidden md:block">ALBUM</div>
        <div className="col-span-2 hidden md:block">DATE ADDED</div>
        <div className="col-span-1 flex justify-end">
          <Clock className="w-4 h-4" />
        </div>
      </div>

      {/* Songs */}
      <div className="space-y-1">
        {playlist.songs.map((song, index) => (
          <SongItem
            key={song.id}
            song={song}
            index={index}
            queue={playlist.songs}
            showImage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistView;