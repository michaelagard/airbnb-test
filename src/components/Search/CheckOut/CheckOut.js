import React from 'react';
import styled from 'styled-components';

const CheckOutInput = styled.input`
  border: none;
  width: 99%;
`;

function CheckOut(props) {
  return <CheckOutInput type='date' />;
}

export default CheckOut;
