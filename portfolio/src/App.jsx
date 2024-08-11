
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { ProjectsTwo } from './components/ProjectsTwo/ProjectsTwo';
import { ProjectsThree } from './components/ProjectsThree/ProjectsThree';
import { ProjectsFour } from './components/ProjectsFour/ProjectsFour';

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Experience />
      <Projects />
      <ProjectsTwo />
      <ProjectsThree />
      <ProjectsFour />
    </div>
  );
}

export default App
