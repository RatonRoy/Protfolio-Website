import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Icon from './components/Icons/Icon'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Icon />
      <Home />
      <About />
      <Project />
    </div>
  )
}

export default App
