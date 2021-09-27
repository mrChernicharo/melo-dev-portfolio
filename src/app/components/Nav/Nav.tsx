import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

import { NavStyles, NavLinksStyles, DropdownButtonStyles } from './Styles';

export interface NavLinksProps {
  activePath: string;
  responsive: boolean;
}

interface DropdownButtonProps {
  close: () => void;
}

export default function Nav(): JSX.Element {
  const [activePath, setActivePath] = useState('/');
  const [showDropdown, setShowDropdown] = useState(false);
  const [responsive, setResponsive] = useState(false);

  const { pathname } = useLocation();
  const { width } = useWindowSize();

  function toggleDropdown() {
    if (showDropdown) {
      document.querySelector('.dropdown')?.classList.add('fading');

      setTimeout(() => setShowDropdown(!showDropdown), 400);
    } else {
      setShowDropdown(!showDropdown);
    }
  }

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    setResponsive(width < 570);
  }, [width]);

  return (
    <NavStyles>
      {responsive ? (
        <>
          <DropdownButton close={toggleDropdown} />

          {showDropdown && (
            <>
              <div className="dropdown" onClick={toggleDropdown}>
                <NavLinks activePath={activePath} responsive={responsive} />
              </div>

              <div className="overlay" onClick={toggleDropdown}></div>
            </>
          )}
        </>
      ) : (
        <NavLinks activePath={activePath} responsive={responsive} />
      )}
    </NavStyles>
  );
}

function NavLinks({ activePath, responsive }: NavLinksProps) {
  return (
    <NavLinksStyles responsive={responsive}>
      <Link to="/">
        <span className={activePath === '/' ? 'active' : ''}>home</span>
      </Link>
      <Link to="/projects">
        <span className={activePath === '/projects' ? 'active' : ''}>projects</span>
      </Link>
      <Link to="/about">
        <span className={activePath === '/about' ? 'active' : ''}>about</span>
      </Link>
      <Link to="/contact">
        <span className={activePath === '/contact' ? 'active' : ''}>contact</span>
      </Link>
    </NavLinksStyles>
  );
}

function DropdownButton({ close }: DropdownButtonProps) {
  return (
    <DropdownButtonStyles onClick={close}>
      <FiMenu size={24} />
    </DropdownButtonStyles>
  );
}
