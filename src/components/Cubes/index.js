import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { SiNextdotjs } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'

const Cubes = () => {
  return (
    <div className="stage-cube-cont">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="cubespinner">
        <div className="face1">
          {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
          <SiNextdotjs />
        </div>
        <div className="face2">
          <FaReact />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <RiTailwindCssFill />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
  )
}

export default Cubes
