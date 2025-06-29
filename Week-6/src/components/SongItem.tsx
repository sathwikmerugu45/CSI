import React from 'react';
import { Play, Pause, MoreHorizontal } from 'lucide-react';
import { Song } from '../types';
import { formatTime } from '../utils/formatTime';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

interface SongItemProps {
  song: Song;
  index: number;
  isCompact?: boolean;
  showImage?: boolean;
  queue?: Song[];
}

const SongItem: React.FC<SongItemProps> = ({ 
  song, 
  index, 
  isCompact = false, 
  showImage = true,
  queue = []
}) => {
  const { state, dispatch } = useMusicPlayer();
  const isCurrentSong = state.currentSong?.id === song.id;
  const isPlaying = state.isPlaying && isCurrentSong;

  const handlePlay = () => {
    if (isCurrentSong) {
      dispatch({ type: 'TOGGLE_PLAY' });
    } else {
      dispatch({ 
        type: 'PLAY_SONG', 
        payload: { song, queue: queue.length > 0 ? queue : [song] }
      });
    }
  };

  return (
    <div className={`group flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 transition-all ${
      isCurrentSong ? 'bg-gray-800 bg-opacity-30' : ''
    }`}>
      {/* Index/Play Button */}
      <div className="w-8 flex items-center justify-center">
        <span className={`text-sm text-gray-400 group-hover:hidden ${isCurrentSong ? 'text-green-500' : ''}`}>
          {index + 1}
        </span>
        <button
          onClick={handlePlay}
          className="hidden group-hover:block p-1 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>
      </div>

      {/* Song Info */}
      <div className="flex items-center space-x-3 flex-1 min-w-0">
        {showImage && (
          <img
            src={song.coverUrl}
            alt={song.title}
            className="w-10 h-10 rounded object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
          <h3 className={`font-medium truncate ${isCurrentSong ? 'text-green-500' : 'text-white'}`}>
            {song.title}
          </h3>
          <p className="text-gray-400 text-sm truncate">{song.artist}</p>
        </div>
      </div>

      {/* Album (if not compact) */}
      {!isCompact && (
        <div className="flex-1 min-w-0 hidden md:block">
          <p className="text-gray-400 text-sm truncate">{song.album}</p>
        </div>
      )}

      {/* Duration */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-400 text-sm">{formatTime(song.duration)}</span>
        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-700 rounded-full transition-all">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SongItem;