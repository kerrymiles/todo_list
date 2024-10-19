import React, { useCallback, useState } from 'react';
import styles from './Workspace.module.css';
import UploadTaskPage from './upload-task-page/UploadTaskPage';
import FullscreenMenuBtn from '../../components/fullscreen-menu-btn/FullscreenMenuBtn';
import { Link } from 'react-router-dom';
const Workspace = () => {
    const [isFullscreenMenu, setIsFullscreenMenu] = useState<boolean>(false);
    const [changeColor, setChangeColor] = useState<boolean>(false);

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
        <div className={styles.app}>
            <aside className={`${styles.aside} ${changeColor ? styles.active_aside : ''}`}>
                <button className={`${styles['btn-menu_toggle']} ${changeColor ? styles['active-btn-menu-toggle'] : ''}`} onClick={(event) => isFullscreenMenuToggle(event)}>
                    <FullscreenMenuBtn colorChange={changeColor} />
                </button>
                {isFullscreenMenu && (
                    <div className={`${styles.aside_bar} ${changeColor ? styles.active_aside_bar : ''}`}>
                        <div className={styles.control}>
                            <div className={styles.search}>
                                <img src="/ui-kit/search_icon.svg" alt="" />
                                <button className={styles.btns}>Search</button>
                            </div>
                            <div className={styles.create}>
                                <img src="/ui-kit/keyboard_return.svg" alt="" />
                                <Link to={'/'} className={styles.btns}>Return</Link>
                            </div>
                            <div className={styles.settings}>
                                <img src="/ui-kit/settings_icon.svg" alt="" />
                                <button className={styles.btns}>Settings</button>
                            </div>
                        </div>
                    </div>
                )}
            </aside>
            <div className={styles.task_space}>
                <UploadTaskPage />
            </div>
        </div>
    );
};

export default Workspace;
