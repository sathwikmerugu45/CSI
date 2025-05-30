import { useState, useEffect } from 'react';
import { Todo } from '../types';
import { loadTodos, saveTodos } from '../utils/todoStorage';
import { v4 as uuidv4 } from '../utils/uuid';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  // Load todos from localStorage on initial mount
  useEffect(() => {
    const storedTodos = loadTodos();
    setTodos(storedTodos);
  }, []);
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);
  
  // Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };
  
  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  
  // Calculate statistics
  const pendingCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  
  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    pendingCount,
    completedCount,
    totalCount
  };
};