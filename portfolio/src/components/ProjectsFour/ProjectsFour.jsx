import React from 'react'

import projects from '../../data/projectsFour.json'
import { ProjectCardFour } from './ProjectCardFour';
import styles from './ProjectsFour.module.css';


export const ProjectsFour = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>web applications</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectCard} key={id}>
              <ProjectCardFour project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
