import Test from './Test';
import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navabr/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';


const App = () => {
  return (
    <div>

      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='About Me'>
        <Parallax type="services" />
      </section>
      <section >
        <Skills />
      </section>
      <section id='Portfolio'>
        <Parallax type="portfolio" />
      </section>
      <section>
        <Portfolio />
      </section>

      <section id='Contact'>Contact</section>
      {/* 
    <Test/>
    <Test/> */}

    </div>
  )
}

export default App;