import React, { useState } from 'react';
import { MusicPlayerProvider } from './hooks/useMusicPlayer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentId, setCurrentId] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState<string[]>(['home']);
  const [historyIndex, setHistoryIndex] = useState(0);

  const handleViewChange = (view: string, id?: string) => {
    const newView = id ? `${view}:${id}` : view;
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newView);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setCurrentView(view);
    setCurrentId(id);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      const [view, id] = history[newIndex].split(':');
      setHistoryIndex(newIndex);
      setCurrentView(view);
      setCurrentId(id);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      const [view, id] = history[newIndex].split(':');
      setHistoryIndex(newIndex);
      setCurrentView(view);
      setCurrentId(id);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query && currentView !== 'search') {
      handleViewChange('search');
    }
  };

  return (
    <MusicPlayerProvider>
      <div className="h-screen bg-black flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar 
            currentView={currentView}
            onViewChange={handleViewChange}
          />
          <div className="flex-1 flex flex-col">
            <Header
              onSearch={handleSearch}
              canGoBack={historyIndex > 0}
              canGoForward={historyIndex < history.length - 1}
              onBack={handleBack}
              onForward={handleForward}
            />
            <MainContent
              currentView={currentView}
              currentId={currentId}
              searchQuery={searchQuery}
              onViewChange={handleViewChange}
            />
          </div>
        </div>
        <MusicPlayer />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;