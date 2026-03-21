import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import Todolist from './Todolist'

const Todo = () => {
    const [tasks, setTasks] = useState([
        {id: 'task-1', title: 'Задание - 1', isDone: false},
        {id: 'task-2', title: 'Задание - 2', isDone: false}
    ])

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteAllTasks = () => {
        const isConfirmd = confirm('Del All?')
        if (isConfirmd) {
            setTasks([])
        }
    }

    const deletTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }
    
    const toggleTaskComplite = (taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return {...task, isDone}
                }
                return task
        })
        )
    }
    
    const filterTasks = (query) => {
        console.log(`поиск ${query}`)
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }

    return(
    <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm
            addTask={addTask}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
        />
        <SearchTaskForm onSearchInput={filterTasks}/>
        <TodoInfo 
            total={tasks.length} 
            done={tasks.filter(({isDone}) => (isDone)).length}
            onDeleteAllButtonClick={deleteAllTasks}
        />
        <Todolist 
            tasks={tasks}
            onDeletTaskButtonClick={deletTask}
            onTaskCompliteCahge={toggleTaskComplite}
        />
    </div>
    )
}

export default Todo