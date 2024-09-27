import React, { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'


const parallax = ({ type }) => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 2], ["0%", "200%"])


  return (
    <div
      className="parallex"
      ref={ref}
      style={{
        background: type === "services" ?
          "linear-gradient(180deg,#111132,#0c0c1d)"
          : "linear-gradient(180deg,#111132,#f0703a)"

      }}
    >
      <motion.h1 style={{ y: yBg }}>{type === "services" ? "My skills" : "My Work"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})` }} className="planets" ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>

    </div>
  )
}

export default parallax
