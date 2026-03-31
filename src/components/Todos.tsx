import React, { useContext } from 'react'

import Item from './Item'
import { TodosContext } from '../store/todo-context'

const Todos: React.FC = () => {
  const {items} = useContext(TodosContext)
  if (items.length === 0) {
    return <p className="emptyState">No todos yet. Add one above.</p>;
  }
  return (
    <ul className="todoList">
          {items.map(item => (<Item  key={item.id} item={item}/>))}
    </ul>
  )
}

export default Todos
