import React from 'react'
import PropTypes from 'prop-types';
import styles from './ProjectCardSix.module.css'  

export const ProjectCardSix = ({project : {title, subtitle, description, skills, slidesLink}}) => {
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

ProjectCardSix.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    slidesLink: PropTypes.string.isRequired,
  }).isRequired,
};
