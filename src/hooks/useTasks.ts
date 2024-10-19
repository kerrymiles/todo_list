import { useState, useEffect } from "react";

import { Task } from "../interfaces/interfaces";

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>(
        () => {
            const tasks = localStorage.getItem('tasks');
            return tasks? JSON.parse(tasks) : [];
        }
    );

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        }, [tasks]
    )

    const addTask = (task: Task) => {
        try {
            setTasks((prevtasks) => [...prevtasks, task]);
        } catch (err) {
            console.log('Error to add task', err);
        }
    }

    const editTask = (taskId: number, newTask: Task) => {
        try {
        setTasks((prevtasks) => 
            prevtasks.map((task) => 
                task.id === taskId ? newTask : task
            )
        )
    } catch (err) {
            console.log('Error to edit task', err);
     }
    }

    const removeTask = (taskId: number) => {
        try {
        setTasks((prevtasks) => prevtasks.filter((task) => task.id !== taskId));
    } catch ( err ) {
        console.log('Error to remove task', err);
    }}

    return {
        tasks,
        addTask,
        editTask,
        removeTask
    };
}

export default useTasks
