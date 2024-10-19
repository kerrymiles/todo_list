import React, { useCallback, useState, useEffect } from 'react'
import styles from './UploadTaskPage.module.css'

import useTasks from '../../../hooks/useTasks'
import TaskPanel from '../../../components/task-panel/TaskPanel'

const UploadTaskPage = () => {
    const [showTaskPanel, setShowTaskPanel] = useState<boolean>(false);

    const { tasks, removeTask } = useTasks()
    console.log('tasks', tasks)

    const handleOpenTaskPanel = useCallback((): void => {
        setShowTaskPanel(true);
    }, [])

    const handleCloseTaskPanel = useCallback((): void => {
        setShowTaskPanel(false);
    }, [])

    return (
        <div className={styles.workspace_flow}>
            <div className={styles.control_btns}>              
                <h1>Tasks</h1>
                <button aria-label='Add task' onClick={() => handleOpenTaskPanel()}>
                    <img src="/ui-kit/add_circle.svg" alt="" />
                </button>
                {showTaskPanel && <TaskPanel onClose={() => handleCloseTaskPanel()}/>}
            </div>
            <hr style={{ color: '#222', width: '200px' }}></hr>
            <div className={styles.tasks_list}>
                <ul className={styles.space_tasks}>    

                {tasks.map((value, index) => {
                    return (
                            <li key={index}>
                                {value.title}
                                <button 
                                className={styles.remove_btn} 
                                aria-label='Delete task'
                                onClick={() => removeTask(value.id)}
                                >
                                    <img src="/ui-kit/remove_icon.svg" alt="" />
                                </button>
                            </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default UploadTaskPage
