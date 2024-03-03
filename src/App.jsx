import React from 'react'
import { Footer, Navbar } from './components';
import { About, Home,Contact, SKills, Work } from './pages';

const App = () => {
  return (
    <div className='md:px-40 '>
      <Navbar/>
      <Home/>
      <About/>
      <SKills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
