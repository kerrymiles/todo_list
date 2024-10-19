import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

type KeyValuePair = {
    value: string;
    href: string;
}

const leftValues: KeyValuePair[] = [
    {value: 'About',href: 'about'},
    {value:'Help',href:'contact-us'},
    {value:'Terms of Service',href:'terms-of-service'},
    {value:'Privacy Policy',href:'privacy-policy'},
]

const rightValues: KeyValuePair[] = [
    {value: 'Contact Us',href: 'contact-us'},
    {value:'Careers',href:'careers'},
    {value:'Blog',href:'blog'},
    {value:'Support',href:'contact-us'},
]

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_container}>
                <img src="/TaskFlow.svg" alt="" />
                <div className={styles.nav_footer}>
                    <div className={styles.left_footer}>
                        <ul>
                            {leftValues.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/${item.href}`}>{item.value}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.right_footer}>
                        <ul>
                            {rightValues.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/${item.href}`}>{item.value}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
