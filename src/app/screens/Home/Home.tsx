import React, { useEffect, useState } from 'react';
import { Styles } from './Styles';

export default function Home(): JSX.Element {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Styles>
      <h2>Home</h2>
      <p>{message}</p>
    </Styles>
  );
}
