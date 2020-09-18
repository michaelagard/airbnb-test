import React from 'react';
import styled from 'styled-components';

const CheckInInput = styled.input`
  border: none;
  width: 99%;
`;

function CheckIn(props) {
  return <CheckInInput type='date' />;
}

export default CheckIn;
