import React, { useEffect, useRef } from 'react';
import { Styles } from './Styles';

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
    <Styles>
      <div className="hero-container">
        <img src={hero} />
      </div>

      <div className="heading-container">
        <h1>Hello, I'm Felipe</h1>
        <h2>
          I like to build things with <div>&#123; code &#125;</div>{' '}
        </h2>
      </div>

      <Lottie
        options={options}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </Styles>
  );
}
