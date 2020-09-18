import styled from 'styled-components';

export const Image = styled.img`
  width: ${(props) => props.imageMaxWidth || ''};
  padding: ${(props) => props.imagePadding || ''};
  max-height: ${(props) => props.imageMaxHeight || ''};
`;
