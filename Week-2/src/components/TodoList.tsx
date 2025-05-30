import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';
import { ClipboardList } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-500">
        <ClipboardList size={48} className="text-indigo-200 mb-4" />
        <p className="text-lg font-medium">No tasks found</p>
        <p className="text-sm">Add a new task to get started</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default TodoList;