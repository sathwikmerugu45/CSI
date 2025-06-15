import React from 'react';
import { User, Bell, Shield, Palette, Globe, Database } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { AccentColor } from '../../types';

export function Settings() {
  const { theme, accentColor, setTheme, setAccentColor } = useTheme();

  const accentColors: { value: AccentColor; label: string; color: string }[] = [
    { value: 'indigo', label: 'Indigo', color: 'bg-indigo-500' },
    { value: 'purple', label: 'Purple', color: 'bg-purple-500' },
    { value: 'emerald', label: 'Emerald', color: 'bg-emerald-500' },
    { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
    { value: 'rose', label: 'Rose', color: 'bg-rose-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
            <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Profile Settings</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Title
              </label>
              <input
                type="text"
                defaultValue="System Administrator"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Department
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white">
                <option>Information Technology</option>
                <option>Human Resources</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Appearance</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Theme Preference
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                  theme === 'light'
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                    : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Light</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                    : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="w-6 h-6 bg-gray-800 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Dark</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Accent Color
            </label>
            <div className="flex items-center gap-3">
              {accentColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setAccentColor(color.value)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                    accentColor === color.value
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${color.color}`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{color.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
            <Bell className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Notifications</h3>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Email Notifications', description: 'Receive email updates about your account activity' },
            { label: 'Push Notifications', description: 'Get notified about important updates in real-time' },
            { label: 'Marketing Communications', description: 'Receive updates about new features and products' },
            { label: 'Security Alerts', description: 'Get notified about security-related activities' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">{item.label}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
            <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Security</h3>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <div className="text-left">
              <h4 className="font-medium text-gray-800 dark:text-white">Change Password</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Update your account password</p>
            </div>
            <span className="text-indigo-600 dark:text-indigo-400">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <div className="text-left">
              <h4 className="font-medium text-gray-800 dark:text-white">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security to your account</p>
            </div>
            <span className="text-indigo-600 dark:text-indigo-400">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <div className="text-left">
              <h4 className="font-medium text-gray-800 dark:text-white">Active Sessions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Manage your active login sessions</p>
            </div>
            <span className="text-indigo-600 dark:text-indigo-400">→</span>
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}