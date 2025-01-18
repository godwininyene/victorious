import React from 'react'
import {projects } from '../data/data';
import { useSearchParams, Link } from 'react-router-dom';



const ProjectSection = () => {

    const[searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("category");

    const displayProjects = typeFilter ? projects.filter(project => project.type == typeFilter) : projects; 
    
  return (
    <div className="max-w-6xl mx-auto">

        <div className='md:grid md:grid-cols-3  gap-x-4 gap-y-5'>
        
            <div className='mb-7 lg:mb-0'>

                <div className='mb-5' data-aos="fade-up">
                    <a className='uppercase px-5 py-2 border-b border-primary rounded-full text-center font-medium'>Image Gallery</a>
                </div>

                <div className='mb-7 max-w-2xl mx-auto lg:max-w-none'data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                    <h1 className='heading-primary ext-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[70px] font-extrabold text-[rgb(40,44,49)]'>Projects We Have Done</h1>
                </div>
            </div>

            
            {
                (displayProjects.length > 0)?(
                    displayProjects.map(project=>(
                        <div  key={project.id} className='mb-7 lg:mb-0'>
                           <div className='gallery-item rounded-xl overflow-hidden group'>
                               <a href="" title={`${project.type}`} className='relative'>
                                    <div className='content bg-transparent transition-all duration-[0.4s] group-hover:bg-[#477763b3] opacity-0 group-hover:opacity-100 absolute top-0 p-8 w-full h-full  z-[99]'>
                                       <div className='tag'>
                                            <span className='bg-[#31231E] inline-block rounded-[50px] text-white px-5 py-[6px] transform -translate-x-5 transition-all duration-[0.4s] opacity-0 group-hover:translate-x-0 group-hover:opacity-100'>{project.type}</span>
                                       </div>
                                       <h3 className='transform -translate-x-5 text-2xl mb-2 text-white transition-all duration-[0.4s] font-medium delay-[0.1s] opacity-0 group-hover:translate-x-0 group-hover:opacity-100'>{project.sub_type}</h3>
                                    </div>
                                    <img src={project.image} alt="" className='w-full transition-all duration-[0.4s] transform group-hover:scale-[1.04]'/>
                               </a>
                           </div>
                        </div>
                    ))
                ):<h1 className="text-2xl mb-4 font-bold">No Project(s) for this category at the moment. Please check back later.</h1>
            }
        
        </div>
  </div>
  )
}

export default ProjectSection