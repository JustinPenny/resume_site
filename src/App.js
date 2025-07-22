import './App.css';
import { Sidenav, About, Experience, Education, Skills, Projects, Interests, Info, Footer } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="App__nav">
        <Sidenav />
      </div>
      <div className="App__body">
        TODO: Finish sections. Social links in ABOUT section. Move Experience data to new file. Mobile =/
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Interests />
      <Info />
      <Footer />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default App;
