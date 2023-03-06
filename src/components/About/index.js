import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Cubes from '../Cubes'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[...'About me']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <p>
            Web Application Developer with proficient knowledge of entire
            software development life cycle and React expertise, seeking to
            learn and grow in a collaborative team environment.
          </p>
          <p align="LEFT">
            I am skilled at JavaScript, CSS, and HTML to design the user
            interface and deploy it effectively in applications.
          </p>
          <p>
            I primarily focus on writing clean, elegant, and efficient code. I
            excel at creating pixel-perfect designs and working with
            cross-browser compatibility issues.
          </p>
        </div>
        <Cubes />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
