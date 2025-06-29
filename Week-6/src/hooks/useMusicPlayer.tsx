import { createContext, useContext, useReducer, ReactNode } from 'react';
import { MusicPlayerState, Song } from '../types';

type MusicPlayerAction =
  | { type: 'PLAY_SONG'; payload: { song: Song; queue?: Song[] } }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'NEXT_SONG' }
  | { type: 'PREVIOUS_SONG' }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'SET_PROGRESS'; payload: number }
  | { type: 'TOGGLE_SHUFFLE' }
  | { type: 'TOGGLE_REPEAT' }
  | { type: 'ADD_TO_QUEUE'; payload: Song }
  | { type: 'REMOVE_FROM_QUEUE'; payload: string };

const initialState: MusicPlayerState = {
  currentSong: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  queue: [],
  currentIndex: 0,
  isShuffled: false,
  repeatMode: 'none'
};

const musicPlayerReducer = (state: MusicPlayerState, action: MusicPlayerAction): MusicPlayerState => {
  switch (action.type) {
    case 'PLAY_SONG':
      return {
        ...state,
        currentSong: action.payload.song,
        queue: action.payload.queue || [action.payload.song],
        currentIndex: 0,
        isPlaying: true,
        progress: 0,
        duration: action.payload.song.duration
      };
    
    case 'TOGGLE_PLAY':
      return {
        ...state,
        isPlaying: !state.isPlaying
      };
    
    case 'NEXT_SONG':
      const nextIndex = state.currentIndex + 1;
      const nextSong = state.queue[nextIndex];
      if (nextSong) {
        return {
          ...state,
          currentSong: nextSong,
          currentIndex: nextIndex,
          progress: 0,
          duration: nextSong.duration
        };
      }
      return state;
    
    case 'PREVIOUS_SONG':
      const prevIndex = state.currentIndex - 1;
      const prevSong = state.queue[prevIndex];
      if (prevSong) {
        return {
          ...state,
          currentSong: prevSong,
          currentIndex: prevIndex,
          progress: 0,
          duration: prevSong.duration
        };
      }
      return state;
    
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload
      };
    
    case 'SET_PROGRESS':
      return {
        ...state,
        progress: action.payload
      };
    
    case 'TOGGLE_SHUFFLE':
      return {
        ...state,
        isShuffled: !state.isShuffled
      };
    
    case 'TOGGLE_REPEAT':
      const nextRepeatMode = 
        state.repeatMode === 'none' ? 'all' : 
        state.repeatMode === 'all' ? 'one' : 'none';
      return {
        ...state,
        repeatMode: nextRepeatMode
      };
    
    case 'ADD_TO_QUEUE':
      return {
        ...state,
        queue: [...state.queue, action.payload]
      };
    
    case 'REMOVE_FROM_QUEUE':
      return {
        ...state,
        queue: state.queue.filter(song => song.id !== action.payload)
      };
    
    default:
      return state;
  }
};

const MusicPlayerContext = createContext<{
  state: MusicPlayerState;
  dispatch: React.Dispatch<MusicPlayerAction>;
} | null>(null);

export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(musicPlayerReducer, initialState);

  return (
    <MusicPlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};