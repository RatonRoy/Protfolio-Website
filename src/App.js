import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Icon from './components/Icons/Icon'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Icon />
      <Home />
      <About />
    </div>
  )
}

export default App
