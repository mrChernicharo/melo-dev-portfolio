import React from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';

import computers from '../../assets/lottie/48786-tech-reviews.json';

export default function About(): JSX.Element {
  const animOptions: LottieOptions = {
    animationData: computers,
  };

  return (
    <Styles>
      <span>About</span>

      <Lottie options={animOptions} width={400} height={400} />
    </Styles>
  );
}
