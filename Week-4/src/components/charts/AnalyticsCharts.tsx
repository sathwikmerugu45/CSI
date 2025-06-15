import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';

const salesData = [
  { month: 'Jan', sales: 4000, target: 3500, growth: 14.3 },
  { month: 'Feb', sales: 3000, target: 3200, growth: -6.25 },
  { month: 'Mar', sales: 5000, target: 4000, growth: 25 },
  { month: 'Apr', sales: 4500, target: 4200, growth: 7.1 },
  { month: 'May', sales: 6000, target: 5000, growth: 20 },
  { month: 'Jun', sales: 5500, target: 5200, growth: 5.8 }
];

const trafficData = [
  { hour: '00:00', visitors: 120 },
  { hour: '04:00', visitors: 80 },
  { hour: '08:00', visitors: 320 },
  { hour: '12:00', visitors: 450 },
  { hour: '16:00', visitors: 380 },
  { hour: '20:00', visitors: 290 }
];

const categoryData = [
  { name: 'Electronics', value: 35, color: '#6366f1' },
  { name: 'Clothing', value: 28, color: '#8b5cf6' },
  { name: 'Books', value: 18, color: '#10b981' },
  { name: 'Home & Garden', value: 12, color: '#f59e0b' },
  { name: 'Sports', value: 7, color: '#ef4444' }
];

const regionData = [
  { region: 'North America', revenue: 45000, users: 12000 },
  { region: 'Europe', revenue: 38000, users: 9500 },
  { region: 'Asia Pacific', revenue: 52000, users: 15000 },
  { region: 'Latin America', revenue: 28000, users: 7500 },
  { region: 'Middle East', revenue: 18000, users: 4500 }
];

export function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: '$125,430', change: '+12.5%', positive: true, icon: DollarSign, color: 'bg-green-500' },
          { title: 'Active Users', value: '8,492', change: '+8.2%', positive: true, icon: Users, color: 'bg-blue-500' },
          { title: 'Conversion Rate', value: '3.2%', change: '-2.1%', positive: false, icon: TrendingUp, color: 'bg-purple-500' },
          { title: 'Avg. Order Value', value: '$87.50', change: '+5.7%', positive: true, icon: TrendingUp, color: 'bg-orange-500' }
        ].map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{metric.value}</p>
                <div className="flex items-center mt-2">
                  {metric.positive ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${metric.color}`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sales Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="sales" fill="#6366f1" radius={4} />
              <Bar dataKey="target" fill="#d1d5db" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Website Traffic</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="hour" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area type="monotone" dataKey="visitors" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Regional Performance */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Revenue by Region</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={regionData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis type="category" dataKey="region" stroke="#6b7280" width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="revenue" fill="#8b5cf6" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Top Performing Channel',
              value: 'Organic Search',
              metric: '67% of traffic',
              trend: 'up',
              color: 'text-green-600'
            },
            {
              title: 'Peak Activity Time',
              value: '2:00 PM - 4:00 PM',
              metric: '35% more active',
              trend: 'up',
              color: 'text-blue-600'
            },
            {
              title: 'Bounce Rate',
              value: '24.5%',
              metric: '5% improvement',
              trend: 'down',
              color: 'text-purple-600'
            }
          ].map((insight, index) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">{insight.title}</h4>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{insight.value}</p>
              <p className={`text-sm ${insight.color} mt-1`}>{insight.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}