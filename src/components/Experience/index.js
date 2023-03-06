import './index.scss'
import '../About/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Cubes from '../Cubes'

const Experience = () => {
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
              strArray={[...'Experience']}
              idx={7}
              letterClass={letterClass}
            />
          </h1>
          <h2>
            <li>Frontend Web Developer</li>
          </h2>
          <h3>
            Sphinx Publishing Company of Egypt along with Sayegh Publishing
            Library of Lebanon<span> ( 02/2022 - Present ) </span>.
          </h3>
          <ul>
            <li>
              Develops and implements front-end code using HTML, CSS, JavaScript
              to meet business requirements.
            </li>
            <li>
              Collaborates with a team to fix bugs in existing code, resolves
              front-end and CSS issues and to designs new features for our web
              applications.
            </li>
            <li>
              Ensures that all codes are well documented, reusable, efficient,
              and follows best practices.
            </li>
            <li>
              Improves site speed by optimizing images and reducing HTTP
              requests when possible.
            </li>
            <li>
              Implements responsive design techniques so the site could be
              viewed on any device without issue.
            </li>
          </ul>
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

export default Experience
