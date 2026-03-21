import TodoItem from './TodoItem'

const Todolist = (props) => {
  const {
    tasks = [],
    onDeletTaskButtonClick,
    onTaskCompliteCahge,
  } = props

  const hasTasks = true

  if (!hasTasks){
      return (
          <div className="todo__empty-message"></div>
      )
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
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