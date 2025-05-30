import { useState, useEffect } from 'react';
import { Todo } from '../types';
import { loadTodos, saveTodos } from '../utils/todoStorage';
import { v4 as uuidv4 } from '../utils/uuid';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  useEffect(() => {
    const storedTodos = loadTodos();
    setTodos(storedTodos);
  }, []);
  
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);
  
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };
  
  const toggleTodo = (id: string) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  
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