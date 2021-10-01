import React, { useState, useEffect } from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import mailAnim from '../../assets/lottie/mail.json';

export default function Contact(): JSX.Element {
  const [message, setMessage] = useState('');

  const animOptions: LottieOptions = {
    animationData: mailAnim,
  };

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);
  return (
    <Styles>
      <h1>Contact</h1>
      <p>{message}</p>

      <Lottie options={animOptions} width={400} height={400} />
    </Styles>
  );
}
