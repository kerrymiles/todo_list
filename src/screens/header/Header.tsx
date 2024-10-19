import React, { memo, useState, useCallback } from 'react'

import DropMenu from '../../components/drop-menu/DropMenuBtn'
import FullscreenMenu from '../../components/fullscreen-menu/FullscreenMenu'
import FullscreenMenuBtn from '../../components/fullscreen-menu-btn/FullscreenMenuBtn'

import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = memo(() => {
    const [isFullscreenMenu, setIsFullscreenMenu] = useState<boolean>(false)
    const [changeColor, setChangeColor] = useState<boolean>(false)

    const changeColorToggle = useCallback(() => {
        setChangeColor(prevState => !prevState);
    }, []);

    const isFullscreenMenuToggle = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setIsFullscreenMenu(prevState => !prevState);
        changeColorToggle();
    }, [changeColorToggle]);

    return (
        <header className={styles.header}>
            <Link className={styles.logo} to="/">
                <img src="/TaskFlow.svg" alt="" />
            </Link>

            <div className={styles.right}>
                <nav className={styles.nav}>
                    <div className={styles.nav_list}>
                        <DropMenu article="Product" dropMenuLabels={["AI", "Docs", "Plugins"]} href="product" />
                        <DropMenu article="Templates" dropMenuLabels={["Work", "School", "Life", "Wiki"]} href="templates" />
                        <DropMenu article="Pricing" dropMenuLabels={["Free", "Premium"]} href="price" />
                    </div>

                </nav>

                <div className={styles.login}>
                    <Link to="/login" className={styles.sign_in}>Log In</Link>
                    <Link to="/workspace" className={styles.sign_up}>Get Free</Link>
                </div>
            </div>

            <div 
            className={ styles.mobile_menu }
            >
                <button className={`${styles['btn-menu_toggle']} ${changeColor ? styles['active-btn-menu-toggle'] : ''}`} onClick={ (event) => isFullscreenMenuToggle(event) }>
                    <FullscreenMenuBtn colorChange={changeColor} />
                </button>

                {isFullscreenMenu && <FullscreenMenu />}
            </div>
        </header>
        )
    }
)

export default Header;
