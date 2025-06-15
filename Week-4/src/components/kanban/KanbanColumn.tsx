import React from 'react';
import { Plus } from 'lucide-react';
import { Task } from '../../types';
import { KanbanCard } from './KanbanCard';

interface KanbanColumnProps {
  title: string;
  status: string;
  tasks: Task[];
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, status: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onAddTask: () => void;
}

const statusColors = {
  todo: 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600',
  'in-progress': 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  review: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
  done: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
};

export function KanbanColumn({ 
  title, 
  status, 
  tasks, 
  onDragStart, 
  onDragOver, 
  onDrop, 
  onEditTask, 
  onDeleteTask,
  onAddTask 
}: KanbanColumnProps) {
  return (
    <div className="flex flex-col h-full">
      <div className={`p-4 rounded-t-lg border-t border-l border-r ${statusColors[status as keyof typeof statusColors]}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
            <span className="px-2 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full border">
              {tasks.length}
            </span>
          </div>
          <button 
            onClick={onAddTask}
            className="p-1 hover:bg-white dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <div
        className={`flex-1 p-4 space-y-3 border-l border-r border-b rounded-b-lg min-h-[500px] ${statusColors[status as keyof typeof statusColors]}`}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, status)}
      >
        {tasks.map((task) => (
          <KanbanCard 
            key={task.id} 
            task={task} 
            onDragStart={onDragStart}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
        
        {tasks.length === 0 && (
          <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Drop tasks here</p>
          </div>
        )}
      </div>
    </div>
  );
}