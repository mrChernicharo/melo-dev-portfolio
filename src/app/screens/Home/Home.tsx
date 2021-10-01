import React, { useEffect, useRef } from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import workingAnim from '../../assets/lottie/77409-working.json';

export default function Home(): JSX.Element {
  const isStopped = false;
  const isPaused = false;
  const options: LottieOptions = {
    animationData: workingAnim,
    // rendererSettings: {}
  };

  return (
    <Styles>
      <h2>Hero</h2>

      <Lottie
        options={options}
        height={400}
        width={400}
        isStopped={true}
        isPaused={isPaused}
      />
    </Styles>
  );
}
