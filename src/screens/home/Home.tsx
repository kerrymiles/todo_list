import React from 'react'

import styles from './Home.module.css'
import FirstPage from './homePages/first-page/FirstPage'
import SecondPage from './homePages/second-page/SecondPage'



const Home = () => {
    return (
        <main className={styles.layout_main}>
            <div className={styles.homePage}>
                <FirstPage />
                <SecondPage />
            </div>
        </main>
    )
}

export default Home
