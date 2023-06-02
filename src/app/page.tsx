'use client'
import Header from './components/Header/index';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio/index';

//testing
export default function Home() {
  return (
    <main>
      <Header/>
      <HomePage />
      <Portfolio />
    </main>
  )
}
