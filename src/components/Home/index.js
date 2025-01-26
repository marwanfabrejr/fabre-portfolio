import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-m.png'
import Loader from 'react-loaders'
import './index.scss'
import Cubes from '../Cubes'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [...'arwan']
  const jobArray = [...'Web Developer.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Y</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>o</span>
            <span className={`${letterClass} _14`}>,</span>
            <br />
            <span className={`${letterClass} _15`}>I</span>
            <span className={`${letterClass} _16`}>'</span>
            <span className={`${letterClass} _17`}>m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer</h2>
          <Link to="/contact">
            <ul>
              <li>
                Contact Me
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </Link>
        </div>
        <Cubes />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
