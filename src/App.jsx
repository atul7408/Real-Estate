import { useState } from 'react'

import { Header } from './components/Header'
import { Body1 } from './components/Body1'

import { Body2 } from './components/Body2'
import { Services } from './components/Services'
import { Review } from './components/Review'
import { Contact } from './components/Contact'
 import { ToastContainer, toast } from 'react-toastify';
import { Footer } from './components/footer'
function App() {
  return(
    <>
<ToastContainer/>
<Header/>

<Body1/>
<Body2/>
<Services/>
<Review/>
<Contact/>
<Footer/>


</>
  )
}

export default App
