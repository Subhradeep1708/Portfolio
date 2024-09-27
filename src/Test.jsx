import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function Test() {

    const [open, setOpen] = useState(false)

    const variant = {
        visible: { opacity: 1, x: 400, transition: { type:"spring" } },
        hidden: { opacity: 0 }
    }

    return (
        <div className='course'>
            <motion.div
                className="box"

                variants={variant}
                // initial={{opacity:1 , scale:0.5}}
                // transition={{ duration: 2 }}
                animate={open ? "visible" : "hidden"}
            ></motion.div>
            <button onClick={() => setOpen(prev => !prev)}>click</button>
        </div>
    )
}
