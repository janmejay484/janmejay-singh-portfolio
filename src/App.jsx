import Header from './components/Header'
import Hero from './components/Hero'
import Badges from './components/Badges'
import TechStack from './components/TechStack'
import Stats from './components/Stats'
import ActivityGraph from './components/ActivityGraph'
import Skills from './components/Skills'
import Projects from './components/Projects'
import QuickList from './components/QuickList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Starfield from './components/Starfield'

export default function App(){
  return (
    <>
    <Starfield/>
      <Header />
      <main>
        <Hero />
        <Badges />
        <TechStack />
        <Stats />
        <ActivityGraph />
        <Skills />
        <Projects />
        <QuickList />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
