import { User, Task, Event, TableData, ChartData } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Merugu sathwik',
    email: 'sathwikmerugu69@gmail.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Admin'
  },
  {
    id: '2',
    name: 'Loki',
    email: 'loki@gmail.com', 
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Developer'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design System Update',
    description: 'Update the design system with new components',
    status: 'in-progress',
    priority: 'high',
    assignee: mockUsers[0],
    dueDate: '2024-01-15',
    tags: ['Design', 'UI/UX']
  },
  {
    id: '2',
    title: 'API Integration',
    description: 'Integrate third-party payment API',
    status: 'todo',
    priority: 'medium',
    assignee: mockUsers[1],
    dueDate: '2024-01-20',
    tags: ['Backend', 'API']
  },
  {
    id: '3',
    title: 'User Testing',
    description: 'Conduct user testing sessions',
    status: 'review',
    priority: 'low',
    assignee: mockUsers[0],
    dueDate: '2024-01-10',
    tags: ['Research', 'UX']
  },
  {
    id: '4',
    title: 'Bug Fixes',
    description: 'Fix critical bugs reported by users',
    status: 'done',
    priority: 'high',
    assignee: mockUsers[1],
    dueDate: '2024-01-05',
    tags: ['Development', 'Maintenance']
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: '2024-01-15',
    time: '10:00 AM',
    type: 'meeting',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: '2024-01-20',
    time: '5:00 PM',
    type: 'deadline',
    color: 'bg-red-500'
  },
  {
    id: '3',
    title: 'Conference',
    date: '2024-01-25',
    time: '9:00 AM',
    type: 'event',
    color: 'bg-green-500'
  }
];

export const mockTableData: TableData[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-14',
    actions: 'edit'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Developer',
    status: 'active',
    lastLogin: '2024-01-13',
    actions: 'edit'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'Designer',
    status: 'inactive',
    lastLogin: '2024-01-10',
    actions: 'edit'
  }
];

export const mockChartData: ChartData[] = [
  { name: 'Jan', value: 4000, growth: 12 },
  { name: 'Feb', value: 3000, growth: -5 },
  { name: 'Mar', value: 5000, growth: 18 },
  { name: 'Apr', value: 4500, growth: 8 },
  { name: 'May', value: 6000, growth: 25 },
  { name: 'Jun', value: 5500, growth: 15 }
];

export const revenueData = [
  { name: 'Jan', revenue: 45000, expenses: 32000 },
  { name: 'Feb', revenue: 52000, expenses: 38000 },
  { name: 'Mar', revenue: 48000, expenses: 35000 },
  { name: 'Apr', revenue: 61000, expenses: 42000 },
  { name: 'May', revenue: 55000, expenses: 40000 },
  { name: 'Jun', revenue: 67000, expenses: 45000 }
];