import React, { useEffect, useState } from 'react'
import styles from '../../styles/Intro.module.css'
import Cookies from 'universal-cookie'
const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <div className={`${styles.text3} ${styles.text}`}>E-CELL</div>
                <div className={`${styles.text4} ${styles.text}`}>E-CELL</div>
                <div className={`${styles.text5} ${styles.text}`}>E-CELL</div>
                <div className={`${styles.text6} ${styles.text}`}>E-CELL</div>
                <div className={`${styles.text7} ${styles.text}`}>E-CELL</div>
                <div className={`${styles.text8} ${styles.text}`}>E-CELL</div>
                <div className={`${styles.text9} ${styles.text}`}>E-CELL</div>
            </div>
        </div>
    )
}

export default Intro
