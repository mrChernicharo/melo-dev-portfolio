import React from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';

import {
  FaMarker,
  FaStar,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';

import computersAnimation from '../../assets/lottie/48786-tech-reviews.json';

import { techCategories, skillsList } from '../../utils/skills';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function About(): JSX.Element {
  const { breakpoint } = useWindowSize();
  const animOptions: LottieOptions = {
    animationData: computersAnimation,
  };
  return (
    <Styles breakpoint={breakpoint}>
      <h1>About</h1>

      <Lottie options={animOptions} width={400} height={400} />

      <h2>Felipe who?</h2>

      <div className="links-list">
        <ul>
          <li>
            <span>
              <strong>
                <FiMapPin size={20} /> Current Location:&nbsp;
              </strong>
              Washington DC
            </span>
          </li>
          <li>
            <a href="https://string7dev@gmail.com" target="_blank">
              <span>
                <strong>
                  <FiMail size={20} /> string7dev@gmail&nbsp;
                </strong>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/felipe-chernicharo-27ba911a8/"
              target="_blank"
            >
              <strong>
                <FaLinkedin size={20} /> Felipe Chernicharo&nbsp;
                <span></span>
              </strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/mrChernicharo" target="_blank">
              <span>
                <strong>
                  <FaGithub size={20} /> mrChernicharo&nbsp;
                </strong>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/13111779/felipe-chernicharo"
              target="_blank"
            >
              <span>
                <strong>
                  <FaStackOverflow size={20} /> Felipe&nbsp;
                </strong>
              </span>
            </a>
          </li>
        </ul>

        <p>Web | Systems | Solutions Developer</p>
        <p>Coding since 2018</p>
      </div>

      <button type="button">
        <a href="https://mrchernicharo.github.io/curriculum/" target="_blank">
          Get CV
        </a>
      </button>

      <h2>Stuff that I like to work with</h2>
      <div className="skillList">
        {skillsList.map(skill => (
          <div className="skill-div" key={skill.name}>
            <img src={skill.logo} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </Styles>
  );
}
