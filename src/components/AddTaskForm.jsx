import Button from './Button'
import Field from './Field'

const AddTaskForm = (props) => {

    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        ref,
    } = props

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