import React from 'react';

import styles from '../styles/ListHrefs.module.css'
import { Link } from 'react-router-dom';

interface ListString {
    arr: string[];
    firstName: string;
}

const ListHrefs: React.FC<ListString> = ({ arr, firstName }) => {
    return (
        <div className={styles.popupMenu__FullscreenMenu}>
        {arr.map((list, index) => (
            <Link to={`/${firstName.toLowerCase()}/${list.toLowerCase()}`} onClick={() => window.location.reload()} key={index}>
                {list}
            </Link>
        ))}
        </div>
    );
};

export default ListHrefs;
