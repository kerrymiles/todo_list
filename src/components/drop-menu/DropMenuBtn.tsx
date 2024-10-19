import React from 'react'

import styles from './DropMenuBtn.module.css'
import { Link } from 'react-router-dom';

interface DropMenuProps {
    article: string;
    dropMenuLabels: string[];
    href: string;
}

const DropMenu: React.FC<DropMenuProps> = ({ article, dropMenuLabels, href }) => {
    return (
        <div className={styles.nav_item}>
            <button 
            className={styles.nav_button} 
            >
                {article}
            </button>

            <div className={styles.dropdown_menu}>
                <ul>
                    {dropMenuLabels.map((label, index) => (
                        <li key={index} className={styles.dropMenu_item}><Link to={`/${href}/${label.toLowerCase()}`} className={styles['dropMenu_item-href']}>{label}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropMenu;


