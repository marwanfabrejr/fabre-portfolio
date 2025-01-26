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
            I’m Marwan Zayed, a 25-year-old Software Developer with a strong
            enthusiasm for web development. I graduated in Computer Science from
            October 6 University’s Faculty of Information Systems and Computer
            Sciences.
          </p>
          <p>
            After graduating, I joined Sphinx Publishing Company as a Front
            Developer, where I created educational curricula, exercises, and
            games for schools across the Middle East using JavaScript, HTML, and
            CSS. This role strengthened my foundation in web development.
          </p>
          <p>
            A year and eight months later, I began working at Blue Holding as a
            Mid-Senior Front End Developer. Here, I develop web applications for
            pharmaceutical and healthcare companies using Next.js, TypeScript,
            and Tailwind CSS.
          </p>
          <p>
            From January to September 2024, I also worked part-time at Blend, a
            Saudi startup, where we built three successful applications to
            streamline restaurant operations. This experience showcased the
            impact of well-designed web solutions.
          </p>

          <p className="lastP">
            I’m always excited to embrace new challenges and grow in the
            ever-evolving world of web development. Let’s create something
            amazing together!
          </p>
        </div>
        <Cubes />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
