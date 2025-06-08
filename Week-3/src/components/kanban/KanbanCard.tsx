import React from 'react';
import { Calendar, Tag, Clock, Edit2, Trash2 } from 'lucide-react';
import { Task } from '../../types';
import { format } from 'date-fns';

interface KanbanCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export function KanbanCard({ task, onDragStart, onEdit, onDelete }: KanbanCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 cursor-move group"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {task.title}
        </h4>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(task);
            }}
            className="p-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <Edit2 className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task.id);
            }}
            className="p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="flex items-start justify-between mb-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {task.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {task.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs rounded-md"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <img
            src={task.assignee.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(task.assignee.name)}&background=6366f1&color=fff`}
            alt={task.assignee.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>{task.assignee.name}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{format(new Date(task.dueDate), 'MMM d')}</span>
        </div>
      </div>
    </div>
  );
}