import React, { useState } from 'react'
import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      // delay: 0.5,
      duration: 0.6,
      
      type: "spring",
      stifness: 20,
      // damping: 40
    }
   
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stifness: 400,
      damping: 40
    }
  }
}
export default function Sidebar() {

  const [open, setOpen] = useState(false)
 

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>

      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>

      <ToggleButton setOpen={setOpen} />

    </motion.div>
  )
}
