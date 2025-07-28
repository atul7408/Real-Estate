import React from 'react'
import img from '../assets/body1.png';
export const Body1 = () => {
  return (
    <>
    <div className="w-screen h-[800px] scroll-mt-20" id="About">

    <div className="flex flex-col text-black items-center justify-center mt-10">
        <h className="font-bold text-3xl">About Our Brand</h>
        <h>Passionate About Properties, Dedicated to</h>
        <h>Your Vision</h>
    </div>


    <div className=" flex flex-wrap   text-black items-center justify-evenly mt-10">

<div className="w-1/3 h-[600px]  ">
        <img src={img} />
    </div>
    
    <div className=" h-[400px] w-[500px]">
       <div className="flex flex-col gap-20">
    <div className="flex flex-wrap   gap-10">

<div className="flex flex-col">
    <h1 className='font-bold text-4xl'>10+</h1>
        <h1>Years of Excellence</h1>
</div>
   <div className="flex flex-col">
    <h1 className='font-bold text-4xl'>20+</h1>
        <h1>Mn. Sq. Ft. Delivered</h1>
   </div> 
      </div>

 <div className="flex flex-wrap w-[400px] h-[450px] gap-10">
<div className="flex flex-col">
    <h1 className='font-bold text-4xl'>10+</h1>
        <h1>Ongoing Projectss</h1>
</div>
   <div className="flex flex-col">
    <h1 className='font-bold text-4xl'>30+</h1>
        <h1>Projects Completed</h1>

        
      

   </div>
      </div>
      
</div>

      

    </div>
    
</div>

</div>

    </>
  )
}
