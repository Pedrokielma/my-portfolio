'use client'
import Header from './components/Header/index';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';

//testing
export default function Home() {
  return (
    <main>
      <Header/>
      <HomePage />
      <Portfolio />
      <About />
    </main>
  )
}
