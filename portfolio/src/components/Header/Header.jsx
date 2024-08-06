import React from 'react'
import styles from './Header.module.css'
import resume from '../../../assets/header/ElisabethFung_Resume.pdf'
import flowers from '../../../assets/header/flowers.png'

export const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
          <h1 className={styles.title}>Elisabeth Fung</h1>
          <p className={styles.description}>data science | artifical intelligence | design</p>
          <div className={styles.contact}>
            <a href='mailto:elisabeth_fung@mymail.sutd.edu.sg' className={styles.button}>Email</a>
            <a href='https://www.linkedin.com/in/elisabeth-fung/' className={styles.button}>LinkedIn</a>
            <a href={resume} className={styles.button} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
      </div>
      <img src={flowers} alt='Header Image' className={styles.headerImg}/>  
    </section>
  ) 
};

