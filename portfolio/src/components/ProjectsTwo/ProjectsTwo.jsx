import React from 'react'

import projects from '../../data/projectsTwo.json'
import { ProjectCardTwo } from './ProjectCardTwo';
import styles from './ProjectsTwo.module.css';


export const ProjectsTwo = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>ai/ml</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectCard} key={id}>
              <ProjectCardTwo project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
