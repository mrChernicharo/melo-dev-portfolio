import React, { useEffect, useRef } from 'react';
import { HomeStyles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import workingAnim from '../../assets/lottie/77409-working.json';

import hero from '/images/nasa-hero.jpg';

export default function Home(): JSX.Element {
  const isStopped = false;
  const isPaused = false;
  const options: LottieOptions = {
    animationData: workingAnim,
  };

  return (
    <HomeStyles>
      <main>
        <div>
          <h1>Hello, I'm Felipe</h1>
          <h2>
            I love to build things with <div>{`{ code }`}</div>
          </h2>

          <p>
            I'm a Brazilian Software Engineer living in Washington DC. My job is to create
            business solutions and compelling experiences, through creativity and coding
            skills, always following the best practices and using the most modern tools.
          </p>
        </div>
        <Lottie
          options={options}
          height={400}
          width={400}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </main>
    </HomeStyles>
  );
}
{
  /* <div className="hero-container">
        <img src={hero} />
      </div> */
}
