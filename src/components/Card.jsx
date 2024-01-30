import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
  

const Card = ({data, reference}) => {
  return (
    
       <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{bounceStiffness: 200, bounceDamping: 10}} className='w-56 h-[280px] rounded-[35px] bg-slate-300 px-8 py-10 relative flex-shrink-0 overflow-hidden p-5'>
       <FaFileAlt />
       <p className='text text-[15px] mt-5 font-semibold leading-tight'>{data.desc}</p>
       <div className=' footer absolute bottom-0 left-0 w-full'>
            <div className=' flex items-center justify-between mb-3 px-8 py-3'>
                <h5 className='text-[13px] font-semibold'>{data.filesize}</h5>
                <span className='w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center'>
                 {data.close ? <IoClose /> :  <LuDownload  size='.9em' color='black'/>}   
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className= {`tag w-full h-10 ${ data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-orange-600"} py-4 flex items-center justify-center`}><h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3></div>
                ) 
            }
           
         </div>
       </motion.div>
    
  )
}

export default Card
