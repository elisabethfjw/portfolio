
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Projects } from './components/Projects/Projects';
import { Timeline } from './components/Timeline/Timeline';

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App
