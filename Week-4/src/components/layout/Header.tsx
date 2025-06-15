import React from 'react';
import { Bell, Search, User, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  activeTab: string;
}

const tabTitles: Record<string, string> = {
  dashboard: 'Dashboard Overview',
  tables: 'Data Management',
  charts: 'Analytics & Reports',
  calendar: 'Calendar & Events',
  kanban: 'Project Board',
  settings: 'Settings & Preferences'
};

export function Header({ activeTab }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {tabTitles[activeTab]}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
            />
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLywKWUkmolnoQEJ3yAqHzx-EqxQ9chX48AMCgCCqy-3zCiEx3yjw=s360-c-no"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="hidden md:block text-sm">
              <p className="font-medium text-gray-800 dark:text-white">Merugu Sathwik</p>
              <p className="text-gray-600 dark:text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}