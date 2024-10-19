import React from 'react';

import styles from '../styles/ListHrefs.module.css'

interface ListString {
    arr: string[];
}

const ListHrefs: React.FC<ListString> = ({ arr }) => {
    return (
        <div className={styles.popupMenu__FullscreenMenu}>
        {arr.map((list, index) => (
            <a href="#" key={index}>
            {list}
            </a>
        ))}
        </div>
    );
};

export default ListHrefs;
