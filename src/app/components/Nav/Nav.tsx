import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from './Styles';
export default function Nav(): JSX.Element {
  return (
    <Styles>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/projects">
        <span>Projects</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="/contact">
        <span>Contact</span>
      </Link>
    </Styles>
  );
}
