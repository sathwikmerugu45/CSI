import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  color: string;
}

export function MetricsCard({ title, value, change, changeType, icon: Icon, color }: MetricsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">{value}</p>
          <div className="flex items-center mt-3">
            <span className={`text-sm font-medium ${
              changeType === 'positive' 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {changeType === 'positive' ? '+' : ''}{change}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color} group-hover:scale-110 transition-transform duration-200`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}