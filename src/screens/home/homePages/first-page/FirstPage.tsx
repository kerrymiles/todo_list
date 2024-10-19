import React from 'react'

import styles from './FirstPage.module.css'
import { Link } from 'react-router-dom'
const FirstPage = () => {
    return (
        <section className={styles.section_content}>
            <header className={styles.header}>
                <div className={styles.main_article}>
                    <h1>Your day, your time</h1>
                    <p>Make a schedule for your day, 
                        set goals and objectives. 
                        Do them.</p>
                    <nav className={styles.nav}>
                        <Link to="/login">Log In</Link>
                        <Link to="/workspace">Get Free</Link>
                    </nav>
                </div>
                <div className={styles.main_img}>
                    <img src="/public/peeps.png" alt="" />
                </div>
            </header>

            <div className={styles.slider}>
                <h2>We cooperate with</h2>
                <div className={styles.slider_items}>
                    <div className={styles.slider_item}>
                        <img src="/trusted_icons/Google.svg" alt="Google" />
                    </div>
                    <div className={styles.slider_item}>
                        <img src="/trusted_icons/Notion.svg" alt="Notion" />
                    </div>
                    <div className={styles.slider_item}>
                        <img src="/trusted_icons/Arbys.svg" alt="Арбуз, арбуз привет" />
                    </div>
                    <div className={styles.slider_item}>
                        <img src="/trusted_icons/aws.svg" alt="AWS" />
                    </div>
                    <div className={styles.slider_item}>
                        <img src="/trusted_icons/SomeCompany.svg" alt="Unknown Company" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstPage
