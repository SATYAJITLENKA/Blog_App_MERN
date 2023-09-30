import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Create = () => {
    const navigate=useNavigate();
  const formSubmitted=async(e)=>{
     e.preventDefault();
     const title=e.target.title.value;
     const description=e.target.description.value;

    //  const blogs={
    //  title,
    //   description
      
    //  };

     const response=await fetch('http://localhost:5000/post_blog',{
      method: "POST",
      headers:{
        "Content-Type":"applicaton/json",
      },
      body:JSON.stringify({
        title:title,
        description:description
      }),
     })
     if(response.status==200){
      toast.success("blog posted successfully")
     }else{
      alert("something went wrong")
     }
  setTimeout(() => {
    navigate('/')
  }, 1000);
    

  }
    
 
  return (
    <><Toaster
    position="top-center"
    reverseOrder={false}
  />
  
  <div className='w-[90%] lg:w-[70%] m-auto  mt-16'>
       
       <form onSubmit={formSubmitted} className='flex flex-col text-lg font-medium '>
        <label htmlFor="" className=''>Title:</label>
        <input type="text" name='title' placeholder='enter your name' className='border border-black '/>
        <label htmlFor="" className=' '>Description</label>
        <input type="text" name='description'  className='border border-black h-[150px]'/>
        <button type="submit" className='mt-3 bg-purple-300 py-2 hover:bg-purple-600 transi hover:scale-100 transition-all'>Submit</button>
       </form>
           
        
    </div>
  </>
   
  )
}

export default Create