import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { Image } from '../../Image/Image';
import RegionImg from '../../assets/region.svg';
import DownArrowImg from '../../assets/downarrow.svg';

const DropdownStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 100%;
`;
const StyledImage = styled(Image)`
  /* margin: 0 3px 0 0; */
`;

const menuArr = [
  {
    key: 0,
    title: 'English',
    route: '/login',
    image: <Image width={'12px'} src={RegionImg} />,
  },
  { key: 1, title: 'USD', route: '/signup' },
];

function DropdownRegion() {
  return (
    <Dropdown
      title={
        <DropdownStyle>
          <StyledImage width={'18px'} src={RegionImg} />
          <Image height={'6px'} width={'9px'} src={DownArrowImg} />
        </DropdownStyle>
      }
      menuArray={menuArr}
      width={'80px'}
      right={'22px'}
    />
  );
}

export default DropdownRegion;
