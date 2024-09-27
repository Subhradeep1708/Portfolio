import { motion } from 'framer-motion'
import './hero.scss'
function Hero() {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0

        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }

        },
        scrollBtn: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: "10%",

        },
        animate: {
            x: "-497%",

            transition: {
                repeat: Infinity,
                duration: 20,
                repeatType: "mirror",
            }

        },
    }

    return (
        <div className="hero">
            <motion.div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>SUBHRADEEP SARDAR</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web & React-Native Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See my Works</motion.button>
                        <motion.button variants={textVariants}>Let's Talk</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollBtn" src="/scroll.png" alt="" />
                </motion.div>
            </motion.div>

            <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextCotainer">
                Full Stack Web & App Developer
            </motion.div>
            <motion.div className="imageContainer">
                <motion.img src="/hero1.png" alt=""  initial={{ opacity: 0 }} animate={{ opacity: 1, offset: 0.5, duration: 3 , transition: { type:"spring" } }} />
            </motion.div>
        </div>
    )
}

export default Hero