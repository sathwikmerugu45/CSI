import React from 'react';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 flex flex-col items-center py-8 px-4">
      <TodoApp />
    </div>
  );
}

export default App;