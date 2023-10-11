
import About from './components/About'
import HomePage from './components/HomePage'
import Projects from './components/Projects'


export default function Home() {
  return (
    <main className='space-y-72 mt-24'>
      <HomePage />
      <About />
      <Projects />
    </main>
  )
}
