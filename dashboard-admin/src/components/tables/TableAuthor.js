import React from 'react';
import styles from '../../styles/TableAuthor.module.scss'

const TableAuthor = ({name, email, role, job, image, online, employed}) => {
    return (
        <tr className={styles.authorItem}>
            <td className={styles.author}>
                <img alt='author' src={image.url}/>
                <div className={styles.authorInfo}>
                    <h4>{name}</h4>
                    <span>{email}</span>
                </div>
            </td>
            <td className={styles.function}>
                <h5>{job}</h5>
                <p>{role}</p>
            </td>
            <td className={styles.status}>
                <div style={{background: `${online === 'آنلاین' ? '#e2f6e2' : '#f5dcdc'}`, color: `${online === 'آنلاین' ? 'green' : 'red'}`}}>{online}</div>
            </td>
            <td className={styles.employed}>
                <span>{employed}</span>
            </td>
            <td className={styles.edit}>
                <span>ویرایش</span>
            </td>
        </tr>
    );
};

export default TableAuthor;