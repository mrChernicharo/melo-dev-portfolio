import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { FaCode, FaSun, FaMoon } from 'react-icons/fa';

import Nav from '../Nav/Nav';
import { Styles } from './Styles';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function Header(): JSX.Element {
  const [checked, setChecked] = useState(false);
  const { width, height } = useWindowSize();

  function handleThemeToggle(isChecked: boolean, event: any, id: string) {
    // console.log({ isChecked, event, id });
    setChecked(!checked);
  }

  useEffect(() => console.log({ width, height }), [width, height]);

  return (
    <Styles>
      <div>
        <FaCode size={36} />
      </div>
      <Nav />
      <div>Felipe Chernicharo</div>
      <Switch
        id="theme"
        checked={checked}
        onChange={handleThemeToggle}
        checkedIcon={<FaSun size={22} />}
        uncheckedIcon={<FaMoon size={20} />}
        activeBoxShadow="0 0 2px 3px #ff8800"
        onColor="#ff8800"
      />
    </Styles>
  );
}
