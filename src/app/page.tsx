'use client'
import Header from './components/Header/index';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';
import Skills from './pages/Skill/index';

//testing
export default function Home() {
  return (
    <main>
      <Header/>
      <HomePage />
      <Portfolio />
      <About />
      <Skills/>

    </main>
  )
}
