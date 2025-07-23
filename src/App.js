import './App.css';
import { Sidenav, About, Experience, Education, Skills, Projects, Interests, Info, Footer } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="App__nav">
        <Sidenav />
      </div>
      <div className="App__body">
        TODO: Figure out this animation. Feels like I'm close to getting what I want
      <About />
      <Experience />
     {/*<Education />*/}
      <Skills />
      <Projects />
      <Interests />
      <Info />
      <Footer />
      </div>
    </div>
  )
}

export default App;
