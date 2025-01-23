import AboutMe from './AboutMe.jsx' // importing other jsx files
import Home from './Home.jsx' // importing other jsx files
import Wrapped from './Wrapped.jsx' // importing other jsx files
import ToDo from './ToDo.jsx' // importing other jsx files
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  // bg-[#c5ccd1]

  return (
    <div className="w-screen h-full">
      <BrowserRouter>
        <nav className="bg-white flex gap-3 w-full fixed p-3 z-10" >
          <Link to="/">HOME</Link>
          |
          <Link to="/about">ABOUT ME</Link>
          |
          <Link to="/wrapped">MY WRAPPED</Link>

          <Link to="/todo">TO DO LIST</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<AboutMe/>}/>
          <Route path="wrapped" element={<Wrapped/>}/>
          <Route path="todo" element={<ToDo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
