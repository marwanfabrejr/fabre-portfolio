import './index.scss'
import '../About/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Cubes from '../Cubes'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const slide1 = (
    <>
      <h2>
        <li>Mid-Senior Frontend Developer</li>
      </h2>
      <h3>
        Blue Holding<span> ( 11/2023 - Present ) </span>.
      </h3>
      <ul>
        <li>
          Designing, developing, and implementing web applications using Next.js
          and related front-end technologies, such as React, HTML, CSS, and
          JavaScript.
        </li>
        <li>
          Collaborating with cross-functional teams, including designers,
          front-end developers, and product managers, to gather and refine
          requirements, ensuring alignment with overall business goals and
          client needs.
        </li>
        <li>
          Optimizing web applications for maximum performance, compatibility,
          and responsiveness across various platforms and devices.
        </li>
        <li>
          Staying up to date with the latest advancements in Next.js, React, and
          front-end web development technologies, and identifying opportunities
          to enhance existing applications or create new ones.
        </li>
      </ul>
    </>
  )

  const slide2 = (
    <>
      <h2>
        <li>Frontend Developer</li>
      </h2>
      <h3>
        Blend<span> ( 01/2024 - 9/2024 ) </span>.
      </h3>
      <ul>
        <li>
          A Project to build three Connected applications: Menu Management App,
          Order Management App, and "Blender" overview app to monitor overall
          performance.
        </li>
        <li>
          Developed and implemented these projects using Next.js, TypeScript,
          and Tailwind CSS, delivering efficient and responsive solutions.
        </li>
        <li>
          Collaborated closely with the team to ensure the applications met
          business goals and user needs, receiving significant positive
          feedback.
        </li>
        <li>
          Played a key role in optimizing performance, ensuring seamless
          scalability and user satisfaction.
        </li>
      </ul>
    </>
  )

  const slide3 = (
    <>
      <h2>
        <li>Frontend Developer</li>
      </h2>
      <h3>
        Sphinx Publishing Company of Egypt along with Sayegh Publishing Library
        of Lebanon<span> ( 02/2022 - 10/2023 ) </span>.
      </h3>
      <ul>
        <li>
          Develops and implements front-end code using HTML, CSS, JavaScript to
          meet business requirements.
        </li>
        <li>
          Collaborates with a team to fix bugs in existing code, resolves
          front-end and CSS issues, and designs new features for our web
          applications.
        </li>
        <li>
          Ensures that all codes are well documented, reusable, efficient, and
          follow best practices.
        </li>
        <li>
          Improves site speed by optimizing images and reducing HTTP requests
          when possible.
        </li>
        <li>
          Implements responsive design techniques so the site could be viewed on
          any device without issue.
        </li>
      </ul>
    </>
  )

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[...'Experience']}
              idx={7}
              letterClass={letterClass}
            />
          </h1>
          <Slider {...sliderSettings}>
            <div>{slide1}</div>
            <div>{slide2}</div>
            <div>{slide3}</div>
          </Slider>
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
