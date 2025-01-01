import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Contact />
    </div>
  );
}

export default App;
