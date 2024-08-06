import React from 'react'
import styles from './ProjectCardTwo.module.css'  

export const ProjectCardTwo = ({project : {title, subtitle, description, skills, slidesLink}}) => {
  return ( 
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>  
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul> 
      <div className={styles.buttonContainer}>
        <a href={slidesLink} className={styles.button} target="_blank" rel="noopener noreferrer">View More</a>
      </div>
    </div>
    );
};
