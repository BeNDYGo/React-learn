import TodoItem from './TodoItem'

const Todolist = (props) => {
  const {
    tasks = [],
    onDeletTaskButtonClick,
    onTaskCompliteCahge,
    filterdTasks,
  } = props

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
          onDeletTaskButtonClick={onDeletTaskButtonClick}
          onTaskCompliteCahge={onTaskCompliteCahge}
        />
      ))}
    </ul>
  )
}

export default Todolist