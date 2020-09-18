import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || '36px'};
  padding: ${(props) => props.padding || '0px 10px'};
  border-radius: ${(props) => props.borderRadius || '21px'};
  border: ${(props) => props.border || '1px solid rgb(221, 221, 221)'};
  box-shadow: ${(props) => props.boxShadow || '1px 1px 2px black'};
  cursor: ${(props) => props.cursor || 'pointer'};
  :hover {
    border: ${(props) => props.hoverBorder || '1px solid gray'};
    color: rgb(34, 34, 34);
  }
`;

function DefaultButton(props) {
  return (
    <StyledButton
      border={props.border}
      padding={props.padding}
      height={props.height}
      onClick={props.click}
      width={props.width}
    >
      {props.content}
    </StyledButton>
  );
}

export default DefaultButton;
