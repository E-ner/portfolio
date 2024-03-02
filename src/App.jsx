import React from 'react'
import { Navbar } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div className='md:px-40 lg:mt-10 md:mt-10 px-1 mt-5'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
