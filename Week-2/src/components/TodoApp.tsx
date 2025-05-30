import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import { useTodos } from '../hooks/useTodos';
import { FilterType, SortType } from '../types';
import { Settings } from 'lucide-react';

const TodoApp: React.FC = () => {
  const { 
    todos, 
    addTodo, 
    toggleTodo, 
    deleteTodo,
    pendingCount,
    completedCount,
    totalCount
  } = useTodos();
  
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('newest');
  const [showSettings, setShowSettings] = useState(false);

  const getFilteredAndSortedTodos = () => {
    let filteredTodos = todos;
    
    // Apply filters
    if (filter === 'active') {
      filteredTodos = todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      filteredTodos = todos.filter(todo => todo.completed);
    }
    
    // Apply sorting
    return [...filteredTodos].sort((a, b) => {
      if (sort === 'newest') {
        return b.createdAt - a.createdAt;
      } else if (sort === 'oldest') {
        return a.createdAt - b.createdAt;
      } else if (sort === 'alphabetical') {
        return a.text.localeCompare(b.text);
      }
      return 0;
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all">
      <div className="px-6 py-5 bg-indigo-600 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Task Flow</h1>
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 rounded-lg text-indigo-100 hover:bg-indigo-500 hover:text-white transition-colors"
        >
          <Settings size={20} />
        </button>
      </div>
      
      <div className="p-6">
        <TodoForm onAddTodo={addTodo} />
        
        <div className={`mt-4 overflow-hidden transition-all duration-300 ${showSettings ? 'max-h-40' : 'max-h-0'}`}>
          <TodoFilters 
            filter={filter} 
            onFilterChange={setFilter} 
            sort={sort} 
            onSortChange={setSort} 
          />
        </div>
        
        <div className="mt-6">
          <TodoList 
            todos={getFilteredAndSortedTodos()} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
          />
        </div>
        
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <span>
            {pendingCount} pending, {completedCount} completed
          </span>
          <span>{totalCount} total tasks</span>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;