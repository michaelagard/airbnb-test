import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image/Image';
import { Link } from 'react-router-dom';

const FeatureCardContainerLink = styled(Link)`
  display: flex;
  width: ${(props) => props.fcwidth || 'fit-content'};
  max-height: ${(props) => props.fcMaxHeight || '420px'};
  border-radius: 24px;
  overflow: hidden;
`;

const OverlayDescriptionContainer = styled.div`
  padding: 40px;
  position: absolute;
  width: 40%;
  color: white;
  max-width: 448px;
`;

const OverlayDescriptionHeader = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

const OverlayDescription = styled.div`
  line-height: 24px;
`;

function FeatureCard(props) {
  return (
    <FeatureCardContainerLink
      to='/'
      fcwidth={props.fcwidth}
      fcmaxheight={props.fcMaxHeight}
    >
      <Image src={props.image} />
      {props.overlayDesc ? (
        <OverlayDescriptionContainer>
          <OverlayDescriptionHeader>
            {props.overlayDescHeader}
          </OverlayDescriptionHeader>
          <OverlayDescription>{props.overlayDesc}</OverlayDescription>
        </OverlayDescriptionContainer>
      ) : null}
    </FeatureCardContainerLink>
  );
}

export default FeatureCard;
