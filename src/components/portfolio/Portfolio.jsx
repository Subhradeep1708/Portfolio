import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/3238529/pexels-photo-3238529.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti. "
    },
    {
        id: 2,
        title: "Rn app",
        img: "https://images.pexels.com/photos/3238529/pexels-photo-3238529.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti. "
    },
    {
        id: 3,
        title: "Blog app",
        img: "https://images.pexels.com/photos/3238529/pexels-photo-3238529.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti. "
    },
    {
        id: 4,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/3238529/pexels-photo-3238529.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti. "
    },
];

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,

    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return <section ref={ref}>
        <div className="container">
            <img src={item.img} alt="" />
            <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
        </div>
    </section>

}

export default function Portfolio() {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })


    const scaleX = useSpring(scrollYProgress,
        {
            stiffness: 100,
            damping: 30
        }
    )



    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>My Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => {
                <Single item={item} key={item.id} />
            })}
        </div>
    )
}
