import React from 'react';
import styled from 'styled-components';

const LocationInput = styled.input`
  border: none;
  width: 99%;
`;

function Location(props) {
  return <LocationInput placeholder={props.placeholder} />;
}

export default Location;
