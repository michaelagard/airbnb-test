import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/Dropdown/Dropdown';
import UsrImg from '../../assets/default_user.svg';
import HamImg from '../../assets/hamburger.svg';
import { Image } from '../../Image/Image';

const DropdownStyle = styled.div`
  display: flex;
  width: 52px;
  justify-content: space-between;
`;

const menuArr = [
  { key: 0, title: 'Log in', route: '/login' },
  { key: 1, title: 'Sign up', route: '/signup' },
  { key: 2, title: null, route: '/', linebreak: true },
  { key: 3, title: 'Host your home', route: '/hosthome' },
  { key: 4, title: 'Host your experience', route: '/hostexperience' },
  { key: 5, title: 'Help', route: '/help' },
];

function DropdownHeaderMenu() {
  return (
    <Dropdown
      title={
        <DropdownStyle>
          <Image
            padding={'0px 4px'}
            width={'16px'}
            img
            src={HamImg}
            alt={'Hamburger menu'}
          />
          <Image width={'30px'} src={UsrImg} alt={'User'} />
        </DropdownStyle>
      }
      menuArray={menuArr}
      width={'180px'}
      height={'36px'}
      right={'110px'}
      dropdownName={'dropdownmain'}
    />
  );
}

export default DropdownHeaderMenu;
