import React, { useState, useEffect } from 'react';
import { Styles } from './Styles';

export default function Contact(): JSX.Element {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);
  return (
    <Styles>
      <h1>Contact</h1>
      <p>{message}</p>
    </Styles>
  );
}
