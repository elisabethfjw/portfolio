
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { ProjectsTwo } from './components/ProjectsTwo/ProjectsTwo';
import { ProjectsThree } from './components/ProjectsThree/ProjectsThree';
import { ProjectsFour } from './components/ProjectsFour/ProjectsFour';
import { Illustration } from './components/Illustrations/Illustration';

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Experience />
      <Projects />
      <ProjectsTwo />
      <ProjectsThree />
      <ProjectsFour />
      <Illustration />
    </div>
  );
}

export default App
