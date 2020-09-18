import React, { useState } from 'react';
import DefaultButton from '../DefaultButton/DefaultButton';
import {
  DropdownContainer,
  DropdownMenuContainer,
  DropdownMenuUL,
  DropdownMenuLink,
  HorizontalLine,
} from './Dropdown.styled';

function Dropdown(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDropdownState = (dd) => {
    setMenuOpen(!menuOpen);
  };

  const generateMenu = props.menuArray.map((menuItem) => (
    <div key={menuItem.key.toString()}>
      {menuItem.linebreak ? (
        <HorizontalLine />
      ) : (
        <li>
          <DropdownMenuLink
            to={menuItem.route}
            menuFontSize={props.menuFontSize}
          >
            {menuItem.image}
            {menuItem.title}
          </DropdownMenuLink>
        </li>
      )}
    </div>
  ));
  return (
    <DropdownContainer onClick={() => handleDropdownState(props.dropdownName)}>
      <DefaultButton content={props.title} height={props.height} />
      <DropdownMenuContainer>
        <DropdownMenuUL
          width={props.width}
          right={props.right}
          isOpen={menuOpen}
        >
          {generateMenu}
        </DropdownMenuUL>
      </DropdownMenuContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
