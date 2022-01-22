import logo from './logo.svg'
import './App.css'
import Banner from './Components/Banner'
import Divider from './Components/Divider'
import Skills from './Components/Skills'
import Clients from './Components/Clients'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import Menubar from './Components/Menubar'
import DotRing from './Components/DotCursor'

function App() {
  return (
    <div className="App App-Container">
      <DotRing />
      <Menubar />
      <div class='grid-1100'>
        <Banner />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Resume />
        <Divider />
        <Clients />
        <Divider />
        <Pricing />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}

export default App
