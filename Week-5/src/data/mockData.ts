import { Song, Album, Playlist, Artist, User } from '../types';

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: 200,
    coverUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    releaseDate: '2019-11-29',
    popularity: 95
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: 174,
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    releaseDate: '2020-05-15',
    popularity: 89
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: 203,
    coverUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    releaseDate: '2020-03-27',
    popularity: 92
  },
  {
    id: '4',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: 178,
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop Rock',
    releaseDate: '2021-05-14',
    popularity: 87
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'Stay',
    duration: 141,
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    releaseDate: '2021-07-09',
    popularity: 91
  },
  {
    id: '6',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    duration: 238,
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Indie Pop',
    releaseDate: '2020-06-29',
    popularity: 85
  },
  {
    id: '7',
    title: 'As It Was',
    artist: 'Harry Styles',
    album: "Harry's House",
    duration: 167,
    coverUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    releaseDate: '2022-04-01',
    popularity: 94
  },
  {
    id: '8',
    title: 'About Damn Time',
    artist: 'Lizzo',
    album: 'Special',
    duration: 193,
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    releaseDate: '2022-04-14',
    popularity: 88
  }
];

export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'After Hours',
    artist: 'The Weeknd',
    coverUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300',
    releaseDate: '2020-03-20',
    genre: 'Pop',
    songs: [mockSongs[0]],
    totalDuration: 3360
  },
  {
    id: '2',
    title: 'Fine Line',
    artist: 'Harry Styles',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    releaseDate: '2019-12-13',
    genre: 'Pop',
    songs: [mockSongs[1]],
    totalDuration: 2760
  },
  {
    id: '3',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    coverUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    releaseDate: '2020-03-27',
    genre: 'Pop',
    songs: [mockSongs[2]],
    totalDuration: 2220
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The most played songs right now',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    songs: mockSongs.slice(0, 5),
    createdBy: 'Spotify',
    isPublic: true,
    totalDuration: 896,
    followerCount: 28500000
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Perfect for relaxing and unwinding',
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    songs: mockSongs.slice(2, 6),
    createdBy: 'Spotify',
    isPublic: true,
    totalDuration: 760,
    followerCount: 12300000
  },
  {
    id: '3',
    name: 'My Favorites',
    description: 'Your personal collection of favorite tracks',
    coverUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    songs: [mockSongs[0], mockSongs[2], mockSongs[4]],
    createdBy: 'You',
    isPublic: false,
    totalDuration: 544,
    followerCount: 0
  }
];

export const mockGenres = [
  'Pop', 'Rock', 'Hip Hop', 'Electronic', 'Jazz', 'Classical', 
  'Country', 'R&B', 'Indie', 'Alternative', 'Folk', 'Reggae'
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  profileImage: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100',
  playlists: mockPlaylists,
  likedSongs: mockSongs.slice(0, 3),
  recentlyPlayed: mockSongs.slice(0, 4)
};