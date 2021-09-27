import React, { useState } from 'react';
import { FaCode, FaSun, FaMoon } from 'react-icons/fa';
import Switch from 'react-switch';

import Nav from '../Nav/Nav';
import { Styles } from './Styles';

export default function Header(): JSX.Element {
  const [checked, setChecked] = useState(false);

  // function handleThemeToggle(isChecked: boolean, event: any, id: string) {
  function handleThemeToggle() {
    setChecked(!checked);
  }

  return (
    <Styles>
      <div>
        <FaCode size={36} />
      </div>

      <div>Felipe Chernicharo</div>

      <section>
        <Switch
          id="theme"
          checked={checked}
          onChange={handleThemeToggle}
          checkedIcon={<FaSun size={18} />}
          uncheckedIcon={<FaMoon size={16} />}
          activeBoxShadow="0 0 2px 3px #ff8800"
          onColor="#ff8800"
          height={22}
          width={50}
          handleDiameter={18}
        />
        <Nav />
      </section>
    </Styles>
  );
}
