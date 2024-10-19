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
            console.log(updatedTasks);
            return updatedTasks;
            }
        )
    };

    const editTask = (taskId: number, newTask: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? newTask : task
            )
        );
    };

    const removeTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return {
        tasks,
        addTask,
        editTask,
        removeTask,
    };
};

export default useTasks;
