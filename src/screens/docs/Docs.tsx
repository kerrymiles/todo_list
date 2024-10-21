import React from 'react'
import styles from './Docs.module.css'

const Docs = () => {
    return (
        <main>
            <section className={styles.docs}>
                <div className={styles.docs_wrapper}>
                    <h2>Docs</h2>
                    <article className={styles.howToAdd}>
                        <h3># How to add task</h3>
                        <p>To add a task, click on this btn.</p>
                        <img src="/interface/interface.jpeg" alt="" />
                    </article>
                    <article className={styles.howToRemove}>
                        <h3># How to remove task</h3>
                        <p>To remove a task, click on the delete icon next to the task you want to remove. 
                            The task will be permanently deleted.</p>
                        <img src="/interface/interface2.jpeg" alt="" />
                    </article>
                    <article className={styles.howToManageTasks}>
                        <h3># How to manage tasks</h3>
                        <p>To manage your tasks, click on the 'My Tasks' tab in the top navigation bar. 
                            You will see a list of all your tasks, with options to edit, complete or delete each task.</p>
                    </article>
                    <article className={styles.featers}>
                        <h3># Features</h3>
                        <p>Coming soon...</p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Docs
