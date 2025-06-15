import React from 'react';
import { MetricsCard } from './MetricsCard';
import { Users, DollarSign, TrendingUp, ShoppingBag, Calendar, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useData } from '../../contexts/DataContext';
import { revenueData } from '../../data/mockData';

const pieData = [
  { name: 'Desktop', value: 68, color: '#6366f1' },
  { name: 'Mobile', value: 25, color: '#8b5cf6' },
  { name: 'Tablet', value: 7, color: '#10b981' }
];

export function DashboardOverview() {
  const { users, tasks, events, tableData } = useData();

  const metrics = [
    {
      title: 'Total Users',
      value: tableData.length.toString(),
      change: '12.5%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Tasks',
      value: tasks.filter(t => t.status !== 'done').length.toString(),
      change: '8.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Completed Tasks',
      value: tasks.filter(t => t.status === 'done').length.toString(),
      change: '3.1%',
      changeType: 'negative' as const,
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Total Events',
      value: events.length.toString(),
      change: '15.3%',
      changeType: 'positive' as const,
      icon: ShoppingBag,
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New user registered', time: '5 minutes ago', type: 'user' },
    { id: 2, action: 'Task completed', time: '12 minutes ago', type: 'task' },
    { id: 3, action: 'Event created', time: '1 hour ago', type: 'event' },
    { id: 4, action: 'User updated', time: '2 hours ago', type: 'user' }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#6366f1" radius={4} />
              <Bar dataKey="expenses" fill="#ef4444" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Device Usage */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Device Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'task' ? 'bg-green-500' :
                  activity.type === 'event' ? 'bg-purple-500' : 'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-gray-800 dark:text-white font-medium">{activity.action}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">Add New User</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors group">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">Create Task</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">Schedule Event</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}