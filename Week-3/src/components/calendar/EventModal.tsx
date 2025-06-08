import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { Event } from '../../types';

interface EventModalProps {
  event?: Event | null;
  selectedDate: Date;
  onSave: (event: Omit<Event, 'id'>) => void;
  onClose: () => void;
}

const eventTypes = [
  { value: 'meeting', label: 'Meeting', color: 'bg-blue-500' },
  { value: 'deadline', label: 'Deadline', color: 'bg-red-500' },
  { value: 'event', label: 'Event', color: 'bg-green-500' }
];

export function EventModal({ event, selectedDate, onSave, onClose }: EventModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    date: format(selectedDate, 'yyyy-MM-dd'),
    time: '09:00',
    type: 'meeting' as Event['type'],
    color: 'bg-blue-500'
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title,
        date: event.date,
        time: event.time,
        type: event.type,
        color: event.color
      });
    }
  }, [event]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSave(formData);
  };

  const handleTypeChange = (type: Event['type']) => {
    const selectedType = eventTypes.find(t => t.value === type);
    setFormData(prev => ({
      ...prev,
      type,
      color: selectedType?.color || 'bg-blue-500'
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {event ? 'Edit Event' : 'Add New Event'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Event Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Tag className="w-4 h-4 inline mr-1" />
              Event Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => handleTypeChange(type.value as Event['type'])}
                  className={`p-3 rounded-lg border transition-all ${
                    formData.type === type.value
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${type.color} mx-auto mb-1`} />
                  <span className="text-xs text-gray-700 dark:text-gray-300">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              {event ? 'Update' : 'Create'} Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}