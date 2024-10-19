import React from 'react'
import styles from './UploadTaskPage.module.css'


const UploadTaskPage = () => {
    return (
        <div className={styles.workspace_flow}>
            <h1>Tasks</h1>
            <div className={styles.control_btns}>
                <button>
                    <img src="/ui-kit/add_icon.svg" alt="" />
                </button>
            </div>
            <hr style={{ color: '#222', width: '200px' }}></hr>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default UploadTaskPage
