import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../../assets/logo.svg';
const LogoImg = styled.img`
  height: 23px;
`;

function Logo() {
  return (
    <>
      <LogoImg src={LogoSVG} alt={'logo'} />
    </>
  );
}
export default Logo;
