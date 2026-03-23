import TodoItem from './TodoItem'
import {memo, useContext} from 'react'
import { TasksContext } from '../context/TasksContext'

const Todolist = () => {
  const {
    tasks,
    filterdTasks,
  } = useContext(TasksContext)

  const hasTasks = tasks.length > 0
  const isEmptyFilterdTasks = filterdTasks?.length === 0

  if (!hasTasks){
      return (
        <div className="todo__empty-message">empty</div>
      )
  }

  if (hasTasks && isEmptyFilterdTasks) {
    return (<div className="todo__empty-message">not found</div>)
  }
  

  return (
    <ul className="todo__list">
      {(filterdTasks ?? tasks).map((task) => (
        <TodoItem 
          className='todo__item'
          key={task.id}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
        />
      ))}
    </ul>
  )
}

export default memo(Todolist)