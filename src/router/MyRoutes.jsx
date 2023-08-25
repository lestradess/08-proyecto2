import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../components/Home'
import { Portfolio } from '../components/Portfolio'
import { Curriculum } from '../components/Curriculum';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from "../components/layout/Footer";
import { Error } from '../components/layout/Error';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      {/*Header and Nav */ }
      <HeaderNav />
      {/*Content */ }
      <section className='content'>
        <Routes>
          <Route path='/' element={ <Navigate to="/home" /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/curriculum' element={ <Curriculum /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='*' element ={<Error />}> </Route>
        </Routes>
      </section>

      {/*Footer */ }
      <Footer />
    </BrowserRouter>
  )
}
