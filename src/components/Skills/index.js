import './index.scss'
import '../About/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Cubes from '../Cubes'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      {' '}
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[...'Skills']}
              idx={7}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I’m all about building sleek and efficient web applications with the
            latest front-end technologies. Here are my main tools of the trade:
          </p>
          <ul>
            <li>
              <span class="tech-tag">Next.js</span> – Crafting scalable and
              SEO-friendly web apps
            </li>
            <li>
              <span class="tech-tag">TypeScript</span> – Bringing type safety
              and cleaner code to the table
            </li>
            <li>
              <span class="tech-tag">Tailwind CSS</span> – Designing responsive
              and stylish interfaces effortlessly
            </li>
            <li>
              <span class="tech-tag">Redux Toolkit</span> – Effortless state
              management for complex apps
            </li>
            <li>
              <span class="tech-tag">Socket.IO</span> – Adding real-time,
              interactive features to enhance user experience
            </li>
          </ul>
          <p>
            While I’m not a designer, I have a keen eye for aesthetics and excel
            in creating intuitive, responsive designs. I’m passionate about
            writing optimized code and always strive to deliver the best user
            experience. Committed and reliable, I bring energy and dedication to
            every project I tackle.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marwan-zayed-4b1554213/"
            >
              LinkedIn{' '}
            </a>
            profile for more details. Also you can checkout my CV on this
            <a
              target="_blank"
              download=""
              href="https://fuchsia-domeniga-92.tiiny.site/"
            >
              link
            </a>
            .
          </p>
        </div>
        <Cubes />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
