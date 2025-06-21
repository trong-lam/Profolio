import IntroductionHeader from './components/Introduction/IntructionHeader';
import ContextMenu from './components/ContextMenu/ContextMenu';
import About from './components/About/About';
import FixedContact from './components/FixedContact/FixedContact';
import Projects from './components/Projects/Projects';
import styles from "./App.module.scss"
import MultipleDialog from './components/MultipleDialog/MultipleDialog';
function App() {
  return (
    <div className={styles.container}>
       <FixedContact />
       <ContextMenu />
       <IntroductionHeader/>
       <About/>
       {/* <Projects /> */}
       <MultipleDialog />
    </div>
  );
}

export default App;
