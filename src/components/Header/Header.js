import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import RegionDropdown from './DropdownRegion/DropdownRegion';
import HeaderMenuDropdown from './DropdownHeaderMenu/DropdownHeaderMenu';
import DefaultButton from '../DefaultButton/DefaultButton';

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`;

const RightContent = styled.div`
  display: flex;
  width: 286px;
  justify-content: space-between;
`;

const BecomeAHostText = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <Logo style={{ fill: 'red' }} />
      </Link>
      <RightContent>
        <DefaultButton
          content={<BecomeAHostText>Become a Host</BecomeAHostText>}
          padding={'1px 12px'}
          border={'1px solid rgb(221, 221, 221)'}
        />
        <RegionDropdown />
        <HeaderMenuDropdown />
      </RightContent>
    </HeaderContainer>
  );
}

export default Header;
