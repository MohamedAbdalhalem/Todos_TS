import React, { createContext, useState } from 'react';
import Todo from '../models/todo';

type TodosContextData = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (todoId: string) => void;
};

type TodosContextProviderProps = {
  children: React.ReactNode;
};

export const TodosContext = createContext<TodosContextData>({
  items: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodosContextProvider: React.FC<TodosContextProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddNewTodo(todoText: string) {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  }

  function handleDeleteTodo(todoId: string) {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  }

  const contextValue: TodosContextData = {
    items: todos,
    addTodo: handleAddNewTodo,
    deleteTodo: handleDeleteTodo,
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
