import { useContext } from 'react'
import Button from './Button'
import Field from './Field'
import { TasksContext } from '../context/TasksContext'

const AddTaskForm = () => {

    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        ref,
    } = useContext(TasksContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }
    return (
        <form className="todo__form" onSubmit={(event) => {onSubmit(event)}}>
            <Field 
                className="todo__field"
                lable="New task title"
                id="new-task"
                value={newTaskTitle}
                onInput={(event) => {setNewTaskTitle(event.target.value)}}
                ref={ref}
            />
            <Button type="submit"> Add </Button>
      </form>
    )
}

export default AddTaskForm