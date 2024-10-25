import React from 'react'
import styles from './Experience.module.css'
import sunflowerImg from '/assets/sunflower.png';

export const Experience = () => {
  return (
    <section className={styles.container} id='timeline'>
        <h2 className={styles.title}>experience</h2>
        <div className={styles.box}>
                <div className={styles.boxTitle}><h4>Data Science Intern</h4></div>
                <div className={styles.boxSubtitle}>
                    <h4>Azendian Solutions</h4>
                    <p>July - September 2024</p>
                </div>
                <div>
                    <ul className={styles.boxItem}>
                        <li className={styles.item}>PowerBI</li> 
                        <li className={styles.item}>Power Automate</li>
                        <li className={styles.item}>PostgreSQL</li>
                        <li className={styles.item}>JavaScript</li>
                        <li className={styles.item}>Research</li>
                    </ul>
                </div>
        </div>
        <div className={styles.box}>
                <div className={styles.boxTitle}><h4>Business Analyst Intern</h4></div>
                <div className={styles.boxSubtitle}>
                    <h4>Accenture</h4>
                    <p>August - December 2023</p>
                </div>
                <div>
                    <ul className={styles.boxItem}>
                        <li className={styles.item}>Java</li>
                        <li className={styles.item}>Springbatch</li>
                        <li className={styles.item}>Springboot</li>
                        <li className={styles.item}>PostgreSQL</li>
                        <li className={styles.item}>Testing (SIT, UAT)</li>
                        <li className={styles.item}>Documentation</li>
                    </ul>
                </div>
        </div>
        <img src={sunflowerImg} alt='Plant Icon' className={styles.sunflowerImg}/>
    </section>
  )
}
