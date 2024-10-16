import React from 'react'

import projects from '../../data/projectsSix.json'
import { ProjectCardSix } from './ProjectCardSix';
import styles from './ProjectsSix.module.css';


export const ProjectsSix = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>ui / ux</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectCard} key={id}>
              <ProjectCardSix project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
