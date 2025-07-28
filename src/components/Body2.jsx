import React from 'react'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider 2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.jpg'
export const Body2 = () => {
  return (
    <>
    
    <div className="w-screen h-[800px]  " id="Project">
        <div className="flex flex-col items-center justify-center  ">     
             <h1 className='text-4xl font-bold'>Projects Completed</h1>
<h1>Crafting Spaces, Building Legacies—Explore</h1>
<h1>Our Portfolio</h1>
          </div>

<div className="carousel carousel-center rounded-box m-10 p-8 bg-white mt-10 h-[500px]  ">
  
  
  <div className="carousel-item mr-1 ">
    <img src={slider2} alt="slider2" className="rounded-box" />
    
  </div>
  <div className="carousel-item mr-1">
    <img src={slider3} alt="slider3" className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img src={slider4} alt="slider4" className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img src={slider5} alt="slider5" className="rounded-box" />
  </div>
</div>





</div>
    </>
  )
}
