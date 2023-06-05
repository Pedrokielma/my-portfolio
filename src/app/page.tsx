'use client'
import Header from './components/Header/index';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';
import Skill from './pages/Skill/index';
import Insight from './pages/Insight/index';
import Contact from './pages/Contact/index';

//testing
export default function Home() {
  return (
    <main>
      <Header />
      <HomePage id='1'/>
      <Portfolio id='2'/>
      <About id='3' />
      <Skill id='4'/>
      <Insight id='5'/>
      <Contact id='6'/>

    </main>
  )
}
