import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { User, Task, Event, TableData } from '../types';
import { mockUsers, mockTasks, mockEvents, mockTableData } from '../data/mockData';

interface DataContextType {
  // Users
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  
  // Tasks
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  
  // Events
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  
  // Table Data
  tableData: TableData[];
  addTableData: (data: Omit<TableData, 'id'>) => void;
  updateTableData: (id: string, data: Partial<TableData>) => void;
  deleteTableData: (id: string) => void;
  
  // Utility
  resetAllData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useLocalStorage<User[]>('admin-dashboard-users', mockUsers);
  const [tasks, setTasks] = useLocalStorage<Task[]>('admin-dashboard-tasks', mockTasks);
  const [events, setEvents] = useLocalStorage<Event[]>('admin-dashboard-events', mockEvents);
  const [tableData, setTableData] = useLocalStorage<TableData[]>('admin-dashboard-table-data', mockTableData);

  // Generate unique ID
  const generateId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);

  // User operations
  const addUser = (user: Omit<User, 'id'>) => {
    const newUser = { ...user, id: generateId() };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = (id: string, updatedUser: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updatedUser } : user
    ));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  // Task operations
  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask = { ...task, id: generateId() };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Event operations
  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent = { ...event, id: generateId() };
    setEvents(prev => [...prev, newEvent]);
  };

  const updateEvent = (id: string, updatedEvent: Partial<Event>) => {
    setEvents(prev => prev.map(event => 
      event.id === id ? { ...event, ...updatedEvent } : event
    ));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  // Table data operations
  const addTableData = (data: Omit<TableData, 'id'>) => {
    const newData = { ...data, id: generateId() };
    setTableData(prev => [...prev, newData]);
  };

  const updateTableData = (id: string, updatedData: Partial<TableData>) => {
    setTableData(prev => prev.map(data => 
      data.id === id ? { ...data, ...updatedData } : data
    ));
  };

  const deleteTableData = (id: string) => {
    setTableData(prev => prev.filter(data => data.id !== id));
  };

  // Reset all data to initial state
  const resetAllData = () => {
    setUsers(mockUsers);
    setTasks(mockTasks);
    setEvents(mockEvents);
    setTableData(mockTableData);
  };

  return (
    <DataContext.Provider value={{
      users, addUser, updateUser, deleteUser,
      tasks, addTask, updateTask, deleteTask,
      events, addEvent, updateEvent, deleteEvent,
      tableData, addTableData, updateTableData, deleteTableData,
      resetAllData
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}