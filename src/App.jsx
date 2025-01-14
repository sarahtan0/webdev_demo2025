import AboutMe from './AboutMe.jsx' // importing other jsx files
import Home from './Home.jsx' // importing other jsx files
import Travel from './Travel.jsx' // importing other jsx files
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  // bg-[#c5ccd1]

  return (
    <div className="w-screen h-full">
      <BrowserRouter>
        <nav className="bg-white flex gap-3 w-full fixed p-3" >
          <Link to="/">HOME</Link>
          |
          <Link to="/about">ABOUT ME</Link>
          |
          <Link to="/travel">TRAVEL</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<AboutMe/>}/>
          <Route path="travel" element={<Travel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
