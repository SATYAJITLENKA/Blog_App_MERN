import React from "react";
import { useState,useEffect } from "react";

const Home = () => {




  const [blog,setBlog]=useState([]);
  useEffect(()=>{
    getBlogs();
  },[])
     

  const getBlogs=async()=>{
    const response=await fetch('http://localhost:5000/');
    const data=await response.json();
    console.log(data);
    setBlog(data)
  }



  return (

    <>

    <div>
      {
        blog.map((ele)=>{

          return <div className="flex flex-col box-border shadow-xl w-[90%] p-5 lg:w-[70%] m-auto  mt-16" key={postMessage._id}>
          <div className="flex justify-between" >
            <h1 className="text-lg font-bold  ">
              {ele.title}
            </h1>
            <div className="flex gap-5">
           <button>delete</button>
           <button>edit</button>
           </div>
            </div>
            
         
          <p>
           {ele.description}
          </p>
        </div>
        })
      }
    </div>
   
  
    </>
  );
};

export default Home;
