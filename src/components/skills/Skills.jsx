import React, { useRef } from 'react'
import './skills.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }

}



const Skills = () => {

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-50px" }) ;//animation start from -100px height 

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>

        </div>
        <div className="title">
          <h1><motion.b whileHover={{color:"red"}}>For Your</motion.b> Business</h1>
          <button>What I did so far</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Blah</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero, ipsa architecto a aspernatur cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero illum inventore consequatur ex doloribus animi, quaerat placeat rerum at rem aut esse cupiditate impedit.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Blah</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero, ipsa architecto a aspernatur cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero illum inventore consequatur ex doloribus animi, quaerat placeat rerum at rem aut esse cupiditate impedit.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Blah</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero, ipsa architecto a aspernatur cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero illum inventore consequatur ex doloribus animi, quaerat placeat rerum at rem aut esse cupiditate impedit.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Blah</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero, ipsa architecto a aspernatur cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero illum inventore consequatur ex doloribus animi, quaerat placeat rerum at rem aut esse cupiditate impedit.
          </p>
          <button>Go</button>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default Skills
