import React from 'react'
import styles from './Header.module.css'
import resume from '/assets/ElisabethFung_Resume.pdf'
import flowers from '/assets/flowers.png'

export const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
          <h1 className={styles.title}>elisabeth fung</h1>
          <p className={styles.description}>data science | artifical intelligence | design</p>
          <div className={styles.contact}>
            <a href='mailto:elisabeth_fung@mymail.sutd.edu.sg' className={styles.button}>email</a>
            <a href='https://www.linkedin.com/in/elisabeth-fung/' className={styles.button} target="_blank" rel="noopener noreferrer">linkedIn</a>
            <a href='https://github.com/elisabethfjw' className={styles.button} target="_blank" rel="noopener noreferrer">github</a>
          </div>
      </div>
      <img src={flowers} alt='HeaderImg' className={styles.headerImg}/>  
    </section>
  ) 
};

