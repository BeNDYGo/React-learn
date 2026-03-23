import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import Todolist from './Todolist'
import { TasksContext } from '../context/TasksContext'

const Todo = () => {
    return(
        <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm />
        <SearchTaskForm/>
        <TodoInfo />
        <Todolist />
    </div>
    )
}

export default Todo