import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBoxComponentContainer = styled.form`
  display: flex;
  width: 100%;
  border: 1px solid grey;
  border-radius: 12px;
`;

export const SearchBoxContainer = styled.div`
  width: 100%;
  border: 1px solid grey;
  padding: 10px;
  border-top: 0;
  border-bottom: 0;
  border-left: ${(props) => (props.neighborHovered ? '1px solid grey' : '0')};
  border-right: ${(props) => (props.neighborHovered ? '1px solid grey' : '0')};
  border-left: ${(props) => (props.isHovered ? '1px solid grey' : '0')};
  border-right: ${(props) => (props.isHovered ? '1px solid grey' : '0')};
  border-radius: ${(props) => (props.isHovered ? '12px' : '0')};
`;

export const SearchBoxTitleLabel = styled.label`
  font-size: 12px;
  font-weight: 300;
`;

export const TabMenuContainer = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const TabMenuItem = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  margin: 0 14px 12px 0;
  padding: 0 0 8px 0;
  border-bottom: ${(props) =>
    props.isSelected ? '2px solid black' : '2px solid white'};

  :hover {
    border-bottom: 2px solid black;
  }
`;
