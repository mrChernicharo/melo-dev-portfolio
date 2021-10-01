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

export default function About(): JSX.Element {
  const animOptions: LottieOptions = {
    animationData: computersAnimation,
  };

  const arr = ['jeu', 'hey', 'ho'];
  return (
    <Styles>
      <span>About</span>

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

      {skillsList.map(skill => (
        <div key={skill.name}>
          {skill.name}

          <img src={`src/app/assets/${skill.logo}`} width={42} height={42} />
        </div>
      ))}
    </Styles>
  );
}
