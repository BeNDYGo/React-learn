import { useState, useEffect } from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import Todolist from './Todolist'

const Todo = () => {
    const [tasks, setTasks] = useState(() => {
        const saveTasks = localStorage.getItem('tasks')
        if (saveTasks) {
            return JSON.parse(saveTasks)
        }
        return [{id: 'task-1', title: 'Задание - 1', isDone: false},
                {id: 'task-2', title: 'Задание - 2', isDone: false}]
    }
    
    )

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

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

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
        }
    }
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filterdTasks = clearSearchQuery.length > 0 
    ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null

    return(
    <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm
            addTask={addTask}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
        />
        <SearchTaskForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
        <TodoInfo 
            total={tasks.length} 
            done={tasks.filter(({isDone}) => (isDone)).length}
            onDeleteAllButtonClick={deleteAllTasks}
        />
        <Todolist 
            tasks={tasks}
            filterdTasks={filterdTasks}
            onDeletTaskButtonClick={deletTask}
            onTaskCompliteCahge={toggleTaskComplite}
        />
    </div>
    )
}

export default Todo