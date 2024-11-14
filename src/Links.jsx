import {Routes, Route} from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Appraisal from './pages/Appraisal'
import Portfolio from './pages/Portfolio'

// import Components
import Listing from './components/Listing'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/appraisal' element={<Appraisal/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>

        <Route path="/portfolio/:id" element={<Listing/>}/>
    </Routes>
  )
}

export default Links