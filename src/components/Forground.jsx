import React, { useRef } from 'react'
import Card from './Card'
import { motion } from 'framer-motion';

const Forground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "This is the background color of the card that will be displayed.",
            filesize: ".6mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now.",
                tagColor: "blue"
            },
        },
        {
            desc: "This is the background color of the card that will be displayed.",
            filesize: ".5mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now.",
                tagColor: "blue"
            },
        },
        {
            desc: "we are the lucky man to enjoy the bubble traping. Now we are enjoy a lot..",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Upload Now...",
                tagColor:"orange"
            },
        },
        {
            desc: "now be can Moving Superfase....yehh I enjoy it..",
            filesize: ".3mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Upload Now...",
                tagColor:"blue",
            },
        },
        {
            desc: "we have a degined the beutifull cards now be lot have fun now...",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Recived Now...",
                tagColor: "orange"
            },
        },
        {
            desc: "we have a degined the beutifull cards now be lot have fun now...",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "send Now...",
                tagColor: "blue"
            },
        },
    ];
  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap'>
       {
        data.map((item, index) =>(
            <Card data ={item} reference ={ref}/>
        ))}
      </div>
    </>
  )
}

export default Forground
