import React from 'react'
import { useState,useEffect } from 'react'
import Img from '../assets/header_img.png'
import { Navbar } from './navbar'
export const Header = () => {

  return (
   <>


      <header className="sticky top-0   shadow-md backdrop-blur-lg bg-gray-300 ">
      <Navbar />
    </header>
  

   

   <div  className=" flex items-center justify-center w-full h-screen" id='Home'
         style={{ backgroundImage: `url(${Img})` }}
       >


  
<div className=" h-full w-full font-bold bg-opacity-75 text-white ">

 

  <div className="  flex flex-col text-center  justify-center h-screen ">
  <h1 className='text-5xl   '>Explore Homes That Fit Your dreams</h1>


<div className="flex items-center justify-center">
<div className="flex flex-wrap gap-10 mt-10">
  <button className="btn btn-primary">
    <a href='#Contact'>ContactUs</a>
  </button>
  <button className="btn btn-outline  " >
     <a href='#Project'>Project</a>
  </button>
</div>
  </div>

  </div>

</div>


     </div>
 
  
   </>
  )
}  