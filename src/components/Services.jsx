import React from 'react'
import service from '../assets/service.json'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const Services = () => {
  return (
    <>

   <div className="w-screen h-screen bg-gray-50 scroll-mt-20 " id='Services'>
     
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <h2 className="text-lg text-gray-600">We are provided best Services</h2>
    
      </div>
<div className="flex flex-wrap justify-center gap-4 p-10">
    {
        service.map((item)=>{
            return (
                
         <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center mb-4">
         {item.category}
        </Typography>
        <Typography>
         {item.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>{item.name}</Button>
      </CardFooter>
    </Card>
 
           )   })
           
    }
       </div>
       </div>
    </>
  )
}
