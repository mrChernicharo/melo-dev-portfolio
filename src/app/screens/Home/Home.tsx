import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import workingAnim from '../../assets/lottie/77409-working.json';
import { videoURLs } from '../../utils/helpers';

import hero from '/images/nasa-hero.jpg';
import waves from '/images/svg-waves.svg';
import topWaves from '/images/svg-waves-top.svg';
import avatar from '/images/new-avatar.jpeg';

import { useWindowSize } from '../../hooks/useWindowSize';
import { useThemeContext } from '../../hooks/ThemeContext';
import { HomeStyles } from './Styles';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { FiMapPin, FiMail } from 'react-icons/fi';

export default function Home(): JSX.Element {
  const [responsive, setResponsive] = useState(false);
  const melRef = useRef<HTMLVideoElement>(null);
  const capoeiraRef = useRef<HTMLVideoElement>(null);

  const animOptions: LottieOptions = {
    animationData: workingAnim,
  };

  const { theme } = useThemeContext();
  const { width, breakpoint } = useWindowSize();

  useEffect(() => {
    setResponsive(v => breakpoint === 'mobile' || breakpoint === 'tablet');
  }, [width]);

  useEffect(() => {
    melRef.current?.play();
    capoeiraRef.current?.play();
  }, []);

  return (
    <HomeStyles responsive={responsive} theme={theme} breakpoint={breakpoint}>
      <section className="top">
        <div>
          <h1>Hi, I'm Felipe</h1>
          <h2>
            My life is to build things with <div className="code">{`{ code }`}</div>
          </h2>

          <p>
            I'm a Brazilian Software Engineer living in Washington DC. My job is to create
            business solutions and compelling experiences, through creativity and coding
            skills, always following the best practices and using the most modern tools.
          </p>
        </div>

        <Lottie
          options={animOptions}
          // style={{ border: '1px solid red' }}
          isStopped={false}
          isPaused={false}
        />
      </section>
      <img src={waves} alt="waves" className="waves" />

      <section className="projects">
        <h2>Check some of my work</h2>
        <VideoPlayer src={videoURLs.gordinho} forwardedRef={melRef} />
        <VideoPlayer src={videoURLs.melMobile} forwardedRef={capoeiraRef} />

        <Link to={'/projects'}>
          <button>Check more projects</button>
        </Link>
      </section>
      <img src={topWaves} alt="waves" className="waves" />

      <section className="about">
        <h2>Get to know me better</h2>

        <img src={avatar} alt="" className="avatar" />
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
        </div>

        <Link to={'/about'}>
          <button>More about me</button>
        </Link>
      </section>

      <section className="contact">
        <h2>And maybe leave me a message</h2>

        <Link to={'/about'}>
          <button>Go to contact page</button>
        </Link>
      </section>
    </HomeStyles>
  );
}
{
  /* <div className="hero-container">
        <img src={hero} />
      </div> */
}
