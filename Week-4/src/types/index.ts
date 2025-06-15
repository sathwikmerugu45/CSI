export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: User;
  dueDate: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'deadline' | 'event';
  color: string;
}

export interface TableData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  actions: string;
}

export interface ChartData {
  name: string;
  value: number;
  growth?: number;
}

export type Theme = 'light' | 'dark';
export type AccentColor = 'indigo' | 'purple' | 'emerald' | 'blue' | 'rose';