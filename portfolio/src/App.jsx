
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { ProjectsTwo } from './components/ProjectsTwo/ProjectsTwo';
import { ProjectsFour } from './components/ProjectsFour/ProjectsFour';
import { ProjectsFive } from './components/ProjectsFive/ProjectsFive';
import { ProjectsSix } from './components/ProjectsSix/ProjectsSix';

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Experience />
      <Projects />
      <ProjectsFive />
      <ProjectsTwo />
      <ProjectsSix />
      <ProjectsFour />
    </div>
  );
}

export default App
