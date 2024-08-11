import React from 'react'

import projects from '../../data/projectsThree.json'
import { ProjectCardThree } from './ProjectCardThree';
import styles from './ProjectsThree.module.css';


export const ProjectsThree = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>ui/ux</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectCard} key={id}>
              <ProjectCardThree project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
