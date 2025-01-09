// import './App.css'
import AboutMe from './AboutMe.jsx'
import Home from './Home.jsx'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <div className="w-full fixed">
        <nav className="bg-blue-100 flex gap-3" >
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT ME</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
