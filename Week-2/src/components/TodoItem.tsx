import React, { useState } from 'react';
import { Todo } from '../types';
import { Check, Trash2, AlertCircle } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (!showDeleteConfirm) {
      setShowDeleteConfirm(true);
      return;
    }
    
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(todo.id);
      setShowDeleteConfirm(false);
      setIsDeleting(false);
    }, 300);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <li 
      className={`
        bg-white border rounded-lg shadow-sm overflow-hidden
        transition-all duration-300 ease-in-out
        ${isDeleting ? 'transform scale-95 opacity-0' : 'transform scale-100 opacity-100'}
        ${todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-indigo-200'}
      `}
    >
      <div className="p-4 flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={`
            h-6 w-6 rounded-full flex-shrink-0 flex items-center justify-center border
            transition-colors duration-200
            ${todo.completed 
              ? 'bg-emerald-500 border-emerald-500 text-white' 
              : 'border-gray-300 hover:border-indigo-400 text-transparent hover:bg-indigo-50'
            }
          `}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          <Check size={14} className="flex-shrink-0" />
        </button>
        
        <div className="flex-grow">
          <p 
            className={`
              text-gray-800 transition-all duration-200
              ${todo.completed ? 'line-through text-gray-400' : ''}
            `}
          >
            {todo.text}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {formatDate(todo.createdAt)}
          </p>
        </div>
        
        <button
          onClick={handleDelete}
          className={`
            p-2 rounded-full transition-colors duration-200
            ${showDeleteConfirm 
              ? 'bg-rose-100 text-rose-500 hover:bg-rose-200' 
              : 'text-gray-400 hover:text-rose-500 hover:bg-gray-100'
            }
          `}
          aria-label={showDeleteConfirm ? "Confirm delete" : "Delete"}
        >
          {showDeleteConfirm ? <AlertCircle size={18} /> : <Trash2 size={18} />}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;