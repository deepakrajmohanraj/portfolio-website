import { useEffect, useState } from 'react'
import {
  faPython,
  faAws,
  faGithub,
  faJira,
  faDocker,
  faGit,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

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
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a highly skilled front-end developer with a strong background in data science, continuously seeking opportunities to work with cutting-edge technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I am confident, naturally curious, and always improving my skills one design problem at a time.
          </p>
          <p>
            My technical background spans various programming languages, databases, cloud platforms, big data tools, and machine learning techniques.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGithub} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJira} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDocker} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
