import React, {useState, useCallback} from 'react'

import styles from './FullscreenMenu.module.css'
import ListHrefs from '../../ui/ListHrefs'
import {data} from '../../ui/NavItemsMenuList'

const itemMenu: string[] = [
    'Product',
    'Templates',
    'Pricing'
]

const FullscreenMenu: React.FC = () => {
    const [arr, setArr] = useState<boolean[]>(Array(itemMenu.length).fill(false))

    const handleToggle = useCallback((index: number) => {
        setArr((prevarr) => prevarr.map((item, i) => 
        i === index ? !item : item))
    }, [])

    return (
        <div className={styles['popup-menu']}>
            {itemMenu.map((item, index) => (
                <React.Fragment key={index}>
                    <div>
                        <button
                            className={styles.btns}
                            onClick={() => handleToggle(index)}
                        >
                            {item}
                        </button>
                        {arr[index] && <ListHrefs arr={data[index]} />}
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default FullscreenMenu
