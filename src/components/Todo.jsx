import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
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
        return []
    }
    
    )

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const newTaskInputRef = useRef(null)
    const [searchQuery, setSearchQuery] = useState('')

    const deleteAllTasks = useCallback(() => {
        const isConfirmd = confirm('Del All?')
        if (isConfirmd) {
            setTasks([])
        }
    }, [])

    const deletTask = useCallback((taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }, [tasks])
    
    const toggleTaskComplite = useCallback((taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return {...task, isDone}
                }
                return task
        })
        )
    }, [tasks])

    const addTask = useCallback(() => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks((prevTasks) => [...prevTasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
        }
    }, [newTaskTitle, tasks])
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        newTaskInputRef.current.focus()
    }, [])

    const filterdTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0 ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null}, [searchQuery, tasks])
    
    const doneTasks = useMemo(() => {return tasks.filter(({isDone}) => (isDone)).length}, [tasks])
    
    
    return(
    <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm
            addTask={addTask}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
            ref={newTaskInputRef}
        />
        <SearchTaskForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
        <TodoInfo 
            total={tasks.length} 
            done={doneTasks}
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