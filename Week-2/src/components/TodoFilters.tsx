import React from 'react';
import { FilterType, SortType } from '../types';
import { List, CheckCircle, Circle, ClockIcon, MoreVerticalIcon as AlphabeticalSortIcon, CalendarIcon } from 'lucide-react';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  sort: SortType;
  onSortChange: (sort: SortType) => void;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({
  filter,
  onFilterChange,
  sort,
  onSortChange
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Filter</h3>
          <div className="flex flex-wrap gap-2">
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => onFilterChange('all')}
              icon={<List size={14} />}
              label="All"
            />
            <FilterButton 
              active={filter === 'active'} 
              onClick={() => onFilterChange('active')}
              icon={<Circle size={14} />}
              label="Active"
            />
            <FilterButton 
              active={filter === 'completed'} 
              onClick={() => onFilterChange('completed')}
              icon={<CheckCircle size={14} />}
              label="Completed"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Sort</h3>
          <div className="flex flex-wrap gap-2">
            <FilterButton 
              active={sort === 'newest'} 
              onClick={() => onSortChange('newest')}
              icon={<ClockIcon size={14} />}
              label="Newest"
            />
            <FilterButton 
              active={sort === 'oldest'} 
              onClick={() => onSortChange('oldest')}
              icon={<CalendarIcon size={14} />}
              label="Oldest"
            />
            <FilterButton 
              active={sort === 'alphabetical'} 
              onClick={() => onSortChange('alphabetical')}
              icon={<AlphabeticalSortIcon size={14} />}
              label="A-Z"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center px-3 py-1.5 rounded text-sm transition-all
        ${active 
          ? 'bg-indigo-100 text-indigo-700 font-medium' 
          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
        }
      `}
    >
      <span className="mr-1.5">{icon}</span>
      {label}
    </button>
  );
};

export default TodoFilters;