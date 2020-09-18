import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownContainer = styled.div`
  user-select: none;
  height: 0;
`;

export const DropdownMenuContainer = styled.div`
  display: absolute;
  width: 0;
  height: 0;
`;

export const DropdownMenuUL = styled.ul`
  position: relative;
  right: ${(props) => props.right || '0'};
  top: 10px;
  opacity: 1;
  opacity: ${(props) => props.isOpen || '0'};
  display: ${(props) => props.isOpen || 'none'};
  width: ${(props) => props.width || 'fit-content'};
  border-radius: 12px;
  border: 2px solid darkgray;
  box-shadow: 1px 1px 2px black;
  padding: 5px 0;
  background: white;
`;

export const DropdownMenuLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;
  padding: 5px 12px;
  font-size: ${(props) => props.menuFontSize || '14px'};
  letter-spacing: -0.5px;
  font-weight: 500;
  :hover {
    background: lightgray;
  }
`;

export const HorizontalLine = styled.hr`
  color: lightgray;
`;
