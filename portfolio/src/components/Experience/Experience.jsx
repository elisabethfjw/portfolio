import React from 'react'
import styles from './Experience.module.css'
import sunflowerImg from '../../../assets/header/sunflower.png';

export const Experience = () => {
  return (
    <section className={styles.container} id='timeline'>
        <p className={styles.title}>experience</p>
        <div className={styles.box}>
                <div className={styles.boxTitle}><h4>Data Science Intern</h4></div>
                <div className={styles.boxSubtitle}>
                    <h4>Azendian Solutions</h4>
                    <p>July 2024 - Present</p>
                </div>
                <div className={styles.boxItem}>
                    <ul>
                        <li className={styles.item}>Created a Power BI dashboard with real-time streaming to update dashboards in real time</li> 
                        <li className={styles.item}>Created a Python script to extract data from PostgreSQL, perform intermediate calculations, and send it as JSON payloads via POST requests to the PowerBI API.</li>
                        <li className={styles.item}>Created a PowerBI dashboard using a DirectQuery data source</li>
                        <li className={styles.item}>Researched Predictive Maintenance and Fault Detection Models </li>
                    </ul>
                </div>
        </div>
        <div className={styles.box}>
                <div className={styles.boxTitle}><h4>Business Analyst Intern</h4></div>
                <div className={styles.boxSubtitle}>
                    <h4>Accenture</h4>
                    <p>August - December 2023</p>
                </div>
                <div className={styles.boxItem}>
                    <ul>
                        <li className={styles.item}>Created a technical design file to convey business requirements</li>
                        <li className={styles.item}>Implemented Java code changes in the SPRING framework (SpringBatch and SpringBoot)</li>
                        <li className={styles.item}>Tested in controlled environments (SIT and UAT)</li>
                        <li className={styles.item}>Identified and fixed bugs by analyzing logs via AWS CloudWatch and querying the database using PostgreSQL</li>  
                    </ul>
                </div>
        </div>
        <img src={sunflowerImg} alt='Plant Icon' className={styles.sunflowerImg}/>
    </section>
  )
}
