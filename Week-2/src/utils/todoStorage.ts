import { Todo } from '../types';

const STORAGE_KEY = 'todos-react-app';

export const loadTodos = (): Todo[] => {
  try {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
  }
  return [];
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
};