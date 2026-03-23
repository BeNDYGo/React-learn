import { memo } from "react"
import { useContext } from "react"
import { TasksContext } from "../context/TasksContext"

const TodoItem = (props) => {
  console.log('TodoItem')

  const {
    className,
    id,
    title,
    isDone,
  } = props
  const {
    deletTask,
    toggleTaskComplite
  } = useContext(TasksContext)

  return (
      <li className={`todo-item ${className}`}>
        <input
          className="todo-item__checkbox"
          id={id}
          type="checkbox"
          checked={isDone}
          onChange={(event) => {toggleTaskComplite(id, event.target.checked)}}
        />
        <label
          className="todo-item__label"
          htmlFor={id}
        >
          {title}
        </label>
        <button
          className="todo-item__delete-button"
          aria-label="Delete"
          title="Delete"
          onClick={() => {deletTask(id)}}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="#757575"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </li>
  )
}

export default memo(TodoItem)