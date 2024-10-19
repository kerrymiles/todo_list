import React from 'react'

import styles from './SecondPage.module.css'


import { data } from './DataSecondPage'

const SecondPage = () => {
    return (
        <section className={styles.section_content}>
            <article className={styles.key_features}>
                <h2>Key Features</h2>
                <p>Why TaskFlow stands out.</p>
                <ul className={styles.list_keysFeatures}>
                    {data.keyFeatures.map((item, index) => {
                        return (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </article>
            <article className={styles.user_stories}>
                <h2>User Stories</h2>
                <ul className={styles.list_userStories}>
                    {data.userStories.map((item, index) => {
                        return (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </article>
            <article className={styles.howWorks}>
                <h2>How it works</h2>
                <div className={styles.steps}>
                    <div className={styles.step_name}>
                        {data.howWorks.map((item, index) => {
                            return (
                                <div key={index} className={styles.step}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default SecondPage
