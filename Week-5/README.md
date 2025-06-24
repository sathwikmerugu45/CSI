A Modern Music Streaming Application built using React + TypeScript, featuring:

✅ Advanced Music Player with Queue Management

✅ Dynamic Playlist Creation & Management

✅ Real-time Search with Smart Filtering

✅ Album & Artist Discovery

✅ Genre-based Music Exploration

✅ Recently Played & Favorites Tracking

✅ Responsive Design & Smooth Animations

✅ Professional UI/UX with Dark Theme

🚀 Project Setup & Installation
1️⃣ Clone the Repository

git clone <your-repository-url>
cd spotify-2.0-clone
2️⃣ Install Dependencies

npm install
3️⃣ Run Development Server

npm run dev
Visit: http://localhost:5173

4️⃣ Build for Production

npm run build
🗂 Project Structure & Code Explanation

src/
├── components/
│   ├── Header.tsx           # Navigation header with search & user controls
│   ├── Sidebar.tsx          # Main navigation sidebar with playlists
│   ├── MainContent.tsx      # Content router for different views
│   ├── MusicPlayer.tsx      # Bottom music player with full controls
│   ├── HomeView.tsx         # Home dashboard with recommendations
│   ├── SearchView.tsx       # Search interface with filtering
│   ├── PlaylistView.tsx     # Detailed playlist view with song list
│   ├── SongItem.tsx         # Individual song component with play controls
│
├── hooks/
│   ├── useMusicPlayer.tsx   # Music player state management
│
├── data/
│   ├── mockData.ts          # Mock music data (songs, albums, playlists)
│
├── types/
│   ├── index.ts             # TypeScript interfaces & types
│
├── utils/
│   ├── formatTime.ts        # Time formatting utilities
│
├── App.tsx                  # Root App Component with routing logic
├── main.tsx                 # Entry Point
🛠️ Logic & Implementation
1️⃣ Music Player State Management
useMusicPlayer.tsx manages the global music player state using React Context and useReducer:

Current song playback and queue management
Play/pause, next/previous, shuffle, and repeat controls
Volume control and progress tracking
Queue manipulation (add/remove songs)
2️⃣ Navigation & Layout
App.tsx handles view routing with history management:

Browser-like back/forward navigation
Dynamic view switching (Home, Search, Library, Playlists)
URL-like routing with view parameters
Sidebar.tsx provides main navigation:

Quick access to Home, Search, and Library
Dynamic playlist listing
User profile section
3️⃣ Music Discovery
HomeView.tsx displays personalized content:

Time-based greetings (Good morning/afternoon/evening)
Quick access to recently played playlists
"Made for You" recommendations
Popular artists with circular profile images
SearchView.tsx offers comprehensive search:

Real-time search with debounced input
Tabbed filtering (All, Songs, Playlists, Albums)
Genre browsing with colorful cards
Smart result categorization
4️⃣ Playlist Management
PlaylistView.tsx shows detailed playlist information:

Large cover art with gradient backgrounds
Comprehensive metadata (duration, song count, creator)
Interactive song list with play controls
Playlist-wide play/pause functionality
5️⃣ Music Player Controls
MusicPlayer.tsx provides full playback control:

Play/pause with visual feedback
Progress bar with seek functionality
Volume control with mute toggle
Shuffle and repeat modes (none/all/one)
Currently playing song information
6️⃣ Song Interaction
SongItem.tsx handles individual song display:

Hover effects with play button overlay
Current song highlighting
Context menu for additional actions
Responsive layout for different view contexts
7️⃣ Data Management
mockData.ts provides realistic music data:

Comprehensive song metadata (title, artist, album, duration, genre)
Curated playlists with descriptions and follower counts
Album information with release dates
User profile data with preferences
8️⃣ Utility Functions
formatTime.ts handles time formatting:

Seconds to MM:SS conversion for song durations
Human-readable duration formatting (hours/minutes)
🎨 Design Features
Visual Design
Dark Theme: Professional Spotify-inspired color scheme
Gradient Backgrounds: Dynamic gradients for headers and cards
Glass Morphism: Subtle transparency effects for modern look
Hover States: Interactive feedback on all clickable elements
Animations & Interactions
Smooth Transitions: CSS transitions for all state changes
Micro-interactions: Button hover effects and loading states
Progressive Disclosure: Context-sensitive controls and information
Responsive Layout: Optimized for desktop, tablet, and mobile
Typography & Spacing
Consistent Hierarchy: Clear visual hierarchy with proper font weights
8px Grid System: Consistent spacing throughout the interface
Readable Contrast: WCAG-compliant color contrast ratios
Truncation Handling: Proper text overflow management
🧩 Technologies Used
React + TypeScript for type-safe component development
Vite for fast development and optimized builds
Tailwind CSS for utility-first styling and responsive design
Lucide React for consistent iconography
React Context API for global state management
CSS Grid & Flexbox for advanced layouts
CSS Custom Properties for dynamic theming
🎵 Features Breakdown
Core Music Features
Playback Control: Play, pause, skip, shuffle, repeat
Queue Management: Dynamic song queuing and reordering
Volume Control: Adjustable volume with mute functionality
Progress Tracking: Seekable progress bar with time display
Discovery & Organization
Smart Search: Real-time search across songs, albums, and playlists
Genre Exploration: Curated genre categories with visual cards
Playlist Management: Create, edit, and organize custom playlists
Recently Played: Track and display listening history
User Experience
Responsive Design: Seamless experience across all device sizes
Keyboard Navigation: Full keyboard accessibility support
Loading States: Smooth loading indicators and skeleton screens
Error Handling: Graceful error states and user feedback