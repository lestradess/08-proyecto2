import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom'
import { Home } from '../components/Home'
import { Portfolio } from '../components/Portfolio'
import { Curriculum } from '../components/Curriculum';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from "../components/layout/Footer";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      {/*Header and Nav */ }
      <HeaderNav />
      {/*Content */ }
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='/curriculum' element={ <Curriculum /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/contact' element={ <Contact /> } />

      </Routes>
      {/*Footer */ }
      <br />
      <hr /> 
      <Footer />
    </BrowserRouter>
  )
}
