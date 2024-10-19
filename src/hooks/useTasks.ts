import { useState, useEffect } from "react";
import { Task } from "../interfaces/interfaces";

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => {
        console.log(task)
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks, task];
            console.log('upTasks', updatedTasks);
            return updatedTasks;
            }
        )
        window.location.reload();
    };


    const removeTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return {
        tasks,
        addTask,
        removeTask,
    };
};

export default useTasks;
