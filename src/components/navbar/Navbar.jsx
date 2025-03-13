import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'


const Navbar = () => {
    return (
        <div className="navbar">
            {/* sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >SUBHRADEEP SARDAR</motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100092511189060"><img src="/facebook.png" alt="" /></a>
                    <a href="https://www.instagram.com/sardar_subhradeep?igsh=MTRjeGh5aHR0bWVtcg=="><img src="/instagram.png" alt="" /></a>
                    <a href="https://github.com/Subhradeep1708"><img src="/github-mark-white.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/subhradeep-sardar"><img src="/In-Blue-21@2x.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
