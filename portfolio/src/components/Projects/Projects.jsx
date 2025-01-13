import React from 'react'

import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';


export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>HACKATHONS</h2>
      <h2 className={styles.subtitle}>mobile & web apps</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectCard} key={id}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
