import React, { useCallback, useState } from 'react'
import styles from './UploadTaskPage.module.css'

import useTasks from '../../../hooks/useTasks'
import TaskPanel from '../../../components/task-panel/TaskPanel'

const UploadTaskPage = () => {
    const [showTaskPanel, setShowTaskPanel] = useState<boolean>(false);

    const { tasks } = useTasks();

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
                {tasks.map((value, index) => {
                    return (
                        <div key={index}>    
                            <div>{value.title}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UploadTaskPage
