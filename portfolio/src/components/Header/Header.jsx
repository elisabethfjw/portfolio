import React from 'react'
import { getImageURL } from '../../utils'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Elisabeth Fung</h1>
            <p className={styles.description}>Data Science | AI/ML | UI/UX</p>
            <a href='mailto:elisabeth_fung@mymail.sutd.edu.sg' className={styles.contactBtn}>Contact</a>
        </div>
        <img src={getImageURL('lighthouse.png')} alt='Header Image' className={styles.headerImg}/>
    </section>
  )
};

