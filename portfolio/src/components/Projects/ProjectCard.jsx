import React from 'react'
// import css module into corresponding component to prevent overriding of styles between components
import styles from './ProjectCard.module.css'  
import { Carousel } from './Carousel.jsx'

// destructuring the project prop
export const ProjectCard = ({project : {title, subtitle, description, skills, github, slidesLink, slides}}) => {
  return ( 
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.subtitle}>{subtitle}</p>
    <Carousel data={slides} className={styles.carousel} /> 
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>  
      {skills.map((skill, id) => (
        <li key={id} className={styles.skill}>{skill}</li>
      ))}
    </ul> 
    <div className={styles.buttonContainer}>
      <a href={slidesLink} className={styles.button} target="_blank" rel="noopener noreferrer">View More</a>
      <a href={github} className={styles.button} target="_blank" rel="noopener noreferrer">Github</a>
    </div>
  </div>
  );
};
