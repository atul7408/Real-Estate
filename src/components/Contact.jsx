import React from 'react'
import { toast } from 'react-toastify';

export const Contact = () => {


const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2023594b-10c5-46de-b6a1-8ee0e35ecdf5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
     
        toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      
        toast.success(data.message)
      setResult("");
    }
  };












  return (
    
 <>
   <div className="w-screen h-[800px] scroll-mt-20" id="Contact">
        <div className="flex flex-col items-center justify-center  ">     
             <h1 className='text-4xl font-bold'>Contact With Us</h1>
<h1>Ready to Make a Move? Let’s Build Your</h1>
<h1>Future Together</h1>
          </div>


<div class="p-4 mx-auto max-w-xl bg-white">
       
        <form class="mt-8 space-y-5" onSubmit={onSubmit}>
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
            <input type='text'name='name' placeholder='Enter Name'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
            <input type='email' placeholder='Enter Email' name='email'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block' >Message</label>
            <textarea placeholder='Enter Message' rows="6" name='message'
              class="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"></textarea>
          </div>
          <button type='submit'
            class="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">{result ? result:"Send Message"}</button>
        </form>
      </div>




</div>
 
 </>
  )
}
