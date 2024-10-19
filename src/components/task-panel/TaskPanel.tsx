import React, { useState } from 'react'
import styles from './TaskPanel.module.css'

import useTasks from '../../hooks/useTasks';

interface taskPanel {
    onClose: () => void;
}

const TaskPanel: React.FC<taskPanel> = ({ onClose }) => {
    const [title, setTitle] = useState<string>('')
    const { addTask } = useTasks();

    const handleAddTask = () => {

        const task = {
            id: Date.now(),
            title: title,
        }

        addTask(task);
        setTitle('');

        setTimeout(() => onClose(), 100)
    }

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.addTaskPanel}>
                <span className={styles.closeBtn} onClick={() => {onClose()}}>
                    &times;
                </span>
                <h1>Add Task</h1>
                <hr style={{ color: '#222', width: '200px' }}></hr>
                <div className={styles.addTaskPanel__box}>
                    <input 
                    type="text" 
                    placeholder="Task Name" 
                    maxLength={60} 
                    onChange={(e) => { 
                        return setTitle(e.target.value)
                    }}
                    />
                </div>
                <button 
                aria-label='Create task' 
                className={styles.btnCreate}
                onClick={() => {
                    handleAddTask()
                }}
                >
                    Create task
                </button>
            </div>
        </>
    )
}

export default TaskPanel
