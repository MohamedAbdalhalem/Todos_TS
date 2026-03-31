import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const {addTodo} = useContext(TodosContext)
  const todoTextRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const todoText = todoTextRef.current?.value ?? "";
    const trimmed = todoText.trim();
    if (!trimmed) return;

    addTodo(trimmed);

    // Clear for a smoother "add many todos" workflow.
    if (todoTextRef.current) todoTextRef.current.value = "";
  }
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="todoField">
        <label className="todoLabel" htmlFor="text">
          Todo text
        </label>
        <input
          className="todoInput"
          type="text"
          id="text"
          ref={todoTextRef}
          placeholder="e.g. Buy milk"
          autoComplete="off"
        />
      </div>
      <button className="todoButton" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
