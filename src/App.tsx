
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

import TodosContextProvider from './store/todo-context';

function App() {
  
  return (  
    <TodosContextProvider>
    <div className="app">
      <header className="appHeader">
        <h1>Todo List</h1>
        <p>Write it down. Check it off. Stay focused.</p>
      </header>

      <section className="todoPanel" aria-label="Todo panel">
        <NewTodo  />
        <Todos  />
      </section>
      </div>
      </TodosContextProvider>
  );
}

export default App;
