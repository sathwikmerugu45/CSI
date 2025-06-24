import React, { useEffect, useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Shuffle, 
  Repeat, 
  Repeat1,
  Heart,
  List,
  Maximize2
} from 'lucide-react';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import { formatTime } from '../utils/formatTime';

const MusicPlayer: React.FC = () => {
  const { state, dispatch } = useMusicPlayer();
  const [isMuted, setIsMuted] = useState(false);
  const [showQueue, setShowQueue] = useState(false);

  useEffect(() => {
    if (state.currentSong && state.isPlaying) {
      const interval = setInterval(() => {
        dispatch({ type: 'SET_PROGRESS', payload: state.progress + 1 });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [state.isPlaying, state.progress, dispatch, state.currentSong]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseInt(e.target.value);
    dispatch({ type: 'SET_PROGRESS', payload: newProgress });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value) / 100;
    dispatch({ type: 'SET_VOLUME', payload: newVolume });
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      dispatch({ type: 'SET_VOLUME', payload: 0.7 });
      setIsMuted(false);
    } else {
      dispatch({ type: 'SET_VOLUME', payload: 0 });
      setIsMuted(true);
    }
  };

  const getRepeatIcon = () => {
    switch (state.repeatMode) {
      case 'one':
        return <Repeat1 className="w-4 h-4" />;
      case 'all':
        return <Repeat className="w-4 h-4 text-green-500" />;
      default:
        return <Repeat className="w-4 h-4" />;
    }
  };

  if (!state.currentSong) {
    return null;
  }

  return (
    <div className="bg-gray-900 border-t border-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Currently Playing */}
        <div className="flex items-center space-x-4 w-1/3">
          <img
            src={state.currentSong.coverUrl}
            alt={state.currentSong.title}
            className="w-14 h-14 rounded object-cover"
          />
          <div className="min-w-0">
            <h3 className="text-white font-medium truncate">{state.currentSong.title}</h3>
            <p className="text-gray-400 text-sm truncate">{state.currentSong.artist}</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 w-1/3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_SHUFFLE' })}
              className={`p-2 rounded-full transition-colors ${
                state.isShuffled ? 'text-green-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => dispatch({ type: 'PREVIOUS_SONG' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {state.isPlaying ? (
                <Pause className="w-5 h-5 text-black" />
              ) : (
                <Play className="w-5 h-5 text-black ml-1" />
              )}
            </button>
            
            <button
              onClick={() => dispatch({ type: 'NEXT_SONG' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => dispatch({ type: 'TOGGLE_REPEAT' })}
              className={`p-2 rounded-full transition-colors ${
                state.repeatMode !== 'none' ? 'text-green-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              {getRepeatIcon()}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full max-w-md">
            <span className="text-xs text-gray-400">{formatTime(state.progress)}</span>
            <input
              type="range"
              min="0"
              max={state.duration}
              value={state.progress}
              onChange={handleProgressChange}
              className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1db954 0%, #1db954 ${(state.progress / state.duration) * 100}%, #4a5568 ${(state.progress / state.duration) * 100}%, #4a5568 100%)`
              }}
            />
            <span className="text-xs text-gray-400">{formatTime(state.duration)}</span>
          </div>
        </div>

        {/* Volume and Queue */}
        <div className="flex items-center space-x-4 w-1/3 justify-end">
          <button
            onClick={() => setShowQueue(!showQueue)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <List className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMuted || state.volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={state.volume * 100}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1db954 0%, #1db954 ${state.volume * 100}%, #4a5568 ${state.volume * 100}%, #4a5568 100%)`
              }}
            />
          </div>
          
          <button className="text-gray-400 hover:text-white transition-colors">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;