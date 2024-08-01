import React from 'react'
// import css module into corresponding component to prevent overriding of styles between components
import styles from './ProjectCard.module.css'  
// destructuring the project prop
export const ProjectCard = ({project : {title, description, skills, github}}) => {
  return ( 
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>  
      {skills.map((skill, id) => (
        <li key={id} className={styles.skill}>{skill}</li>
      ))}
    </ul>   
    <a href={github} className={styles.button} target="_blank" rel="noopener noreferrer">Github</a>
  </div>
  );
};
