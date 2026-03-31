import React, { useContext } from 'react'
import Todo from '../models/todo'
import { TodosContext } from '../store/todo-context'

const Item: React.FC<{ item: Todo }> = (props) => {
  const {deleteTodo} = useContext(TodosContext)
  return (
    <li className="todoItem">
      <span className="todoItemText">{props.item.text}</span>
      <div className="todoItemActions">
        <button
          className="todoDeleteButton"
          type="button"
          aria-label={`Delete todo: ${props.item.text}`}
          onClick={ () => deleteTodo(props.item.id) }
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Item
