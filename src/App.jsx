import Header from './components/Header'
import Hero from './components/Hero'
import Badges from './components/Badges'
import TechStack from './components/TechStack'
import Stats from './components/Stats'
import ActivityGraph from './components/ActivityGraph'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import QuickList from './components/QuickList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Starfield from './components/Starfield'
import Experience from './components/Experience'
// import About from './components/About'

export default function App(){
  return (
    <>
    <Starfield/>
      <Header />
      <main>
        <Hero />
        <Badges />
        {/* <About/> */}
        <TechStack />
        <Experience/>
        <Projects />
        <Stats />
        <ActivityGraph />
        <Skills />
        {/* <QuickList /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
