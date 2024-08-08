
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { ProjectsTwo } from './components/ProjectsTwo/ProjectsTwo';
import { ProjectsThree } from './components/ProjectsThree/ProjectsThree';

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Experience />
      <Projects />
      <ProjectsTwo />
      <ProjectsThree />
    </div>
  );
}

export default App
