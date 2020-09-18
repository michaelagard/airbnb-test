import React from 'react';
import styled from 'styled-components';
import FeatureCard from '../../FeatureCard/FeatureCard';

import content1 from '../../assets/content1.jpg';
import content2 from '../../assets/content2.jpg';
import content3 from '../../assets/content3.jpg';
import content4 from '../../assets/content4.jpg';

const MainContentContainer = styled.div`
  width: 100%;
`;

const FCTopContainer = styled.div`
  margin: 48px 0;
`;

const FCBottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function MainContent() {
  return (
    <MainContentContainer>
      <FCTopContainer>
        <FeatureCard
          fcwidth={'100%'}
          fcMaxHeight={'420px'}
          overlayDescHeader={'Get out and stretch your imagination.'}
          overlayDesc={
            'Plan a different kind of getaway to uncover the hidden gems near you.'
          }
          image={content1}
          imageMaxWidth={'initial'}
        />
      </FCTopContainer>
      <FCBottomContainer>
        <FeatureCard image={content2} fcwidth={'33%'} fcheight={'2%'} />
        <FeatureCard image={content3} fcwidth={'33%'} />
        <FeatureCard image={content4} fcwidth={'33%'} />
      </FCBottomContainer>
    </MainContentContainer>
  );
}

export default MainContent;
