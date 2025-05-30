import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
        const trimmedText = text.trim();
    if (!trimmedText) {
      setError('Task cannot be empty');
      return;
    }
    
    if (trimmedText.length < 3) {
      setError('Task must be at least 3 characters');
      return;
    }
    
    if (trimmedText.length > 100) {
      setError('Task must be less than 100 characters');
      return;
    }
    
    onAddTodo(trimmedText);
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex rounded-lg overflow-hidden border border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError('');
          }}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-3 outline-none"
          maxLength={100}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 flex items-center justify-center hover:bg-indigo-700 transition-colors"
          aria-label="Add task"
        >
          <Plus size={20} />
        </button>
      </div>
      
      {error && (
        <p className="text-rose-500 text-sm mt-2 animate-fadeIn">
          {error}
        </p>
      )}
      
      <p className="text-xs text-gray-400 mt-2">
        {text.length}/100 characters
      </p>
    </form>
  );
};

export default TodoForm;