
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { ProjectsTwo } from './components/ProjectsTwo/ProjectsTwo';

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Experience />
      <Projects />
      <ProjectsTwo />
    </div>
  );
}

export default App
