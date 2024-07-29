import React from 'react'
import styles from './Timeline.module.css'
import sunflowerImg from '../../../assets/header/sunflower.png';

export const Timeline = () => {
  return (
    <section className={styles.container} id='timeline'>
        <h2 className={styles.title}>experience</h2>
        <div className={styles.box}>
                <div className={styles.boxTitle}><h2>Data Science Intern</h2></div>
                <div className={styles.boxSubtitle}>
                    <h3>Azendian Solutions</h3>
                    <p>July 2024 - Present</p>
                </div>
                <div className={styles.boxItem}>
                    <ul>
                        <li className={styles.item}>Created a technical design file to convey the requirements</li> 
                        <li className={styles.item}>Implemented code changes in the SPRING framework (SpringBatch and SpringBoot)</li>
                    </ul>
                </div>
        </div>
        <div className={styles.box}>
                <div className={styles.boxTitle}><h2>Business Analyst Intern</h2></div>
                <div className={styles.boxSubtitle}>
                    <h3>Accenture</h3>
                    <p>August - December 2023</p>
                </div>
                <div className={styles.boxItem}>
                    <ul>
                        <li className={styles.item}>Created a technical design file to convey the requirements</li>
                        <li className={styles.item}>Implemented code changes in the SPRING framework (SpringBatch and SpringBoot)</li>
                        <li className={styles.item}>Tested in controlled environments (SIT and UAT)</li>
                        <li className={styles.item}>Identified and fixed bugs by analyzing logs via AWS CloudWatch and querying the database using PostgreSQL</li>  
                    </ul>
                </div>
        </div>
        <img src={sunflowerImg} alt='Plant Icon' className={styles.sunflowerImg}/>
    </section>
  )
}
