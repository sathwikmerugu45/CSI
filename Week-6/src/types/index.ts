export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
  genre: string;
  releaseDate: string;
  popularity: number;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  releaseDate: string;
  genre: string;
  songs: Song[];
  totalDuration: number;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
  createdBy: string;
  isPublic: boolean;
  totalDuration: number;
  followerCount: number;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genres: string[];
  followerCount: number;
  albums: Album[];
  topSongs: Song[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  playlists: Playlist[];
  likedSongs: Song[];
  recentlyPlayed: Song[];
}

export interface MusicPlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  queue: Song[];
  currentIndex: number;
  isShuffled: boolean;
  repeatMode: 'none' | 'one' | 'all';
}

export type ViewType = 'home' | 'search' | 'library' | 'playlist' | 'album' | 'artist' | 'genre';