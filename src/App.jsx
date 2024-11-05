import { useState } from 'react'
import { Footer, Header, Listing } from './components'


function App() {


  return (
    
    <>

    <div className='flex flex-col min-h-screen'>

    <Header/>

    <div className='flex flex-grow'>

      <Listing/>

    </div>

    

    <Footer/>

    </div>

     
      
    </>
  )
}

export default App
