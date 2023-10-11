
import About from './components/About'
import HomePage from './components/HomePage'
import Projects from './components/Projects'


export default function Home() {
  return (
    <main className='space-y-36 mt-36 container md:px-32 px-3 m-auto'>
      <HomePage />
      <About />
      <Projects />
    </main>
  )
}
