import React from 'react'

import projects from '../../data/projectsFive.json'
import { ProjectCardFive } from './ProjectCardFive';
import styles from './ProjectsFive.module.css';


export const ProjectsFive = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>HACKATHONS</h2>
      <h2 className={styles.subtitle}>blockchain</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectCard} key={id}>
              <ProjectCardFive project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
